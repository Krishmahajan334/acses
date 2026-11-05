/* ============================================================
   ACSES DKTE — GALLERY PAGE LOGIC
   Existing gallery/coverflow/lightbox design preserved; portal photos & reels added.
============================================================ */

const displayGallery = ALL_GALLERY;

function photoTileHTML(g, isLightbox = false) {
  if (g.type === 'video') {
    if (isLightbox) {
      return `
        <div class="lightbox-reel-wrap">
          <div class="reel-header-badge">
            <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>Reel</span>
          </div>
          <div class="lightbox-reel-stage" id="reelStage" title="Tap to pause/play">
            <video id="lightboxActiveVideo" src="${g.videoSrc}" poster="${g.poster || ''}" autoplay loop playsinline preload="auto"></video>
            <div class="reel-center-feedback" id="reelFeedback">
              <!-- Dynamically populated icon -->
            </div>
            <div class="reel-central-controls">
              <button class="reel-action-pill" id="reelPlayPauseBtn" type="button" aria-label="Play / Pause">
                <svg id="reelPlayPauseIcon" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                <span id="reelPlayPauseText">Pause</span>
              </button>
              <button class="reel-action-pill" id="reelAudioBtn" type="button" aria-label="Mute / Unmute">
                <svg id="reelAudioIcon" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                <span id="reelAudioText">Mute</span>
              </button>
            </div>
          </div>
          <div class="lightbox-media-info">
            <div class="photo-title" style="font-size:15px; margin-bottom:4px;">${g.title}</div>
            <div class="photo-meta">${g.category} · ${g.year} · Tap video to play/pause</div>
          </div>
        </div>
      `;
    }

    return `
      <div class="photo-tile tone-${g.tone}">
        <div class="gallery-video-container">
          <video class="gallery-card-video" src="${g.videoSrc}" poster="${g.poster || ''}" autoplay loop muted playsinline preload="metadata"></video>
        </div>
        <div class="video-badge">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>Reel</span>
        </div>
        <div class="photo-title">${g.title}</div>
        <div class="photo-meta">${g.category} · ${g.year}</div>
      </div>
    `;
  }

  if (isLightbox) {
    return `
      <div class="lightbox-photo-wrap">
        <img class="lightbox-photo-img" src="${g.img}" alt="${g.title}" />
        <div class="lightbox-media-info">
          <div class="photo-title" style="font-size:15px; margin-bottom:4px;">${g.title}</div>
          <div class="photo-meta">${g.category} · ${g.year}</div>
        </div>
      </div>
    `;
  }

  const imageEl = g.img
    ? `<img class="photo-tile-img" src="${g.img}" alt="${g.title}" loading="lazy" />`
    : '';

  return `
    <div class="photo-tile tone-${g.tone}">
      ${imageEl}
      <svg class="cam" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.6"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13.5" r="3.2"/></svg>
      <div class="photo-title">${g.title}</div>
      <div class="photo-meta">${g.category} · ${g.year}</div>
    </div>
  `;
}

document.getElementById('headerStats').innerHTML = [
  { value: displayGallery.length, label: "Photos" },
  { value: new Set(displayGallery.map(g => g.event)).size, label: "Events covered" },
  { value: new Set(displayGallery.map(g => g.category)).size, label: "Categories" },
].map(s => `<div><div class="n">${s.value}</div><div class="l">${s.label}</div></div>`).join('');

(function () {
  const ring = document.getElementById('galleryRing');
  if (!ring) return;
  const items = displayGallery.filter(g => g.img).slice(0, 8);
  const radius = 300;
  const step = 360 / items.length;
  ring.innerHTML = items.map((g, i) => `
    <div class="ring-item" data-index="${i}" style="transform:rotateY(${i * step}deg) translateZ(${radius}px);">
      ${photoTileHTML(g)}
    </div>
  `).join('');

  let angle = 0;
  let autoRotate = true;
  let dragging = false;
  let startX = 0, startAngle = 0;

  function apply() { ring.style.transform = `rotateY(${angle}deg)`; }

  ring.addEventListener('pointerdown', (e) => {
    dragging = true; autoRotate = false;
    startX = e.clientX; startAngle = angle;
    ring.setPointerCapture(e.pointerId);
  });
  ring.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    angle = startAngle + (e.clientX - startX) * 0.35;
    apply();
  });
  function endDrag() { dragging = false; setTimeout(() => { autoRotate = true; }, 2200); }
  ring.addEventListener('pointerup', endDrag);
  ring.addEventListener('pointerleave', () => { if (dragging) endDrag(); });

  ring.querySelectorAll('.ring-item').forEach(el => {
    el.addEventListener('click', () => { if (!dragging) openLightbox(parseInt(el.dataset.index, 10)); });
  });

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    (function loop() {
      if (autoRotate) angle += 0.06;
      apply();
      requestAnimationFrame(loop);
    })();
  } else {
    apply();
  }
})();

let activeCategory = 'All';
const categories = ['All', ...Array.from(new Set(displayGallery.map(g => g.category)))];

function renderChips() {
  const el = document.getElementById('galleryChips');
  el.innerHTML = categories.map(c => `<button class="chip ${activeCategory === c ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('');
  el.querySelectorAll('.chip').forEach(btn => btn.addEventListener('click', () => { activeCategory = btn.dataset.cat; renderChips(); renderGrid(); }));
}

function renderGrid() {
  const list = displayGallery
    .map((g, i) => ({ ...g, _i: i }))
    .filter(g => activeCategory === 'All' || g.category === activeCategory);
  const el = document.getElementById('photoGrid');
  const countEl = document.getElementById('resultCount');
  countEl.textContent = `${list.length} photo${list.length === 1 ? '' : 's'}`;
  if (!list.length) {
    el.innerHTML = `<div class="empty-state">No photos in this category yet.</div>`;
    return;
  }
  el.innerHTML = list.map((g, i) => `
    <div class="photo-card reveal3d" style="--rd:${i * 40}ms;" data-index="${g._i}">
      ${photoTileHTML(g)}
    </div>
  `).join('');
  el.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index, 10)));
  });
  window.observeReveals();
  if (window.bindHoverTargets) window.bindHoverTargets();
}

let lbIndex = 0;
const lightbox = document.getElementById('lightbox');
const lbFrame = document.getElementById('lightboxFrame');

function renderLightbox() {
  const g = displayGallery[lbIndex];
  lbFrame.innerHTML = photoTileHTML(g, true);

  const video = lbFrame.querySelector('#lightboxActiveVideo');
  if (video) {
    // When opened in full view, it should play unmuted
    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback: if browser blocks unmuted sound, start muted and update UI
        video.muted = true;
        video.play();
        updateAudioUI();
      });
    }

    const reelStage = lbFrame.querySelector('#reelStage');
    const feedback = lbFrame.querySelector('#reelFeedback');
    const playPauseBtn = lbFrame.querySelector('#reelPlayPauseBtn');
    const playPauseIcon = lbFrame.querySelector('#reelPlayPauseIcon');
    const playPauseText = lbFrame.querySelector('#reelPlayPauseText');
    const audioBtn = lbFrame.querySelector('#reelAudioBtn');
    const audioIcon = lbFrame.querySelector('#reelAudioIcon');
    const audioText = lbFrame.querySelector('#reelAudioText');

    let feedbackTimer = null;
    const showFeedback = (html) => {
      if (!feedback) return;
      feedback.innerHTML = html;
      feedback.classList.add('active');
      clearTimeout(feedbackTimer);
      feedbackTimer = setTimeout(() => {
        feedback.classList.remove('active');
      }, 500);
    };

    const updatePlayStateUI = () => {
      if (video.paused) {
        if (playPauseIcon) playPauseIcon.innerHTML = `<polygon points="6 4 19 12 6 20 6 4"/>`;
        if (playPauseText) playPauseText.textContent = "Play";
      } else {
        if (playPauseIcon) playPauseIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
        if (playPauseText) playPauseText.textContent = "Pause";
      }
    };

    const updateAudioUI = () => {
      if (video.muted) {
        if (audioIcon) audioIcon.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`;
        if (audioText) audioText.textContent = "Unmute";
      } else {
        if (audioIcon) audioIcon.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
        if (audioText) audioText.textContent = "Mute";
      }
    };

    const togglePlay = () => {
      if (video.paused) {
        video.play();
        showFeedback(`<svg viewBox="0 0 24 24"><polygon points="6 4 19 12 6 20 6 4"/></svg>`);
      } else {
        video.pause();
        showFeedback(`<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`);
      }
      updatePlayStateUI();
    };

    const toggleAudio = () => {
      video.muted = !video.muted;
      if (video.muted) {
        showFeedback(`<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`);
      } else {
        showFeedback(`<svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`);
      }
      updateAudioUI();
    };

    // Instagram tap behavior: tapping anywhere on the reel toggles playback
    if (reelStage) {
      reelStage.addEventListener('click', (e) => {
        if (e.target.closest('.reel-central-controls')) return;
        togglePlay();
      });
    }

    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePlay();
      });
    }

    if (audioBtn) {
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleAudio();
      });
    }

    video.addEventListener('play', updatePlayStateUI);
    video.addEventListener('pause', updatePlayStateUI);
    updatePlayStateUI();
    updateAudioUI();
  }
}
function openLightbox(i) {
  lbIndex = i;
  renderLightbox();
  lightbox.classList.add('open');
  document.body.classList.add('menu-open');
}
function closeLightbox() {
  const video = lbFrame.querySelector('video');
  if (video) {
    video.pause();
    video.src = '';
  }
  lbFrame.innerHTML = '';
  lightbox.classList.remove('open');
  document.body.classList.remove('menu-open');
}
function stepLightbox(delta) {
  const video = lbFrame.querySelector('video');
  if (video) video.pause();
  lbIndex = (lbIndex + delta + displayGallery.length) % displayGallery.length;
  renderLightbox();
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => stepLightbox(-1));
document.getElementById('lightboxNext').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
window.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') stepLightbox(-1);
  if (e.key === 'ArrowRight') stepLightbox(1);
});

renderChips();
renderGrid();
