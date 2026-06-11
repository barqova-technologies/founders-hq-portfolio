export const SITE = {
  name: "Founder's HQ",
  short: "FHQ",
  // Canonical site URL - set NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://foundershq.org",
  tagline: "Build. Connect. Scale. Repeat.",
  manifesto:
    "Founder's HQ is an exclusive, curated, invite only founders community for the people building from anywhere - a space where conviction gets stress-tested, the right introductions happen early, and the next wave of innovative startups gets built before anyone's posting about it. We're starting with one cohort and one rule: keep the room curated, keep it honest.",
  // Contact - replace with real values before launch.
  email: "team@foundershq.org",
  // Leave empty to hide. Fill with a real number before launch.
  phone: "",
  city: "Lucknow",
  address: "Founder's HQ · Lucknow, Uttar Pradesh, India",
  // Leave a handle empty to hide its icon. Fill with real profile URLs.
  socials: {
    linkedin: "https://www.linkedin.com/company/foundershq1",
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
    | "Users"
    | "Landmark"
    | "Building2"
    | "Briefcase"
    | "Megaphone"
    | "TrendingUp"
    | "FlaskConical"
    | "HeartHandshake"
    | "Library"
    | "CalendarDays"
    | "Hammer"
    | "Gauge"
    | "GraduationCap"
    | "Factory"
    | "Presentation"
    | "Globe"
    | "Lightbulb";
  comingSoon?: boolean;
};

export const PILLARS: Pillar[] = [
  {
    slug: "inner-circle",
    title: "Inner Circle",
    short:
      "A curated community of ambitious founders building, sharing and growing together.",
    long:
      "A strong community of founders who build, share and grow together - meeting every month across a range of meet-ups, conferences and events.",
    features: [
      "Monthly meet-ups & events",
      "Curated founder network",
      "Conferences & socials",
    ],
    icon: "Users",
  },
  {
    slug: "capital-bridge",
    title: "Capital Bridge",
    short: "Direct access to investors, funding and meaningful capital connections.",
    long:
      "Direct access to investors, funding opportunities and meaningful capital connections - so the right money finds the right founders.",
    features: [
      "Investor introductions",
      "Funding opportunities",
      "Warm capital connections",
    ],
    icon: "Landmark",
  },
  {
    slug: "build-space",
    title: "Build Space",
    short: "A high-energy coworking space built for focus and execution.",
    long:
      "A high-energy workspace designed for focus, collaboration and execution - desks, meeting rooms and room to ship.",
    features: ["Coworking desks", "Meeting rooms", "Collaboration zones"],
    icon: "Building2",
  },
  {
    slug: "talent-vault",
    title: "Talent Vault",
    short: "A vetted pool of skilled talent ready to scale your startup.",
    long:
      "A vetted pool of skilled talent ready to join and scale your startup - hiring made faster and safer.",
    features: ["Vetted candidates", "Hiring support", "Scale-ready talent"],
    icon: "Briefcase",
  },
  {
    slug: "spotlight",
    title: "Spotlight",
    short: "PR, social and speaking to get you seen, heard and recognised.",
    long:
      "Get seen, heard and recognised through PR, social media and speaking opportunities - including Reels, podcasts and media interviews.",
    features: ["PR & media interviews", "Reels & podcasts", "Speaking slots"],
    icon: "Megaphone",
  },
  {
    slug: "scale-engine",
    title: "Scale Engine",
    short: "Structured support and guidance to accelerate your growth.",
    long:
      "Structured support, resources and guidance to accelerate your startup's growth - so momentum compounds.",
    features: ["Growth playbooks", "Resources & guidance", "Hands-on support"],
    icon: "TrendingUp",
  },
  {
    slug: "launch-lab",
    title: "Launch Lab",
    short: "Test ideas, get real feedback and launch faster.",
    long:
      "Test ideas, get real feedback and launch faster with founder-driven insights - in rooms built for honest feedback.",
    features: ["Feedback rooms", "Launch support", "Founder insights"],
    icon: "FlaskConical",
  },
  {
    slug: "synergy-hub",
    title: "Synergy Hub",
    short: "Collaborate with founders to unlock partnerships and opportunities.",
    long:
      "Collaborate with like-minded founders to unlock partnerships and new opportunities - the upside of building in a room.",
    features: ["Founder collaborations", "Partnership intros", "New opportunities"],
    icon: "HeartHandshake",
  },
  {
    slug: "founder-stack",
    title: "Founder Stack",
    short: "Essential tools, templates and resources to build efficiently.",
    long:
      "Access essential tools, templates and resources to build and scale efficiently - the founder's resource library.",
    features: ["Tools & templates", "Resource library", "Build faster"],
    icon: "Library",
  },
  {
    slug: "hq-live",
    title: "HQ Live",
    short: "Curated workshops, founder talks and events with real takeaways.",
    long:
      "Curated workshops, founder talks and events designed to deliver actionable insights and real value.",
    features: ["Workshops", "Founder talks", "Live events"],
    icon: "CalendarDays",
  },
  {
    slug: "venture-forge",
    title: "Venture Forge",
    short: "Hands-on incubation that turns early ideas into investable businesses.",
    long:
      "Turn early-stage ideas into investable, scalable businesses through hands-on incubation and expert support.",
    features: ["Hands-on incubation", "Expert support", "Idea to investable"],
    icon: "Hammer",
    comingSoon: true,
  },
  {
    slug: "startup-sprint",
    title: "Startup Sprint",
    short: "An intensive, milestone-driven accelerator for rapid traction.",
    long:
      "An intensive, milestone-driven program designed to help startups achieve rapid growth and market traction.",
    features: ["Milestone-driven", "Rapid growth", "Market traction"],
    icon: "Gauge",
    comingSoon: true,
  },
  {
    slug: "founder-fellows",
    title: "Founder Fellows",
    short: "A selective fellowship for high-potential founders.",
    long:
      "A selective program for high-potential founders focused on leadership, innovation and long-term impact.",
    features: ["Selective cohort", "Leadership focus", "Long-term impact"],
    icon: "GraduationCap",
    comingSoon: true,
  },
  {
    slug: "venture-studio",
    title: "Venture Studio",
    short: "Co-build startups alongside experienced operators and partners.",
    long:
      "Co-build startups alongside experienced operators, advisors and execution partners.",
    features: ["Co-build model", "Operators & advisors", "Execution partners"],
    icon: "Factory",
    comingSoon: true,
  },
  {
    slug: "demo-day",
    title: "Demo Day",
    short: "Showcase your startup to investors, partners and ecosystem leaders.",
    long:
      "Present your startup to investors, partners and ecosystem leaders in a high-visibility environment.",
    features: ["Investor showcase", "High visibility", "Ecosystem leaders"],
    icon: "Presentation",
    comingSoon: true,
  },
  {
    slug: "global-gateway",
    title: "Global Gateway",
    short: "Resources and connections to enter and grow in new markets.",
    long:
      "Resources, connections and support to help startups enter and grow in new markets.",
    features: ["Market entry", "Global connections", "Expansion support"],
    icon: "Globe",
    comingSoon: true,
  },
  {
    slug: "innovation-garage",
    title: "Innovation Garage",
    short: "Experiment, validate and refine ideas before you commit.",
    long:
      "Experiment, validate and refine startup ideas before committing significant time and capital.",
    features: ["Idea validation", "Experimentation", "Refine before commit"],
    icon: "Lightbulb",
    comingSoon: true,
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
    title: "Founder Roundtables",
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
    body: "We grow the community with its members - more rooms, more cities - and keep every cohort curated on purpose.",
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
    body: "The work happens in private rooms and small circles. The posts come later, if at all.",
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
