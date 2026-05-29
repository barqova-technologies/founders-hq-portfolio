export const SITE = {
  name: "Founder's HQ",
  short: "FHQ",
  // Canonical site URL - set NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://foundershq.in",
  tagline: "Where founders find their people.",
  manifesto:
    "Founder's HQ is a new working community for the people building from Lucknow and across Uttar Pradesh - a small room where conviction gets stress-tested, the right introductions happen early, and the next wave of UP startups gets built before anyone's posting about it. We're starting with one cohort and one rule: keep the room small, keep it honest.",
  // Contact - replace with real values before launch.
  email: "hello@foundershq.in",
  // Leave empty to hide. Fill with a real number before launch.
  phone: "",
  city: "Lucknow",
  address: "Founder's HQ · Lucknow, Uttar Pradesh, India",
  // Leave a handle empty to hide its icon. Fill with real profile URLs.
  socials: {
    linkedin: "",
    instagram: "",
    x: "",
    youtube: "",
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

// Honest founding facts - no track record claimed.
export const FOUNDING_FACTS = [
  { value: "Cohort 01", label: "Now forming" },
  { value: "Lucknow", label: "Where we're based" },
  { value: "2026", label: "Launching" },
  { value: "Founder-funded", label: "Independent" },
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
      "A focused cohort program for early-stage founders building from Lucknow and across UP.",
    long:
      "Cohort 01 is forming now - a small founding batch, pre-seed to early stage. The program is curriculum-light and conversation-heavy: working sessions, founder dinners, paired mentor time, and a closing showcase. We're keeping the first cohort deliberately small.",
    features: [
      "12-week program",
      "Pre-seed to early stage",
      "Founding cohort - limited seats",
    ],
    icon: "Rocket",
  },
  {
    slug: "meetups",
    title: "Founder Meetups",
    short: "Small-room conversations for founders, starting in Lucknow.",
    long:
      "Most of what matters in a startup happens in a room with a few other people who get it. We're starting a regular rhythm of founder meetups in Lucknow - peer sessions, office hours and founder dinners - and growing it with the community, not ahead of it.",
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
    short:
      "A hand-picked bench of operators, founders and investors - curated, not crowd-sourced.",
    long:
      "Our mentors are chosen, not collected - each one has either built a company through scale or led an investment cycle. Members get matched on real questions, not coffee chats. We're building this bench deliberately as the community grows.",
    features: [
      "Vetted operators & investors",
      "Question-based matching",
      "Hands-on with each cohort",
    ],
    icon: "HeartHandshake",
  },
  {
    slug: "demo-days",
    title: "Demo Days",
    short:
      "The room we're building for founders to pitch the people who matter.",
    long:
      "Demo days won't be beauty contests. Every cohort founder gets a short slot, a curated investor list, and a moderated Q&A. We're assembling the room now - starting with the investors and operators closest to the UP ecosystem.",
    features: [
      "Curated investor room",
      "Pre-vetted matching",
      "Moderated Q&A and follow-ups",
    ],
    icon: "Mic",
  },
  {
    slug: "studios",
    title: "Studios & Coworking",
    short: "A working space for the cohort. Community plans as we grow.",
    long:
      "A place to actually work - desks, meeting rooms, and a spot to record and ship. Cohort 01 founders get space for the program; community plans will open as the room grows. Based in Lucknow.",
    features: [
      "Cohort workspace in Lucknow",
      "Meeting & recording space",
      "Community plans coming",
    ],
    icon: "Building2",
  },
  {
    slug: "forums",
    title: "Founder Forums",
    short: "Private channels, peer cohorts, and the things you don't post.",
    long:
      "The unglamorous half of community: peer-group calls, private channels by stage, and a quiet forum for the questions founders don't put on LinkedIn. Vetted, moderated, and small on purpose.",
    features: [
      "Stage-based private channels",
      "Peer-group calls",
      "Strict no-pitch policy",
    ],
    icon: "MessageCircle",
  },
];

// The kinds of founders Cohort 01 is built for - not a portfolio (we don't have one yet).
export type CohortTrack = {
  category: "AI" | "ClimateTech" | "D2C" | "DevTools" | "B2B SaaS" | "Health";
  title: string;
  blurb: string;
  gradient: string;
};

export const COHORT_TRACKS: CohortTrack[] = [
  {
    category: "AI",
    title: "AI & Applied ML",
    blurb: "Founders putting models to work on real, unglamorous problems.",
    gradient: "linear-gradient(135deg,#171717 0%,#404040 100%)",
  },
  {
    category: "ClimateTech",
    title: "Climate & Energy",
    blurb: "Hardware, software and services for a cleaner grid.",
    gradient: "linear-gradient(135deg,#0A0A0A 0%,#3F3F3F 100%)",
  },
  {
    category: "D2C",
    title: "Consumer & D2C",
    blurb: "Brands and products built for the next 500M consumers.",
    gradient: "linear-gradient(135deg,#1A1A1A 0%,#5C5C5C 100%)",
  },
  {
    category: "DevTools",
    title: "Developer Tools",
    blurb: "Infrastructure and tooling for teams that ship daily.",
    gradient: "linear-gradient(135deg,#262626 0%,#737373 100%)",
  },
  {
    category: "B2B SaaS",
    title: "B2B SaaS",
    blurb: "Software that earns its seat in the workflow.",
    gradient: "linear-gradient(135deg,#0A0A0A 0%,#525252 100%)",
  },
  {
    category: "Health",
    title: "Health & Bio",
    blurb: "Affordable, accessible tools for diagnostics and care.",
    gradient: "linear-gradient(135deg,#0F0F0F 0%,#666666 100%)",
  },
];

// Formats we're starting with - not dated events (we haven't run them yet).
export type MeetupFormat = {
  title: string;
  audience: string;
  cadence: string;
};

export const MEETUP_FORMATS: MeetupFormat[] = [
  {
    title: "Founder Office Hours",
    audience: "Pre-seed to seed founders",
    cadence: "Open house · Lucknow",
  },
  {
    title: "Peer Cohort Sessions",
    audience: "Stage-matched groups",
    cadence: "Small & recurring",
  },
  {
    title: "Founder Dinners",
    audience: "Founders only",
    cadence: "Invite-based",
  },
  {
    title: "Demo / Showcase Day",
    audience: "Cohort 01 + investors",
    cadence: "With Cohort 01",
  },
];

// Forward-looking roadmap - clearly the plan, not claimed history.
export const ROADMAP = [
  {
    year: "Now",
    title: "We assemble the bench",
    body: "Founder's HQ takes shape in Lucknow. We're hand-picking mentors, partners and early backers - and opening the Cohort 01 waitlist.",
  },
  {
    year: "2026",
    title: "We open the doors",
    body: "Cohort 01 applications open, the founding batch is selected, and the first founder meetups begin.",
  },
  {
    year: "2026 · H2",
    title: "First showcase",
    body: "Cohort 01 runs its program and closes with our first demo day in front of a curated investor room.",
  },
  {
    year: "2027",
    title: "The bench grows",
    body: "Cohort 02 opens, the mentor network deepens, and community plans for the Lucknow workspace go live.",
  },
  {
    year: "Beyond",
    title: "Built in the open",
    body: "We grow the community with its members - more rooms, more cities across UP - and keep every cohort small on purpose.",
  },
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
