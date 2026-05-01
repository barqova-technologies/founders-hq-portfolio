export const SITE = {
  name: "Founder's HQ",
  short: "FHQ",
  tagline: "Where founders find their people.",
  manifesto:
    "Founder's HQ is a working community of operators, builders and outliers — a place where conviction gets stress-tested, capital gets close, and the next ten years of Indian startups get written in private rooms before they show up on Twitter.",
  email: "hello@foundershq.in",
  phone: "+91 98765 43210",
  address: "Founder's HQ, HITEC City, Hyderabad — and 6 chapter cities across India",
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    x: "https://x.com",
    youtube: "https://youtube.com",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Join Us", href: "/join" },
];

export const ROTATING_WORDS = [
  "ship",
  "raise",
  "scale",
  "hire",
  "find their people",
];

export const MARQUEE_WORDS = [
  "FOUNDERS",
  "COMMUNITY",
  "COHORT",
  "CAPITAL",
  "CONVICTION",
  "COFFEE",
  "CONVERSATION",
  "CRAFT",
  "COMMITMENT",
];

export const STATS = [
  { value: 1200, suffix: "+", label: "Active Founders" },
  { value: 84, suffix: "", label: "Portfolio Companies" },
  { value: 6, suffix: "", label: "Chapter Cities" },
  { value: 420, suffix: "Cr+", label: "₹ Raised by Alumni" },
];

export type Pillar = {
  slug: string;
  title: string;
  short: string;
  long: string;
  features: string[];
  icon:
    | "Rocket"
    | "Users"
    | "HeartHandshake"
    | "Mic"
    | "Building2"
    | "MessageCircle";
};

export const PILLARS: Pillar[] = [
  {
    slug: "accelerator",
    title: "The Accelerator",
    short:
      "A 12-week cohort program for early-stage founders building in India.",
    long:
      "We run two cohorts a year — 8 to 12 companies per batch, pre-seed to early Series A. The program is curriculum-light and conversation-heavy: weekly office hours, founder dinners, paired mentor sprints, and a closing demo day with 60+ investors in the room.",
    features: [
      "12 weeks, in-person + remote",
      "Pre-seed to early Series A",
      "Up to ₹50L in cohort capital",
    ],
    icon: "Rocket",
  },
  {
    slug: "meetups",
    title: "Founder Meetups",
    short: "Curated, small-room conversations across six cities every month.",
    long:
      "Most of what matters in a startup happens in private rooms with five other people who get it. We run 30+ meetups a month — peer cohorts, office hours, deep-dive sessions, founder dinners — by category, stage, and city.",
    features: [
      "Stage-matched peer groups",
      "Open community sessions",
      "Founder-only dinners",
    ],
    icon: "Users",
  },
  {
    slug: "mentors",
    title: "Mentor Network",
    short: "200+ operators, founders and investors on call for the community.",
    long:
      "Our mentor network is curated, not crowd-sourced — every mentor has either run a company through scale or led an investment cycle. Members get matched on real questions, not coffee chats.",
    features: [
      "200+ vetted operators & investors",
      "Question-based matching",
      "Quarterly review with each cohort",
    ],
    icon: "HeartHandshake",
  },
  {
    slug: "demo-days",
    title: "Demo Days",
    short:
      "Twice a year, the room every founder wants to pitch in front of.",
    long:
      "Our demo days aren't beauty contests — every cohort founder gets a 6-minute slot, a pre-vetted investor list, and a moderated Q&A. Past demo days have closed term sheets in the same week.",
    features: [
      "60+ investors in the room",
      "Pre-vetted investor matching",
      "Moderated Q&A and follow-ups",
    ],
    icon: "Mic",
  },
  {
    slug: "studios",
    title: "Studios & Coworking",
    short: "Free desks for cohort founders. Member plans for the community.",
    long:
      "Two open floors in HITEC City — content studio, recording booth, meeting rooms, fast wifi. Cohort founders get desks free for the full 12 weeks; community members get monthly plans starting at ₹5,999.",
    features: [
      "Two HITEC City floors",
      "Content + recording studios",
      "Free for cohort, plans for community",
    ],
    icon: "Building2",
  },
  {
    slug: "forums",
    title: "Founder Forums",
    short: "Private channels, peer cohorts, and the things you don't post.",
    long:
      "The unsexy half of community: structured peer-cohort calls, private channels per stage, and a quiet forum where founders ask the questions they don't put on LinkedIn. Vetted, moderated, and small on purpose.",
    features: [
      "Stage-based private channels",
      "Monthly peer-cohort calls",
      "Strict no-pitch policy",
    ],
    icon: "MessageCircle",
  },
];

export type CohortCompany = {
  name: string;
  founder: string;
  category: "AI" | "ClimateTech" | "D2C" | "DevTools" | "B2B SaaS" | "Biotech";
  cohort: string;
  blurb: string;
  gradient: string;
};

export const COHORT_COMPANIES: CohortCompany[] = [
  {
    name: "Voltdrop",
    founder: "Saurabh Mehta",
    category: "ClimateTech",
    cohort: "Cohort 11",
    blurb: "Battery health analytics for grid-scale storage operators.",
    gradient: "linear-gradient(135deg,#0A0A0A 0%,#3F3F3F 100%)",
  },
  {
    name: "Threadly",
    founder: "Aanya Kapoor",
    category: "D2C",
    cohort: "Cohort 12",
    blurb: "Direct-to-consumer textile brand reinventing handlooms for Gen-Z.",
    gradient: "linear-gradient(135deg,#1A1A1A 0%,#5C5C5C 100%)",
  },
  {
    name: "Layer8",
    founder: "Rohan Iyer",
    category: "DevTools",
    cohort: "Cohort 10",
    blurb: "Network observability for engineering teams that ship daily.",
    gradient: "linear-gradient(135deg,#262626 0%,#737373 100%)",
  },
  {
    name: "Sundial",
    founder: "Maya Pillai",
    category: "B2B SaaS",
    cohort: "Cohort 12",
    blurb: "Revenue intelligence for SMB sales teams in emerging markets.",
    gradient: "linear-gradient(135deg,#0A0A0A 0%,#525252 100%)",
  },
  {
    name: "Kettle.ai",
    founder: "Karan Joshi",
    category: "AI",
    cohort: "Cohort 11",
    blurb: "Inference infrastructure for fine-tuned domain models.",
    gradient: "linear-gradient(135deg,#171717 0%,#404040 100%)",
  },
  {
    name: "ParaLabs",
    founder: "Priyanka Rao",
    category: "Biotech",
    cohort: "Cohort 09",
    blurb: "Affordable genomics tooling for outpatient diagnostics.",
    gradient: "linear-gradient(135deg,#0F0F0F 0%,#666666 100%)",
  },
];

export type Meetup = {
  title: string;
  city: string;
  date: string; // human-readable, post-2026-05-01
  format: "In-person" | "Hybrid" | "Online";
  audience: string;
};

export const MEETUPS: Meetup[] = [
  {
    title: "Founder Office Hours — Cohort 13 Open House",
    city: "Hyderabad",
    date: "May 18, 2026",
    format: "In-person",
    audience: "Pre-seed to seed founders",
  },
  {
    title: "Pricing for B2B SaaS in India",
    city: "Bengaluru",
    date: "May 24, 2026",
    format: "Hybrid",
    audience: "Founders & GTM leads",
  },
  {
    title: "AI Founders Mixer",
    city: "Mumbai",
    date: "May 30, 2026",
    format: "In-person",
    audience: "AI / ML founders",
  },
  {
    title: "Cohort 13 Demo Day",
    city: "Hyderabad",
    date: "June 12, 2026",
    format: "In-person",
    audience: "Invitation only",
  },
];

export const PARTNERS = ["PV", "AT", "BL", "AX", "TE", "ST", "ON", "IE"];

export const TESTIMONIALS = [
  {
    quote:
      "I came in with a deck and three customers. I left the cohort with a hiring plan, a working pricing model, and a term sheet on the table.",
    name: "Saurabh Mehta",
    role: "CEO",
    company: "Voltdrop",
  },
  {
    quote:
      "It's the first community I've been in where people answer questions instead of repackaging them. Everyone's actually building something.",
    name: "Aanya Kapoor",
    role: "Co-founder",
    company: "Threadly",
  },
  {
    quote:
      "Our entire seed round came from rooms FHQ put us in. The follow-on came from a peer-cohort intro six months later.",
    name: "Rohan Iyer",
    role: "CEO",
    company: "Layer8",
  },
];

export const TIMELINE = [
  {
    year: "2018",
    title: "The First Dinner",
    body: "Twelve founders meet over coffee in a Hyderabad cafe. The whole thing fits on one table.",
  },
  {
    year: "2019",
    title: "Cohort 01",
    body: "Eight startups join the first formal cohort. Two are still alive — both are now in the alumni network.",
  },
  {
    year: "2021",
    title: "Pivot To Chapters",
    body: "We open in Bengaluru, Mumbai and Delhi. 200+ founders in the network by year-end.",
  },
  {
    year: "2022",
    title: "Mentor Collective",
    body: "200+ operators, founders and investors join the mentor collective. Matching gets structured.",
  },
  {
    year: "2024",
    title: "Studios & Coworking",
    body: "Two HITEC City floors open. Cohort founders move in for free; community plans launch.",
  },
  {
    year: "2026",
    title: "1,200 Founders Strong",
    body: "84 portfolio companies. 12 cohorts. ₹420Cr+ raised by alumni. The community got loud, but the rooms stayed small.",
  },
];

export const TEAM = [
  { name: "Maya Krishnan", role: "Founder", gradient: "linear-gradient(135deg,#0A0A0A,#5C5C5C)" },
  { name: "Rohan Mathew", role: "Programs Lead", gradient: "linear-gradient(135deg,#1A1A1A,#737373)" },
  { name: "Aisha Rao", role: "Community Lead", gradient: "linear-gradient(135deg,#262626,#888888)" },
  { name: "Vivek Kapoor", role: "Investor Relations", gradient: "linear-gradient(135deg,#0F0F0F,#4A4A4A)" },
];

export const VALUES = [
  {
    title: "Founders First",
    body: "We optimize for the founder in the room, not the deck on the screen. Every program is designed against that.",
    span: "lg:col-span-2",
  },
  {
    title: "Quiet, Then Loud",
    body: "The work happens in private dinners and small rooms. The posts come later, if at all.",
    span: "",
  },
  {
    title: "Capital Is Downstream",
    body: "Strong companies attract capital. We obsess over the company; the capital follows.",
    span: "",
  },
  {
    title: "Build, Then Post",
    body: "We don't measure community by reach. We measure it by what gets built inside it.",
    span: "lg:col-span-2",
  },
];
