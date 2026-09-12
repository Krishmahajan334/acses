/* ============================================================
   ACSES DKTE — EDITABLE CONTENT
   Change anything in this file to update the live site.
   No build step needed — just save and refresh the page.
   This single file feeds every page (home, about, events,
   gallery, members, contact).
============================================================ */

// ---- Hero stat chips (shown floating in the home hero) ----
const HERO_STATS = [
  { label: "Founded", value: "2000" },
  { label: "Members", value: "2130" },
  { label: "Events / yr", value: "5–6" },
];

// ---- About section ----
const ABOUT = {
  heading: "A community where learning meets opportunity",
  paragraphs: [
    "ACSES began forming in the early 2000s with a clear goal: sharpen students' technical knowledge and close the gap between classroom theory and the practical world of computer science and engineering.",
    "Since then, the association has driven participation across technical, co-curricular, and extracurricular activities — shaping well-rounded engineering graduates one cohort at a time."
  ],
  mission: "To empower students with practical skills, industry connections, and innovative thinking that transforms their academic journey into successful tech careers.",
  stats: [
    { num: "2000", label: "Founded" },
    { num: "2130", label: "Members" },
    { num: "DKTE", label: "Core institute" },
    { num: "5–6", label: "Events / year" },
  ],
  pillars: [
    { title: "Technical Excellence", desc: "Workshops, hackathons, and hands-on projects." },
    { title: "Community Support", desc: "Peer learning and alumni mentorship." },
    { title: "Career Growth", desc: "Industry connections and job placement." },
  ]
};

// ---- History / milestones timeline (About page) ----
const HISTORY = [
  { year: "2000", title: "ACSES founded", desc: "A small group of CSE students starts the association to bridge theory and practice." },
  { year: "2008", title: "First inter-college hackathon", desc: "ACSES hosts its first overnight build event, drawing teams from neighboring colleges." },
  { year: "2013", title: "Mentorship program launches", desc: "Alumni begin formally mentoring juniors through structured peer-guild sessions." },
  { year: "2017", title: "Industry partnerships begin", desc: "First tie-ups with regional tech companies for internships and guest lectures." },
  { year: "2020", title: "Fully remote pivot", desc: "Workshops and interviews move online without missing a semester." },
  { year: "2023", title: "5,000+ hackathon participants", desc: "Cumulative hackathon participation crosses five thousand students." },
  { year: "2026", title: "2130 members strong", desc: "ACSES becomes one of the largest student technical bodies at DKTE." },
];

// ---- Achievements / impact counters ----
const ACHIEVEMENTS = [
  { num: "120+", label: "Workshops run" },
  { num: "38", label: "Hackathons hosted" },
  { num: "610+", label: "Internships placed" },
  { num: "45", label: "Industry partners" },
];

// ---- Benefits section ----
const BENEFITS = [
  { tag: "Workshops", title: "Technical Sessions", desc: "Hands-on learning with experts across AI, Cloud, Security, and more." },
  { tag: "People", title: "Mentorship & Peers", desc: "Alumni mentors and peer guilds accelerate learning curves." },
  { tag: "Careers", title: "Career Pathways", desc: "Resume clinics, mock interviews, and internship pipelines." },
  { tag: "Compete", title: "Competitions", desc: "Hackathons and contests with recognition and rewards." },
  { tag: "Build", title: "Real Projects", desc: "Build a portfolio with end-to-end projects and demos." },
  { tag: "Proof", title: "Certificates", desc: "Validated proof of participation and achievement." },
];

// ---- Events / timeline ----
// category: used for filtering on the Events page
const EVENTS = [
  { tick: "[ NEW ]", desc: "Freshers' party", status: "upcoming", category: "Community", date: "Oct 2026" },
  { tick: "[ NEW ]", desc: "Technical workshop series — AI, Cloud & Security tracks", status: "upcoming", category: "Workshop", date: "Sep 2026" },
  { tick: "[ NEW ]", desc: "Campus hackathon — build, ship, present", status: "upcoming", category: "Hackathon", date: "Oct 2026" },
  { tick: "[ PORTAL ]", desc: "The Pirate’s Gambit - fun + challenge 🚀", status: "upcoming", category: "Portal Event", date: "TO BE ANNOUNCED" },
  { tick: "[ NEW ]", desc: "Guest lecture — Systems design at scale", status: "upcoming", category: "Talk", date: "Nov 2026" },
  { tick: "[ NEW ]", desc: "Tech Nova", status: "upcoming", category: "Community", date: "march 2027" },
  { tick: "[ LOG ]", desc: "Resume clinic & mock interview drive", status: "past", category: "Careers", date: "Apr 2026" },
  { tick: "[ LOG ]", desc: "Alumni mentorship meetup", status: "past", category: "Community", date: "Feb 2026" },
  { tick: "[ LOG ]", desc: "Winter hackathon — 36 hours, 40 teams", status: "past", category: "Hackathon", date: "Dec 2025" },
  { tick: "[ LOG ]", desc: "Cloud & DevOps bootcamp", status: "past", category: "Workshop", date: "Oct 2025" },
  { tick: "[ LOG ]", desc: "Freshers' induction & orientation", status: "past", category: "Community", date: "Aug 2025" },
];

// ---- Past event photo gallery ----
// Each item is one gallery "card". No real photo files are bundled —
// each renders as a generated gradient tile with an icon + caption so
// the page works instantly. Drop real photos in an /assets/gallery
// folder and set `img: "assets/gallery/yourfile.jpg"` to replace a tile.
const GALLERY = [
  
];

// ---- Testimonials ----
const TESTIMONIALS = [
  { quote: "ACSES is where I shipped my first real project — and where I found the mentors who pushed me to keep going.", name: "Krish Mahajan", role: "President" },
  { quote: "The hackathons taught me more in 36 hours than a semester of lectures. The community made it stick.", name: "Gomtesh Patil", role: "Vice President" },
  { quote: "Mock interviews with alumni mentors made the real internship interviews feel easy by comparison.", name: "Renuka Patil", role: "Secretary" },
  { quote: "I walked in knowing nothing about cloud infra. Two workshops later I was debugging production issues.", name: "Aryan Shetake", role: "Secretary" },
];

// ---- Frequently asked questions (Contact page) ----
const FAQS = [
  { q: "Who can join ACSES?", a: "Any DKTE student with an interest in computer science and engineering — no prior experience required. Most members join in their first year. You can <a href='https://tinyurl.com/acsesmembership' target='_blank' style='color:var(--circuit); text-decoration:underline;'>fill out the membership form here</a>." },
  { q: "Is there a membership fee?", a: "There is a very minimum fee for membership, but it gives you benefits in upcoming events like concessions on entry fees. You can <a href='https://tinyurl.com/acsesmembership' target='_blank' style='color:var(--circuit); text-decoration:underline;'>check here the latest fee</a>." },
  { q: "How do I register for an event?", a: "Open the Events page, pick an upcoming event, and follow the registration link posted there. Announcements also go out over our socials." },
  { q: "Can alumni stay involved?", a: "Yes — many alumni return as mentors, guest speakers, or hackathon judges. Reach out through the contact form to get involved." },
  { q: "How do I propose a workshop or speaker?", a: "Email us at acses.dkte@gmail.com with a short outline. The technical team reviews proposals every month." },
];

// ---- Team departments (used to filter the Members page) ----
const DEPARTMENTS = ["All", "Leadership", "Technical", "Design", "Events"];

// ---- Members — EDIT THIS to update the roster ----
// github: just the username (e.g. 'torvalds'), the link is built automatically
// dept must match one entry in DEPARTMENTS (minus "All")
const MEMBERS = [];

// ---- Partners / sponsors ----
const PARTNERS = [
  "TechNova Systems", "CloudForge Labs", "ByteWorks", "NimbusStack", "Codeversity", "PixelForge"
];

// ---- News / announcements ticker (Home page) ----
const NEWS = [
  "Registrations open for the AI, Cloud & Security workshop series",
  "Campus Hackathon 2026 — team registration closes Oct 5",
  "New mentorship cohort starts next month — apply on the Join page",
  "Guest lecture: Systems design at scale — Nov 2026",
];

// ---- Contact info ----
const CONTACT = {
  address: "Department of Computer Science & Engineering, D.K.T.E. Society's Textile & Engineering Institute, Ichalkaranji 416115",
  email: "acses.dkte@gmail.com",
  phone: "+91 9055721797 / 9325324272",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/acses_dkte/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/acses-association-of-computer-science-and-engineering-students/" },
    { label: "GitHub", url: "https://github.com/acses-dkte" },
  ]
};

// ---- Join link ----
const JOIN_URL = "https://tinyurl.com/acsesmembership";



const PORTAL_TEAM = [
  { name: "Krish Mahajan", photo: "assets/members/krish-mahajan.jpg", role: "President", department: "Leadership", icon: "crown" },
  { name: "Gomtesh Patil", photo: "assets/members/gomtesh-patil.jpg", role: "Vice-President", department: "Leadership", icon: "user" },
  { name: "Aryan Shetake", photo: "assets/members/aryan-shetake.jpg", role: "Secretary", department: "Administration", icon: "file" },
  { name: "Renuka Patil", photo: "assets/members/renuka-patil.jpg", role: "Secretary", department: "Administration", icon: "file" },
  { name: "Radhika Patil", photo: "assets/members/radhika-patil.jpg", role: "Secretary", department: "Administration", icon: "file" },
  { name: "Parth Savale", photo: "assets/members/parth-savale.jpg", role: "Treasurer", department: "Finance", icon: "coins" },
  { name: "Shraddha Patil", photo: "assets/members/shraddha-patil.jpg", role: "Treasurer", department: "Finance", icon: "coins" },
  { name: "Atharv Ranmale", photo: "assets/members/atharv-ranmale.jpg", role: "Technical Head", department: "Technical", icon: "code" },
  { name: "Piyush Patil", photo: "assets/members/piyush-patil.jpg", role: "Technical Head", department: "Technical", icon: "code" },
  { name: "Payal Channabasannavar", photo: "assets/members/payal-channabasannavar.jpg", role: "Technical Head", department: "Technical", icon: "code" },
  { name: "Shreya Jadhav", photo: "assets/members/shreya-jadhav.jpg", role: "Technical Head", department: "Technical", icon: "code" },
  { name: "Niranjan Rendale", photo: "assets/members/niranjan-rendale.jpg", role: "Event Head", department: "Events", icon: "calendar" },
  { name: "Sayali Bhosale", photo: "assets/members/sayali-bhosale.jpg", role: "Event Head", department: "Events", icon: "calendar" },
  { name: "Rajani Desai", photo: "assets/members/rajani-desai.jpg", role: "Event Head", department: "Events", icon: "calendar" },
  { name: "Pravin Aswale", photo: "assets/members/pravin-aswale.jpg", role: "Event Head", department: "Events", icon: "calendar" },
  { name: "Anshika Sharma", photo: "assets/members/anshika-sharma.jpg", role: "Social Media & Marketing", department: "Marketing", icon: "bullhorn" },
  { name: "Teerthraj Patil", photo: "assets/members/teerthraj-patil.PNG", role: "Social Media & Marketing", department: "Marketing", icon: "bullhorn" },
  { name: "Aryan Patil", photo: "assets/members/aryan-patil.jpg", role: "Social Media & Marketing", department: "Marketing", icon: "bullhorn" },
  { name: "Snehal Visapure", photo: "assets/members/snehal-visapure.jpg", role: "Data Manager", department: "Data Management", icon: "database" },
  { name: "Bhargavi Pujari", photo: "assets/members/bhargavi-rukkepujari.jpg", role: "Data Manager", department: "Data Management", icon: "database" },
  { name: "Bhargavi Subhash Ambi", photo: "assets/members/bhargavi-ambi.jpg", role: "Data Manager", department: "Data Management", icon: "database" },
  { name: "Mrunal Shevade", photo: "assets/members/mrunal-shevade.jpg", role: "Data Manager", department: "Data Management", icon: "database" }
];

const PORTAL_BENEFITS = [
  { tag: "Technical", title: "Technical Workshops", desc: "Hands-on learning with experts across AI, Cloud, Security, and more." },
  { tag: "People", title: "Mentorship & Peers", desc: "Alumni mentors and peer guilds accelerate learning curves." },
  { tag: "Careers", title: "Career Pathways", desc: "Resume clinics, mock interviews, and internship pipelines." },
  { tag: "Compete", title: "Competitions", desc: "Hackathons and contests with recognition and rewards." },
  { tag: "Build", title: "Real Projects", desc: "Build a portfolio with end-to-end projects and demos." },
  { tag: "Proof", title: "Certificates", desc: "Validated proof of participation and achievement." }
];

 const PORTAL_UPCOMING_EVENTS = [
//   {
    // title: "The Pirate’s Gambit",
    // description: "fun + challenge 🚀",
    // date: "TO BE ANNOUNCED",
    // image: "https://i.postimg.cc/VvNF6kCg/event.png",
    // isHighlighted: true,
    // link: "pirate/index.html"
//   }
 ];

const PORTAL_PAST_EVENTS = [
       {
    id: "teachers-day-2026",
    title: "Teacher's Day-2026",
    description: "Teacher's Day Celebration",
    date: "05 September 2026",
    coverImage: "assets/events/teachers-day/cover-group-photo.jpg",
    gallery: [
      "assets/events/teachers_day_2026./lamp_lighting.jpeg",
       "assets/events/teachers_day_2026./teachers.HEIC",
       "assets/events/teachers_day_2026./president.png",
       "assets/events/teachers_day_2026./falicitation.jpeg",
       "assets/events/teachers_day_2026./selfi_point.jpeg"       
    ],
   fullDescription: "🎉 Teacher's Day Celebration – ACSES celebrated Teacher's Day with enthusiasm and gratitude, bringing together the faculty and students of the Department of CSE. The celebration commenced with a traditional lamp-lighting ceremony, followed by fun-filled interactive activities that created a lively and cheerful atmosphere. Students took the opportunity to express their appreciation through heartfelt wishes and memorable moments with their teachers. The event served as a beautiful tribute to the mentors whose knowledge, guidance, and encouragement continue to inspire students to learn, grow, and achieve more." ,
      highlights: [
      "Teacher's Day Celebration by ACSES",
      "Traditional Lamp-Lighting Ceremony",
       "Student performance",
      "Interactive Games & Activities with Faculty",
      "'ACSES Well Wishes' Board with Student Notes",
      "Organized by the ACSES Team",
      "Event Date: 5th September 2026"
    ]
  },
{
    id: "ACSES club inauguration",
    title: "Inauguration",
    description: "New team falicitation",
    date: "03 September 2026",
    coverImage: "assets/events/teachers-day/cover-group-photo.jpg",
    gallery: [
      "assets/events/Inauguration./lamp_lightning.mov",
       "assets/events/Inauguration./hod.mov",
       "assets/events/Inauguration./falicitation.HEIC",
       "assets/events/Inauguration./web_launch.HEIC",
       "assets/events/Inauguration./group.jpeg"       
    ],
  fullDescription: "🚀 ACSES Club Inauguration – The Association of Computer Science and Engineering Students (ACSES) officially inaugurated its new academic year with an inspiring celebration attended by students, faculty members, and distinguished guests. The event began with a traditional lamp-lighting ceremony, symbolizing the pursuit of knowledge and innovation. The inauguration highlighted ACSES's vision of creating a platform for students to explore technology, develop practical skills, collaborate on innovative ideas, and participate in technical activities. The event marked the beginning of another exciting year of learning, creativity, teamwork, and technological growth for the ACSES community.",
   highlights: [
  "ACSES Club Inauguration Ceremony",
  "Traditional Deep Prajwalan",
  "Saraswati Poojan",
  "Felicitation of Distinguished Dignitaries",
  "Official Launch of the ACSES Website",
  "Inspiring Address by Prof. (Dr.) D. V. Kodavade Sir",
  "Felicitation of the Previous ACSES Team",
  "Badge Distribution to the New ACSES Team",
  "Vote of Thanks",
  "Organized by the ACSES Team",
  "Event Date: 3rd September 2026"
]
  },  
  {
    id: "tech-nova-2024",
    title: "Tech-Nova",
    description: "A National level event",
    date: "Aug 20, 2024",
    coverImage: "https://i.postimg.cc/7Y7LhT9v/Tech-Nova.jpg",
    gallery: [
      "https://i.postimg.cc/BbfGHhxQ/Whats-App-Image-2025-08-11-at-11-08-35-PM.jpg",
      "https://i.postimg.cc/QMvPFVSP/t1.jpg",
      "https://i.postimg.cc/vBMr2smT/t2.jpg"
    ],
    fullDescription: "Tech Nova is a thrilling national-level technical competition designed to challenge intellect, speed, and innovation. Participants will battle through multiple rounds, testing their problem-solving skills, technical knowledge, and creativity. Gear up for a journey where aptitude meets technology and brilliance leads to victory!",
    highlights: [
      "National-Level Technical Event",
      "Aptitude Quest – Round 1",
      "Tech Challenge – Round 2",
      "Exciting Cash Prizes & Certificates",
      "Platform to Showcase Skills & Innovation",
      "Opportunity to Compete with the Best Minds"
    ]
  },
  {
    id: "teachers-day-2025",
    title: "Teacher's Day",
    description: "Teacher's Day Celebration",
    date: "5 September 2025",
    coverImage: "assets/events/teachers-day/cover-group-photo.jpg",
    gallery: [
      "assets/events/teachers-day/01-podium-speech.jpg",
      "assets/events/teachers-day/02-lamp-lighting.jpg",
      "assets/events/teachers-day/03-audience-hall.jpg",
      "assets/events/teachers-day/04-audience-hall-2.jpg",
      "assets/events/teachers-day/05-teacher-interaction.jpg",
      "assets/events/teachers-day/06-teachers-walking-in.jpg",
      "assets/events/teachers-day/07-event-moment.jpg",
      "assets/events/teachers-day/08-well-wishes-board.jpg"
    ],
    fullDescription: "🎉 Teacher's Day Celebration – ACSES marked Teacher's Day with a warm, interactive gathering to honor the faculty of the Department of CSE. The celebration opened with a traditional lamp-lighting ceremony before an audience of students and teachers, followed by an engaging round of interactive games and activities that brought plenty of laughter to the hall. Students also put up an 'ACSES Well Wishes' board, filling it with handwritten notes of gratitude for their teachers. The event was a heartfelt way for the ACSES team to thank their mentors for their guidance and support throughout the year.",
    highlights: [
      "Teacher's Day Celebration by ACSES",
      "Traditional Lamp-Lighting Ceremony",
      "Interactive Games & Activities with Faculty",
      "'ACSES Well Wishes' Board with Student Notes",
      "Organized by the ACSES Team",
      "Event Date: 5th September 2025"
    ]
  },
  {
    id: "techsymposium-2024",
    title: "TechSymposium 2K24",
    description: "National Level Coding Competition",
    date: "16 March 2024",
    coverImage: "https://i.postimg.cc/7PBPZQVj/Picture4.jpg",
    gallery: [
      "https://i.postimg.cc/L6Bcsq25/Picture5.jpg",
      "https://i.postimg.cc/52pWsXRT/Picture2.jpg",
      "https://i.postimg.cc/52ysMjtZ/Picture3.jpg",
      "https://i.postimg.cc/7PBPZQVj/Picture4.jpg"
    ],
    fullDescription: "💡 TechSymposium 2K24 – The ByteSaga 🖥️ A National Level Coding Competition organized by the ACSES Committee at DKTE! The event witnessed enthusiastic participation from 363 students across institutes, divided into Novice (1st & 2nd year) and Expert (3rd & 4th year) groups. The competition consisted of three challenging rounds: Aptitude, Debugging, and Coding. Following registration and inauguration, participants battled through each stage, showcasing logic, precision, and problem-solving. Winners from both groups were awarded, while all participants received refreshments, dockets, and certificates. The event was powered by the dedicated efforts of faculty and student volunteers, making TechSymposium 2K24 a grand success!",
    highlights: [
      "TechSymposium 2K24 – National Level Technical Event",
      "The ByteSaga – Coding Competition",
      "Three Rounds: Aptitude, Debugging & Coding",
      "Participants: 363 Students",
      "Novice Group (1st & 2nd Year) & Expert Group (3rd & 4th Year)",
      "Organized by ACSES Committee, DKTE",
      "Winners (Novice): Vishal Desai & Shreeyash Dongarkar (WCE) – 1st Place",
      "Winners (Expert): Utkarsh Mandape & Saurabh Salunke (WCE) – 1st Place",
      "Refreshments, Dockets & Certificates for All Participants",
      "Event Date: 16th March 2024"
    ]
  },
  {
    id: "poster-presentation-2024",
    title: "Poster Presentation",
    description: "Enhancing skills through presentation",
    date: "28th February 2024",
    coverImage: "https://i.postimg.cc/DZZzk5v5/poster1.jpg",
    gallery: [
      "https://i.postimg.cc/gJQLg1V3/poster2.jpg",
      "https://i.postimg.cc/sgmBkMPj/poster3.jpg",
      "https://i.postimg.cc/j5pCHPTX/poster4.jpg",
      "https://i.postimg.cc/ZnPY6QVb/poster5.jpg"
    ],
    fullDescription: "🌟 Innovation Unleashed: Innovative Poster Presentation! 🚀 An electrifying event filled with creativity, passion, and groundbreaking ideas. Shortlisted teams dazzled the stage with their ingenious posters, leaving judges awestruck. Congrats to Team EliteGeek for clinching the top spot, and kudos to Team Unbeatable for their remarkable performance as runners-up. Special thanks to Prof. Dr. D. V. Kodavade, event coordinator Prof. K. S. Kadam, IIC Convenor Prof. (Dr.) T. I. Bagban for inaugurating the event, alongside the Dean of the department Prof. (Dr.) S. K. Shirgave and faculty members who joined in to congratulate the winning teams.",
    highlights: [
      "Innovation Unleashed: Innovative Poster Presentation",
      "Electrifying Event Showcasing Creativity & Groundbreaking Ideas",
      "Team EliteGeek – Winners",
      "Team Unbeatable – Runners-Up",
      "Special Thanks to Faculty & Coordinators",
      "Certificates & Cash Prizes Awarded",
      "Poster Exhibition Attended by All Students"
    ]
  },
  {
    id: "hackathon-2024",
    title: "Tech Symposium 2K23",
    description: "National Level Event",
    date: "Mar 2023",
    coverImage: "https://i.postimg.cc/Df42rS8W/techsymposium1.jpg",
    gallery: [
      "https://i.postimg.cc/BbmcZmH6/techsymposium2.jpg",
      "https://i.postimg.cc/28BVSH4K/techsymposium3.jpg"
    ],
    fullDescription: "💡 Tech Symposium 2K23 – A National Level Technical Event 🚀 An electrifying blend of innovation, coding brilliance, and creative web design, organized by ACSES & AISA at DKTE! The event featured two flagship competitions: Paradox – A multi-round coding battle including Aptitude, Debugger, and Codestorm (Problem Solving). WebX – A website designing challenge where participants showcased their UI/UX creativity and development skills. Students from novice to expert levels competed, displaying logic, precision, and innovation. With enthusiastic participation, cash prizes, and certificates, Tech Symposium 2K23 celebrated technical excellence and talent!",
    highlights: [
      "Tech Symposium 2K23 – A National Level Technical Event",
      "Paradox – Coding Competition",
      "WebX – Website Designing Competition",
      "Multiple Rounds: Aptitude, Debugger, Codestorm & Design",
      "Participation Categories: Novice & Expert Groups",
      "Cash Prizes & Recognition for Winners",
      "Event Date: 24th February",
      "Organized by ACSES & AISA, DKTE"
    ]
  }
];

const PORTAL_HOME = {
  eyebrow: "Building the next generation of tech leaders",
  description: "Workshops, hackathons, mentorship, and real projects—crafted to turn curiosity into capability.",
  aboutText: "The Association of Computer Science and Engineering Students (ACSES) commonly began forming in early 2000st was started with the goal of improving students technical knowledge and bridging the gap between academics and the practical world of computer science and engineering. Since itsinception, these associations have been active in motivating students to participate in technical, co-curricular, and extracurricular activities, shaping well-rounded engineering graduates.",
  stats: [
    { value: "2000", label: "Founded" },
    { value: "2130", label: "Members" },
    { value: "20", label: "Core Members" },
    { value: "5-6", label: "Events/Year" }
  ]
};


const ALL_MEMBERS = [...MEMBERS, ...PORTAL_TEAM.map(m => ({
  name: m.name,
  position: m.role,
  github: "#",
  photo: m.photo,
  dept: m.department,
  bio: `${m.role} — ${m.department} team.`
}))];

const ALL_DEPARTMENTS = ["All", ...Array.from(new Set([...DEPARTMENTS.slice(1), ...PORTAL_TEAM.map(m => m.department)]))];

const ALL_EVENTS = [
  ...EVENTS,
  ...PORTAL_UPCOMING_EVENTS.map(e => ({ tick: "[ PORTAL ]", desc: e.title + " — " + e.description, status: "upcoming", category: "Portal Event", date: e.date })),
  ...PORTAL_PAST_EVENTS.map(e => ({ tick: "[ ARCHIVE ]", desc: e.title + " — " + e.description, status: "past", category: "Portal Archive", date: e.date }))
];

const ALL_GALLERY = [
  ...GALLERY,
  ...PORTAL_PAST_EVENTS.flatMap(e => e.gallery.map((img, i) => ({
    title: `${e.title} — Photo ${i + 1}`,
    event: e.title,
    category: "Portal Archive",
    year: (e.date.match(/(20\d{2})/) || ["", "2024"])[1],
    tone: i % 3 === 0 ? "blue" : i % 3 === 1 ? "circuit" : "amber",
    img
  })))
];

// ============================================================
// WEB PORTAL DATA — additive content only
// Source: web-portal-main
// Existing ACSES content above is intentionally preserved.
// ============================================================
