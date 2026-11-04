export const INITIAL_USER = {
  id: "usr_2026_cc",
  name: "Agasthya Shetty",
  email: "agasthya@campuscode.dev",
  role: "STUDENT",
  institution: "National Institute of Technology",
  avatar: "AS",
  stats: {
    registered: 3,
    registered_count: 3,
    ongoing: 1,
    ongoing_count: 1,
    completed: 4,
    completed_count: 4,
    certificates: 2,
    certificate_count: 2
  }
};

export const INITIAL_HACKATHONS = [
  {
    id: "hack_rebuild26",
    code: "CC-REBUILD-26",
    slug: "rebuild-26",
    title: "ReBuild '26 — The Dashboard Recreation Hackathon",
    name: "ReBuild '26 — The Dashboard Recreation Hackathon",
    short_description: "Recreate the CampusCode user flow faithfully — Dashboard, Login, Register, and Student dashboard.",
    description: "CampusCode presents ReBuild '26! Think you can rebuild our dashboard better? Study the CampusCode dashboard, recreate the 4 core pages faithfully, and show off your skills.",
    status: "ONGOING",
    mode: "ONLINE",
    event_mode: "ONLINE",
    start_date: "2026-11-06T10:00:00Z",
    registration_deadline: "2026-11-06T17:01:00Z",
    prize_pool: "₹18,000",
    tags: ["Frontend", "React", "Dashboard", "UI/UX"],
    registered: true,
    rounds: [
      { round: 1, title: "Round 1 — Dashboard Recreation", status: "Active", deadline: "06 Nov 2026, 10:00 PM IST" },
      { round: 2, title: "Round 2 — Final Presentation & Demo", status: "Locked", deadline: "08 Nov 2026, 10:00 PM IST" }
    ]
  },
  {
    id: "hack_algoquest",
    code: "CC-ALGO-26",
    slug: "algo-quest",
    title: "CampusCode AlgoQuest Hackathon",
    name: "CampusCode AlgoQuest Hackathon",
    short_description: "Solve hard algorithmic bottlenecks and distributed data problems.",
    description: "Compete against university coders across India to build optimal data-crunching microservices under high load.",
    status: "UPCOMING",
    mode: "ONLINE",
    event_mode: "ONLINE",
    start_date: "2026-11-14T09:00:00Z",
    registration_deadline: "2026-11-12T23:59:00Z",
    prize_pool: "₹25,000",
    tags: ["Algorithms", "Data Structures", "Speed"],
    registered: true
  },
  {
    id: "hack_cloudscale",
    code: "CC-DEVCON-26",
    slug: "cloudscale-arena",
    title: "CloudScale Fullstack Championship",
    name: "CloudScale Fullstack Championship",
    short_description: "Deploy scalable cloud architectures and real-time collaboration apps.",
    description: "48-hour build sprint designed to test your resilience in high concurrency and cloud setups.",
    status: "COMPLETED",
    mode: "HYBRID",
    event_mode: "HYBRID",
    start_date: "2026-10-20T10:00:00Z",
    registration_deadline: "2026-10-18T18:00:00Z",
    prize_pool: "₹30,000",
    tags: ["Fullstack", "DevOps", "APIs"],
    registered: true
  },
  {
    id: "hack_ai_innovate",
    code: "CC-AI-26",
    slug: "genai-builders",
    title: "GenAI Builders Showcase 2026",
    name: "GenAI Builders Showcase 2026",
    short_description: "Build autonomous agents, generative interfaces, and next-gen workflows.",
    description: "An open challenge for students passionate about LLMs, multimodal models, and agent architectures.",
    status: "OPEN",
    mode: "ONLINE",
    event_mode: "ONLINE",
    start_date: "2026-11-20T10:00:00Z",
    registration_deadline: "2026-11-19T23:59:00Z",
    prize_pool: "₹50,000",
    tags: ["AI", "LLMs", "Autonomous Agents"],
    registered: false
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "Round 1 Active: ReBuild '26",
    message: "ReBuild '26 Round 1 is live! Submit your hosted demo link and repository before Friday 10:00 PM.",
    body: "Ensure your recreation covers all 4 pages: Dashboard, Login, Register, and Student Panel.",
    created_at: "2026-11-04T18:30:00Z",
    is_read: false
  },
  {
    id: "notif-2",
    title: "Team Formation Open",
    message: "HackMate AI is ready to suggest teammates with complementary skill sets.",
    body: "Open HackMate AI from the sidebar to find peers.",
    created_at: "2026-11-03T14:10:00Z",
    is_read: false
  },
  {
    id: "notif-3",
    title: "Certificate Issued: CloudScale Hackathon",
    message: "Your Certificate of Completion for CloudScale Hackathon is ready for download.",
    body: "View your verified credentials under the Certificates tab.",
    created_at: "2026-10-24T12:00:00Z",
    is_read: true
  }
];

export const INITIAL_CERTIFICATES = [
  {
    id: "cert-1",
    title: "CloudScale Fullstack Championship",
    issueDate: "24 Oct 2026",
    credentialId: "CC-CERT-94021",
    grade: "Merit / Top 10%",
    status: "Verified"
  },
  {
    id: "cert-2",
    title: "CampusCode Web Development Sprint",
    issueDate: "15 Sep 2026",
    credentialId: "CC-CERT-81930",
    grade: "Certificate of Participation",
    status: "Verified"
  }
];
