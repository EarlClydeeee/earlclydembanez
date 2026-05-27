"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowUpRight, 
  Mail, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  Settings, 
  Zap,
  ArrowRight,
  CodeXml,
  Globe,
  UserRound
} from "lucide-react";

type DeployedProject = {
  id: string;
  name: string;
  year: string;
  intensity: "High" | "Medium" | "Core";
  category: string;
  role: string;
  tools: string[];
  impact: string;
  summary: string;
  highlights: string[];
};

const projects: DeployedProject[] = [
  {
    id: "01",
    name: "ACCESS Official Website: Directory & Asset Management",
    year: "2026",
    intensity: "Core",
    category: "Organizational Systems",
    role: "Led frontend architecture and key system workflows.",
    tools: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    impact: "Centralized governance directory and asset lifecycle workflows in one auditable platform.",
    summary: "Unified representative directory, dashboards, and RBAC-powered asset borrowing/returns for ACCESS-PUP.",
    highlights: [
      "Built dynamic org directory and responsive dashboards for student leadership visibility.",
      "Implemented role-based UI and borrowing workflow with approval/return status tracking.",
      "Integrated Supabase + PostgreSQL for auditable operations and centralized records.",
    ],
  },
  {
    id: "02",
    name: "OMS — Output Monitoring System",
    year: "2025",
    intensity: "Core",
    category: "Industrial / IoT",
    role: "Software Engineering Front-End Lead with backend contributions.",
    tools: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    impact: "Tracked 2M+ machine/applicator outputs and improved reporting efficiency by ~45%.",
    summary: "Real-time production monitoring for machine output, component lifespan, and predictive maintenance.",
    highlights: [
      "Built modular front-end dashboards for traceability across production lines.",
      "Contributed to predictive maintenance logic and lifespan monitoring workflows.",
      "Implemented hybrid relational + JSON schema for high-volume industrial reporting.",
    ],
  },
  {
    id: "03",
    name: "AWSCCPUP Website & Membership Management System",
    year: "2026",
    intensity: "High",
    category: "Platform Engineering",
    role: "Full-stack contributor across frontend and API-integrated user flows.",
    tools: ["Astro", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL"],
    impact: "Enabled centralized member management and discoverability for AWS Cloud Club PUP.",
    summary: "Production-ready membership platform with profile management, filtering, and backend reliability.",
    highlights: [
      "Implemented member directory, profile updates, and search/filter experiences.",
      "Integrated FastAPI REST endpoints with PostgreSQL-backed data operations.",
      "Delivered in an Astro Islands + React architecture with tested backend workflows.",
    ],
  },
  {
    id: "04",
    name: "AWS Skill Builder LMS",
    year: "2025",
    intensity: "High",
    category: "Learning Systems",
    role: "Contributed leaderboard and engagement-critical user interfaces.",
    tools: ["React", "TypeScript", "Express.js", "Supabase", "AWS"],
    impact: "Supported gamified learning workflows across 7 technical departments.",
    summary: "Centralized LMS with ranking mechanics, assignment visibility, and engagement loops.",
    highlights: [
      "Built landing and in-platform leaderboard features with dynamic ordering.",
      "Shipped supporting interfaces, including custom 404 and reusable UI components.",
      "Connected frontend modules to Express + Supabase data pipelines.",
    ],
  },
  {
    id: "05",
    name: "CPE Fair Tournament Management System",
    year: "2025",
    intensity: "High",
    category: "Operations Platform",
    role: "Full-stack developer for scoring, dashboard, and export workflows.",
    tools: ["Next.js", "Express.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    impact: "Automated tournament management with live visibility and admin control surfaces.",
    summary: "Competition platform with real-time leaderboard, bracket visualization, and authenticated admin tooling.",
    highlights: [
      "Built role-based scoring APIs with aggregation and Excel export.",
      "Shipped responsive bracket and leaderboard views with category filtering.",
      "Deployed as serverless stack for event-ready scale and reliability.",
    ],
  },
  {
    id: "06",
    name: "Drowzi — Cursor Manila Hack Sprint Champion",
    year: "2026",
    intensity: "High",
    category: "AI / Machine Learning",
    role: "Built the ML pipeline under hackathon constraints.",
    tools: ["Python", "Machine Learning", "Rapid Prototyping"],
    impact: "Won 1st Place; proved high-speed technical execution with AI pipeline ownership.",
    summary: "Competition-winning prototype focused on media processing and intelligent content handling.",
    highlights: [
      "Implemented ML workflow for media processing and inference-ready handling.",
      "Delivered end-to-end in a fast-paced hackathon environment.",
      "Validated execution quality through 1st place finish.",
    ],
  },
];

const supportingProjects: DeployedProject[] = [
  {
    id: "07",
    name: "TEDxPUP Official Website",
    year: "2025",
    intensity: "Medium",
    category: "Frontend Delivery",
    role: "Frontend contributor for key user-facing sections.",
    tools: ["React", "Typeform Integration"],
    impact: "Improved event discoverability and streamlined registration flow.",
    summary: "Official event site with structured content and ticketing integration.",
    highlights: ["Built tablet view, FAQ, and contributors sections.", "Integrated Typeform for registration and engagement.", "Maintained compliance with TEDx branding and licensing."],
  },
  {
    id: "08",
    name: "ActiveCAMPUS GO",
    year: "2025",
    intensity: "Medium",
    category: "Wellness Product",
    role: "Co-developed platform architecture and real-time interactions.",
    tools: ["Next.js", "Express", "Firebase", "Google Maps API"],
    impact: "Ranked 8 across all-PUP; proved gamified engagement model for student wellness.",
    summary: "Location-aware gamified fitness web app with campus challenge mechanics.",
    highlights: ["Built PWA architecture and location interaction loops.", "Integrated step-based engagement logic with map zones.", "Delivered multi-user wellness challenge workflows."],
  },
  {
    id: "09",
    name: "AWS Cloud Club ID Finder System Upgrade",
    year: "2025",
    intensity: "Medium",
    category: "UI Modernization",
    role: "Led frontend redesign and responsive implementation.",
    tools: ["React", "TypeScript"],
    impact: "Raised usability, visual consistency, and mobile accessibility.",
    summary: "Modernized legacy ID Finder experience to production-grade interface standards.",
    highlights: ["Rebuilt UI from RetroUI style to modern SBD-aligned system.", "Delivered responsive layout behavior across screen sizes.", "Improved interaction clarity and consistency."],
  },
  {
    id: "10",
    name: "Sparkfest Project: Evidentia",
    year: "2025",
    intensity: "Medium",
    category: "Civic Tech + AI",
    role: "Originated and led concept + implementation direction.",
    tools: ["HTML", "CSS", "Python", "Gemini AI"],
    impact: "Tested by 100+ users; demonstrated incident triage and civic analytics utility.",
    summary: "Civic reporting system with AI-prioritized incident routing and heatmap analytics.",
    highlights: ["Built urgency filtering pipeline with Gemini AI.", "Integrated GPT-wrapped assistant for barangay Q&A.", "Shipped live analytics and heatmap visualization."],
  },
  {
    id: "11",
    name: "Sorting Algorithm Visualizer Plan",
    year: "2024-2025",
    intensity: "Medium",
    category: "Academic Product Design",
    role: "Led UX direction and animated flow design.",
    tools: ["Figma", "Python"],
    impact: "Improved algorithm comprehension through visual-first workflow design.",
    summary: "Designed animated learning flows for five core sorting algorithms.",
    highlights: ["Led visualization strategy for algorithm states.", "Applied glassmorphism visual system.", "Translated algorithm concepts into learner-friendly interactions."],
  },
  {
    id: "12",
    name: "Pythonic Symphony — Address Book System",
    year: "2023-2024",
    intensity: "Medium",
    category: "Foundational Engineering",
    role: "Sole developer for core CRUD and data handling.",
    tools: ["Python"],
    impact: "Served 25+ testers and improved retrieval efficiency by 40%.",
    summary: "Python contact management system with optimized dictionary-based data retrieval.",
    highlights: ["Built full CRUD workflow.", "Optimized data lookup through dictionary structures.", "Validated performance with test users."],
  },
];

const skillIcons: Record<string, React.ReactNode> = {
  Frontend: <Layers className="w-5 h-5" />,
  Backend: <Terminal className="w-5 h-5" />,
  "Data & Storage": <Database className="w-5 h-5" />,
  "Embedded & Hardware": <Cpu className="w-5 h-5" />,
  "Systems & Tooling": <Settings className="w-5 h-5" />,
  "Expanding Into": <Zap className="w-5 h-5" />,
};

const skills: Record<string, string[]> = {
  Frontend: ["JavaScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  Backend: ["PHP", "Node.js", "REST APIs", "Authentication"],
  "Data & Storage": ["MySQL", "Database Design", "Data Modeling"],
  "Embedded & Hardware": ["Arduino", "Sensors", "NFC Systems", "Embedded C"],
  "Systems & Tooling": ["Git", "Linux", "Monitoring Systems", "Automation Logic"],
  "Expanding Into": ["Python", "Machine Learning", "AI Systems"],
};

const valueProps = [
  {
    number: "01",
    title: "Hardware + Web. Both.",
    body: "Most engineers live in one world. I build from sensors to servers — embedded systems, industrial hardware, and production web applications. That full-stack depth across layers is rare at any experience level.",
  },
  {
    number: "02",
    title: "Real Users. Real Stakes.",
    body: "My projects weren't tutorials or toy demos. They served real organizations, licensed events, and operational teams. I know what building under real constraints — and real accountability — actually feels like.",
  },
  {
    number: "03",
    title: "Systems Thinker.",
    body: "I don't just code features. I architect solutions — identifying the root problem, designing the right abstraction, and building for maintainability from day one. The difference between a codebase and a system.",
  },
  {
    number: "04",
    title: "Outcome-Oriented.",
    body: "Every project I take on has a measurable goal. Reduce manual work. Eliminate downtime risk. Automate repetition. I build toward outcomes, not outputs. The work ships when it works — not when it compiles.",
  },
  {
    number: "05",
    title: "Leadership Under Pressure.",
    body: "Student organizational leadership taught me to own decisions, communicate across roles, and deliver under pressure — skills most engineers don't develop until years on the job. I started early.",
  },
  {
    number: "06",
    title: "AI/ML Trajectory.",
    body: "Moving deliberately into ML and AI systems engineering. The combination of embedded hardware intuition, software architecture, and ML is a technical profile that's increasingly rare and in demand.",
  },
];

const navSections = ["Hero", "About", "Stack", "Work", "Why Me", "Contact"];

export default function EarlClydePortfolio() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [showSupportingProjects, setShowSupportingProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[data-index]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          const idx = section.getAttribute("data-index");
          if (idx !== null) setActiveSection(Number(idx));
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.querySelector<HTMLElement>(`section[data-index="${index}"]`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white" style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}>

      {/* ─── NAV ────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-300" style={{ mixBlendMode: "difference" }}>
        <button onClick={() => scrollToSection(0)} className="text-white font-black text-sm tracking-[0.3em] uppercase hover:text-accent transition-colors">
          EC
        </button>
        <div className="hidden md:flex items-center gap-10">
          {["About", "Stack", "Work", "Contact"].map((item, i) => (
            <button
              key={item}
              onClick={() => scrollToSection(i + 1)}
              className="text-white text-xs font-bold tracking-[0.2em] uppercase hover:text-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section data-index="0" className="min-h-screen bg-black flex flex-col justify-between px-8 md:px-16 pt-36 pb-16">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
              Available for Work — 2026
            </p>
          </div>
          <h1
            className="font-black text-white leading-[0.8] tracking-[-0.04em] mb-12 font-archivo"
            style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
          >
            EARL<br />CLYDE
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-xl md:text-3xl text-gray-400 font-light leading-tight tracking-tight">
                I don&apos;t just write code.{" "}
                <span className="text-white font-medium">
                  I engineer systems that solve real problems.
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 flex-shrink-0">
              <button
                onClick={() => scrollToSection(3)}
                className="group bg-accent text-white px-10 py-5 font-black text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
              >
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection(5)}
                className="group border border-gray-800 text-white px-10 py-5 font-bold text-xs tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center gap-3"
              >
                Get in Touch <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-gray-900 pt-8 mt-16">
          <div className="flex gap-10 md:gap-20">
            {[
              { num: "6+", label: "Projects Shipped" },
              { num: "2", label: "Domains Mastered" },
              { num: "3+", label: "Years Building" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="text-3xl md:text-4xl font-black text-white font-archivo">{num}</p>
                <p className="text-gray-600 text-[10px] md:text-xs tracking-[0.2em] uppercase mt-2 font-bold">{label}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col items-end gap-2">
             <p className="text-gray-700 text-[10px] tracking-[0.3em] uppercase font-bold">
              Scroll Down
            </p>
            <div className="w-px h-12 bg-gray-800 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[scroll_2s_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ──────────────────────────────────────────────────── */}
      <section data-index="1" className="min-h-screen bg-background flex flex-col justify-center px-8 md:px-16 py-32">
        <div className="max-w-screen-xl mx-auto w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-16 font-bold flex items-center gap-3">
            <span className="text-accent">01</span> — About
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div>
              <h2
                className="font-black text-black leading-[0.88] tracking-tighter font-archivo"
                style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
              >
                BUILT<br />TO<br /><span className="text-accent">SHIP</span>
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                I&apos;m a Computer Engineering student who builds systems that{" "}
                <em className="text-black font-normal not-italic border-b-2 border-accent/20">actually get used</em> — by real organizations, real teams, and real events.
              </p>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                My work spans industrial monitoring platforms, organizational governance tools,
                hardware-integrated systems, and event technology. I don&apos;t prototype for demos.
                I build for deployment.
              </p>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                What makes me different: I bridge the gap most engineers leave open — between
                embedded hardware and web software, between technical execution and operational
                impact. That range is uncommon. I&apos;m building it deliberately.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-gray-100 mt-4">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 font-bold">Currently</p>
                  <p className="font-bold text-black text-base font-archivo">B.S. Computer Engineering</p>
                  <p className="text-gray-500 text-sm mt-1">Polytechnic University of the Philippines</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 font-bold">Direction</p>
                  <p className="font-bold text-black text-base font-archivo">Full-Stack + Embedded Systems</p>
                  <p className="text-gray-500 text-sm mt-1">AI / ML engineering track — 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─────────────────────────────────────────────────── */}
      <section data-index="2" className="min-h-screen bg-[#080808] flex flex-col justify-center px-8 md:px-16 py-32">
        <div className="max-w-screen-xl mx-auto w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-600 mb-16 font-bold flex items-center gap-3">
            <span className="text-accent">02</span> — Stack
          </p>
          <h2
            className="font-black text-white leading-[0.88] tracking-tighter mb-24 font-archivo"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            ENGINEERED<br />WITH <span className="text-accent">PRECISION</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-900 border border-gray-900">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-[#080808] p-10 hover:bg-[#101010] transition-colors group">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-600 font-bold group-hover:text-accent transition-colors">{category}</p>
                  <div className="text-gray-700 group-hover:text-accent transition-colors">
                    {skillIcons[category]}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-white text-xs font-bold border border-gray-800 px-4 py-2 hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ───────────────────────────────────────────────── */}
      <section data-index="3" className="bg-background px-8 md:px-16 py-32">
        <div className="max-w-screen-xl mx-auto w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-16 font-bold flex items-center gap-3">
            <span className="text-accent">03</span> — Work
          </p>
          <h2
            className="font-black text-black leading-[0.88] tracking-tighter mb-24 font-archivo"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            SYSTEMS<br /><span className="text-accent">DEPLOYED</span>
          </h2>

          <div className="flex flex-col border-t border-gray-100">
            {projects.map((project) => {
              const projectKey = `core-${project.id}`;
              return (
                <div key={projectKey} className="border-b border-gray-100">
                  <button
                    className="group w-full text-left py-12 flex items-center justify-between gap-8 transition-all duration-500"
                    onClick={() => setActiveProject(activeProject === projectKey ? null : projectKey)}
                    aria-expanded={activeProject === projectKey}
                  >
                    <div className="flex items-center gap-8 md:gap-14 flex-1 min-w-0">
                      <span className="text-gray-300 text-xs font-bold font-archivo flex-shrink-0 tabular-nums group-hover:text-accent transition-colors">
                        {project.id}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-2xl md:text-4xl font-black text-black tracking-tight font-archivo group-hover:translate-x-2 transition-transform duration-500">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2 font-medium">{project.summary}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 hidden md:block font-bold">
                        {project.category}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold border border-gray-300 px-2 py-1">
                        {project.intensity}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{project.year}</span>
                      <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-500 ${activeProject === projectKey ? "bg-black border-black text-white rotate-180" : "group-hover:border-accent group-hover:text-accent"}`}>
                        <span className="text-xl font-light">{activeProject === projectKey ? "−" : "+"}</span>
                      </div>
                    </div>
                  </button>

                  {activeProject === projectKey && (
                    <div className="pb-16 grid grid-cols-1 lg:grid-cols-3 gap-16 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="lg:col-span-2 flex flex-col gap-8">
                        <div>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-4 font-bold">Scope</p>
                          <p className="text-gray-600 text-lg leading-relaxed font-light">{project.summary}</p>
                        </div>
                        <div>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-4 font-bold">Execution Highlights</p>
                          <ul className="space-y-2">
                            {project.highlights.map((item) => (
                              <li key={item} className="text-gray-600 text-base leading-relaxed font-light">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col gap-10">
                        <div>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-4 font-bold">My Role</p>
                          <p className="text-gray-600 leading-relaxed text-sm font-medium">{project.role}</p>
                        </div>
                        <div>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-4 font-bold">Impact</p>
                          <p className="text-black font-bold text-sm leading-relaxed font-archivo">{project.impact}</p>
                        </div>
                        <div>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-4 font-bold">Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                              <span key={tool} className="text-[10px] bg-black text-white px-3 py-1.5 font-bold uppercase tracking-wider">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 border border-gray-200">
            <button
              className="w-full text-left px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => setShowSupportingProjects((prev) => !prev)}
            >
              <span className="text-sm md:text-base font-bold text-black tracking-tight">
                Supporting Projects (Medium Intensity)
              </span>
              <span className="text-xl text-gray-500">{showSupportingProjects ? "−" : "+"}</span>
            </button>

            {showSupportingProjects && (
              <div className="border-t border-gray-200">
                {supportingProjects.map((project) => {
                  const projectKey = `support-${project.id}`;
                  return (
                    <div key={projectKey} className="border-b border-gray-100 last:border-b-0 px-6 md:px-8">
                      <button
                        className="group w-full text-left py-8 flex items-center justify-between gap-6"
                        onClick={() => setActiveProject(activeProject === projectKey ? null : projectKey)}
                        aria-expanded={activeProject === projectKey}
                      >
                        <div className="min-w-0">
                          <p className="text-lg md:text-xl font-black text-black tracking-tight">{project.name}</p>
                          <p className="text-sm text-gray-500 mt-1">{project.summary}</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold border border-gray-300 px-2 py-1">
                            {project.intensity}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{project.year}</span>
                          <span className="text-lg text-gray-400">{activeProject === projectKey ? "−" : "+"}</span>
                        </div>
                      </button>

                      {activeProject === projectKey && (
                        <div className="pb-8">
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 font-bold">Impact</p>
                          <p className="text-sm text-black font-semibold mb-5">{project.impact}</p>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 font-bold">Stack</p>
                          <div className="flex flex-wrap gap-2 mb-5">
                            {project.tools.map((tool) => (
                              <span key={tool} className="text-[10px] bg-black text-white px-3 py-1.5 font-bold uppercase tracking-wider">
                                {tool}
                              </span>
                            ))}
                          </div>
                          <ul className="space-y-2">
                            {project.highlights.map((item) => (
                              <li key={item} className="text-sm text-gray-600 leading-relaxed">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION ──────────────────────────────────────── */}
      <section data-index="4" className="min-h-screen bg-black flex flex-col justify-center px-8 md:px-16 py-32">
        <div className="max-w-screen-xl mx-auto w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-600 mb-16 font-bold flex items-center gap-3">
            <span className="text-accent">04</span> — Why Me
          </p>
          <h2
            className="font-black text-white leading-[0.88] tracking-tighter mb-24 font-archivo"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            THE <span className="text-accent">OUTCOME</span><br />ENGINEER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800 border border-gray-800">
            {valueProps.map((item) => (
              <div
                key={item.number}
                className="bg-black p-10 hover:bg-[#080808] transition-colors group"
              >
                <p className="text-accent text-[10px] font-bold font-mono mb-8 tracking-widest">{item.number}</p>
                <h3 className="text-white font-bold text-xl mb-5 leading-tight font-archivo group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA ──────────────────────────────────────────── */}
      <section data-index="5" className="min-h-screen bg-background flex flex-col justify-between px-8 md:px-16 pt-36 pb-16">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col flex-1 justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-16 font-bold flex items-center gap-3">
              <span className="text-accent">05</span> — Contact
            </p>
            <h2
              className="font-black text-black leading-[0.82] tracking-[-0.04em] mb-16 font-archivo"
              style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
            >
              LET&apos;S<br /><span className="text-accent">BUILD</span><br />SYSTEMS
            </h2>
            <p className="text-xl md:text-3xl text-gray-500 max-w-2xl leading-tight mb-16 font-light tracking-tight">
              If you&apos;re building something that needs to work — in the real world, under real
              conditions — <span className="text-black font-medium">I&apos;m the engineer you want on it.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:hello@earlclyde.dev"
                className="group bg-accent text-white px-12 py-6 font-black text-xs tracking-[0.2em] uppercase hover:bg-black transition-all duration-300 text-center flex items-center justify-center gap-3"
              >
                <Mail className="w-4 h-4" /> Send a Message
              </a>
              <a
                href="https://linkedin.com/in/earlclyde"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-black text-black px-12 py-6 font-black text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-3"
              >
                <UserRound className="w-4 h-4 group-hover:scale-110 transition-transform" /> View LinkedIn
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-10 mt-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-gray-400 text-sm font-medium tracking-tight">© 2026 Earl Clyde. Built for operational impact.</p>
            <div className="flex gap-10">
              {[
                { label: "GitHub", href: "https://github.com/earlclyde", icon: <CodeXml className="w-4 h-4" /> },
                { label: "LinkedIn", href: "https://linkedin.com/in/earlclyde", icon: <Globe className="w-4 h-4" /> },
                { label: "Email", href: "mailto:hello@earlclyde.dev", icon: <Mail className="w-4 h-4" /> },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-accent transition-all flex items-center gap-2"
                  title={label}
                >
                  {icon}
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── NAV DOTS ───────────────────────────────────────────────── */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3" style={{ mixBlendMode: "difference" }}>
        {navSections.map((label, index) => (
          <button
            key={index}
            title={label}
            onClick={() => scrollToSection(index)}
            className="transition-all duration-300"
            style={{
              width: activeSection === index ? "20px" : "8px",
              height: "8px",
              backgroundColor: "white",
              borderRadius: activeSection === index ? "4px" : "50%",
              opacity: activeSection === index ? 1 : 0.35,
            }}
          />
        ))}
      </div>
    </div>
  );
}
