"use client";

import { useState } from "react";
import type { PortfolioSectionId } from "@/lib/portfolio-sections";
import type { Project } from "@/types/project";

type WorksThroughLifeSectionProps = { id: PortfolioSectionId };

const projects: Project[] = [
  {
    number: "01", name: "Drowzi — Hack Sprint Champion", year: "2026", status: "COMPLETED",
    tags: ["Python", "Machine Learning", "Vibe-coding", "Rapid Prototyping"],
    description: "Won 1st Place at Cursor Manila Hack Sprint. Developed ML pipeline for media processing and intelligent content handling under high-pressure hackathon environment.",
    color: "#3D3D3D", nameColor: "#A0A0A0", icon: "🏆",
    href: null,
    featured: true,
  },
  {
    number: "02", name: "ACCESS Official Website",       year: "2026", status: "ACTIVE",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    description: "Led frontend architecture for ACCESS at PUP. Centralized org data, implemented asset management interface and role-based access for students and leadership.",
    color: "#5A8880", nameColor: "#4A9A5A", icon: "🏛",
    href: "https://access-web-tau.vercel.app/",
    featured: true,
  },
  {
    number: "03", name: "AWSCCPUP Website & Membership", year: "2026", status: "ACTIVE",
    tags: ["Astro", "React", "TypeScript", "FastAPI", "PostgreSQL"],
    description: "Contributed to AWS Cloud Club PUP's official site. Implemented member directory, profile management, and FastAPI REST API with Islands Architecture.",
    color: "#C08A58", nameColor: "#D4A040", icon: "☁",
    href: "https://www.awsccpup.cloud/contributors",
    featured: true,
  },
  {
    number: "04", name: "AWS SBD Learning Management System", year: "2025", status: "COMPLETED",
    tags: ["React", "TypeScript", "Express.js", "Supabase", "AWS"],
    description: "Gamified LMS for AWS Cloud Club PUP. Implemented leaderboard system and key UI components, integrating frontend with Express.js + Supabase for real-time updates.",
    color: "#4A7088", nameColor: "#4A80C0", icon: "📚",
    href: "https://sbd.awsccpup.cloud/contributors",
    featured: true,
  },
  {
    number: "05", name: "OMS – Output Monitoring System", year: "2025", status: "COMPLETED",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    description: "Real-time production monitoring tracking 2M+ outputs. Built responsive frontend and PHP/MySQL backend for predictive maintenance and lifespan tracking.",
    color: "#7A6A55", nameColor: "#C0704A", icon: "🏭",
    href: null,
    featured: true,
  },
  {
    number: "06", name: "ActiveCAMPUS GO",               year: "2025", status: "COMPLETED",
    tags: ["Next.js", "Express", "Firebase", "Google Maps"],
    description: "Gamified fitness platform for student wellness. Architected PWA using Next.js and Firebase, integrating Google Maps for real-time zone interactions. Ranked Top 8 PUP-wide.",
    color: "#6AAA6A", nameColor: "#4AA870", icon: "🏃",
    href: null,
    featured: true,
  },
  {
    number: "07", name: "CPE Fair Tournament System",    year: "2025", status: "COMPLETED",
    tags: ["Next.js", "Express.js", "TypeScript", "Supabase", "Vercel"],
    description: "Full-stack platform with real-time leaderboard, bracket visualization, and admin dashboard. Implemented RBAC, score aggregation, and Excel export.",
    color: "#8B6A9A", nameColor: "#9A5AC0", icon: "🏆",
    href: "https://cpefair2025.vercel.app/contributors",
    featured: true,
  },
  {
    number: "08", name: "Evidentia — AI Civic Platform", year: "2025", status: "COMPLETED",
    tags: ["HTML", "CSS", "Python", "Gemini AI", "GPT API"],
    description: "AI-powered civic incident platform featuring prioritized reporting and heatmap dashboards. Integrated Gemini AI for urgency filtering and a GPT-wrapped chatbot.",
    color: "#5A5888", nameColor: "#6A5A90", icon: "⚖",
    href: null,
    featured: true,
  },
  {
    number: "09", name: "TEDxPUP Official Website",      year: "2025", status: "COMPLETED",
    tags: ["React", "Typeform"],
    description: "Developed official TEDxPUP platform. Implemented FAQs, contributors page, and tablet views. Integrated Typeform for ticketing and registration.",
    color: "#C04040", nameColor: "#C04A4A", icon: "🎤",
    href: "https://www.tedxpup.org/contributors",
    featured: false,
  },
  {
    number: "10", name: "AWSCC ID Finder Upgrade",        year: "2025", status: "COMPLETED",
    tags: ["React", "TypeScript"],
    description: "Led complete frontend redesign, migrating from legacy RetroUI to a modern, production-grade design aligned with the SBD LMS visual system.",
    color: "#4A6A9A", nameColor: "#5A70A8", icon: "🪪",
    href: "https://www.awsccpup.cloud/id-finder",
    featured: false,
  },
  {
    number: "11", name: "ICpEP Certificate Generator",  year: "2025", status: "COMPLETED",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    description: "Automated bulk certificate creation for large-scale events — CSV input, live template preview, and one-click batch PDF/PNG export. Reduced days of manual work to minutes.",
    color: "#D4785A", nameColor: "#C89A40", icon: "📜",
    href: null,
    featured: false,
  },
  {
    number: "12", name: "Sorting Algorithm Visualizer",   year: "2024–2025", status: "COMPLETED",
    tags: ["Figma", "Python", "Glassmorphism"],
    description: "Designed and implemented animated visual workflows for core sorting algorithms. Features a modern Glassmorphism UI and custom-built animations.",
    color: "#8B8B6A", nameColor: "#A8A85A", icon: "📊",
    href: null,
    featured: false,
  },
  {
    number: "13", name: "Pythonic Symphony",             year: "2023–2024", status: "COMPLETED",
    tags: ["Python"],
    description: "Contact management system with CRUD features and optimized dictionary storage. Improved retrieval efficiency by 40% for 25+ test users.",
    color: "#6A7A88", nameColor: "#5A70A8", icon: "📔",
    href: null,
    featured: false,
  },
];

// Featured pinned cards = projects with live links
const PINNED = projects.filter((p) => p.href);
const ROTS   = [-2.5, 1.5, -3, 2, -1.5, 2.5, -2, 1];
const PIN_COLORS = ["#D4604A", "#4A80C0", "#4A9A5A", "#D4C04A", "#9A5AC0", "#C04040"];

const TECH_STACK = [
  { label: "React",      icon: "⚛" },
  { label: "Next.js",    icon: "▲" },
  { label: "TypeScript", icon: "🔷" },
  { label: "Supabase",   icon: "⚡" },
  { label: "Tailwind",   icon: "🌊" },
  { label: "PostgreSQL", icon: "🐘" },
  { label: "Express",    icon: "🔌" },
  { label: "Python",     icon: "🐍" },
  { label: "Firebase",   icon: "🔥" },
  { label: "FastAPI",    icon: "🚀" },
];

// ─── Pushpin ────────────────────────────────────────────────────
function Pushpin({ color }: { color: string }) {
  return (
    <div style={{
      position: "absolute",
      top: "-9px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 3,
      width: "14px", height: "14px",
      background: color,
      border: "2px solid rgba(0,0,0,0.45)",
      borderRadius: "50%",
      boxShadow: "1px 2px 0 rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
    }} />
  );
}

// ─── Polaroid card ──────────────────────────────────────────────
function Polaroid({ project, rotation, pinColor, idx }: {
  project: typeof projects[0];
  rotation: number;
  pinColor: string;
  idx: number;
}) {
  const card = (
    <div
      data-reveal="scale"
      style={{
        transitionDelay: `${idx * 80}ms`,
        background: "#F6F1E3",
        padding: "5px 5px 22px",
        border: "2px solid rgba(61,48,37,0.18)",
        boxShadow: "4px 5px 0 rgba(0,0,0,0.28)",
        transform: `rotate(${rotation}deg)`,
        position: "relative",
        transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s",
        cursor: project.href ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = `rotate(0deg) scale(1.06)`;
        el.style.boxShadow = "6px 8px 0 rgba(0,0,0,0.35)";
        el.style.zIndex = "10";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = `rotate(${rotation}deg)`;
        el.style.boxShadow = "4px 5px 0 rgba(0,0,0,0.28)";
        el.style.zIndex = "1";
      }}
    >
      <Pushpin color={pinColor} />

      {/* Photo area */}
      <div style={{
        background: project.color,
        aspectRatio: "1 / 1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        border: "1px solid rgba(0,0,0,0.1)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Pixel noise overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 4px)",
        }} />
        <div style={{ fontSize: "26px", position: "relative" }}>{project.icon}</div>
        <div style={{
          fontFamily: "var(--font-pixel), monospace",
          fontSize: "5px",
          color: "rgba(255,255,255,0.75)",
          letterSpacing: "0.06em",
          position: "relative",
        }}>
          #{project.number}
        </div>
        {project.href && (
          <div style={{
            position: "absolute", bottom: "4px", right: "4px",
            fontFamily: "var(--font-pixel), monospace", fontSize: "5px",
            background: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.9)",
            padding: "2px 4px",
          }}>▶</div>
        )}
      </div>

      {/* Polaroid caption */}
      <div style={{
        fontFamily: "var(--font-pixel), monospace",
        fontSize: "5px",
        color: "#5A3A1A",
        textAlign: "center",
        marginTop: "7px",
        lineHeight: 1.6,
        letterSpacing: "0.04em",
        padding: "0 2px",
      }}>
        {project.name.length > 18 ? project.name.slice(0, 18) + "…" : project.name}
      </div>
    </div>
  );

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block", position: "relative", zIndex: 1 }}
    >
      {card}
    </a>
  ) : (
    <div style={{ position: "relative", zIndex: 1 }}>
      {card}
    </div>
  );
}

// ─── Project list row ────────────────────────────────────────────
function ProjectRow({ project, i }: { project: typeof projects[0]; i: number }) {
  return (
    <div
      data-reveal="right"
      style={{
        transitionDelay: `${i * 60}ms`,
        paddingBottom: "10px",
        marginBottom: "10px",
        borderBottom: "1px dashed rgba(61,48,37,0.22)",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
        <span style={{
          fontFamily: "var(--font-vt323), monospace",
          fontSize: "21px",
          color: project.nameColor,
          lineHeight: 1.2,
        }}>
          {project.icon} {project.name}
        </span>
        <div style={{ display: "flex", gap: "6px", alignItems: "center", flexShrink: 0 }}>
          <span style={{
            fontFamily: "var(--font-pixel), monospace", fontSize: "6px",
            color: "rgba(61,48,37,0.5)",
          }}>
            {project.year}
          </span>
          <span style={{
            fontFamily: "var(--font-pixel), monospace", fontSize: "6px",
            padding: "2px 6px",
            background: project.status === "ACTIVE" ? "rgba(74,154,90,0.15)" : "rgba(61,48,37,0.1)",
            border: `1px solid ${project.status === "ACTIVE" ? "rgba(74,154,90,0.4)" : "rgba(61,48,37,0.2)"}`,
            color: project.status === "ACTIVE" ? "#4A9A5A" : "rgba(61,48,37,0.55)",
            letterSpacing: "0.05em",
          }}>
            {project.status === "ACTIVE" ? "● ONGOING" : "✓ DONE"}
          </span>
        </div>
      </div>
      <p style={{
        fontFamily: "var(--font-vt323), monospace", fontSize: "17px",
        color: "rgba(61,48,37,0.65)", lineHeight: 1.4, marginTop: "2px",
      }}>
        {project.description.length > 110 ? project.description.slice(0, 110) + "…" : project.description}
      </p>
    </div>
  );
}

// ─── Main section ────────────────────────────────────────────────
export function WorksThroughLifeSection({ id }: WorksThroughLifeSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter(p => p.featured);
  const secondaryProjects = projects.filter(p => !p.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 py-20"
      style={{ background: "#C4925A" }}
    >
      {/* Cork dot texture */}
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }} />
      {/* Wood grain lines */}
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: "repeating-linear-gradient(87deg, rgba(0,0,0,0.025) 0px, rgba(0,0,0,0.025) 1px, transparent 1px, transparent 36px)",
      }} />

      <div data-enter="slide" className="relative z-10 w-full max-w-6xl">

        {/* ── Binder clip ── */}
        <div data-reveal style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <div style={{ position: "relative", width: "48px" }}>
            <div style={{
              height: "18px", background: "#A0A0A0",
              border: "2px solid rgba(0,0,0,0.4)", borderBottom: "none",
              borderRadius: "4px 4px 0 0",
            }} />
            <div style={{
              height: "12px", width: "32px", margin: "0 auto",
              background: "#C8C8C8", border: "2px solid rgba(0,0,0,0.3)",
              borderTop: "none", borderRadius: "0 0 3px 3px",
            }} />
          </div>
        </div>

        {/* ── Two-column board layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-8 lg:gap-12">

          {/* ════════════════════════
              LEFT — Polaroid photo board
          ════════════════════════ */}
          <div>
            {/* "MY PROJECTS" sticky label */}
            <div data-reveal style={{ marginBottom: "28px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#F6F1E3",
                padding: "7px 16px",
                border: "2px solid rgba(61,48,37,0.3)",
                boxShadow: "3px 3px 0 rgba(0,0,0,0.22)",
                transform: "rotate(-1deg)",
              }}>
                <span style={{
                  fontFamily: "var(--font-pixel), monospace",
                  fontSize: "clamp(8px, 1.5vw, 12px)",
                  color: "#3D3025",
                  letterSpacing: "0.06em",
                }}>
                  MY PROJECTS
                </span>
                <span style={{
                  fontFamily: "var(--font-vt323), monospace",
                  fontSize: "22px",
                  color: "#C05090",
                  fontStyle: "italic",
                  lineHeight: 1,
                }}>
                  Recently
                </span>
              </div>
            </div>

            {/* Polaroid grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6" style={{ paddingTop: "12px" }}>
              {PINNED.map((p, i) => (
                <Polaroid
                  key={p.number}
                  project={p}
                  rotation={ROTS[i] ?? 0}
                  pinColor={PIN_COLORS[i % PIN_COLORS.length]}
                  idx={i}
                />
              ))}
            </div>
          </div>

          {/* ════════════════════════
              RIGHT — Project log
          ════════════════════════ */}
          <div>
            {/* "RECENT BUILDS" label */}
            <div data-reveal style={{ marginBottom: "20px" }}>
              <div style={{
                display: "inline-block",
                background: "#F6F1E3",
                padding: "7px 16px",
                border: "2px solid rgba(61,48,37,0.3)",
                boxShadow: "3px 3px 0 rgba(0,0,0,0.22)",
                transform: "rotate(0.8deg)",
              }}>
                <span style={{
                  fontFamily: "var(--font-pixel), monospace",
                  fontSize: "clamp(8px, 1.5vw, 12px)",
                  color: "#3D3025",
                  letterSpacing: "0.06em",
                }}>
                  MAJOR BUILDS
                </span>
              </div>
            </div>

            {/* Project list */}
            <div style={{
              background: "rgba(246,241,227,0.88)",
              border: "2px solid rgba(61,48,37,0.25)",
              boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
              padding: "16px 18px",
            }}>
              <div className="flex flex-col">
                {displayedProjects.map((p, i) => (
                  <ProjectRow key={p.number} project={p} i={i} />
                ))}
              </div>

              {/* View More Button */}
              <button
                onClick={() => setShowAll(!showAll)}
                style={{
                  width: "100%",
                  padding: "12px",
                  marginTop: "8px",
                  background: "rgba(61,48,37,0.05)",
                  border: "2px dashed rgba(61,48,37,0.2)",
                  fontFamily: "var(--font-pixel), monospace",
                  fontSize: "8px",
                  color: "#5A3A1A",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(61,48,37,0.1)";
                  e.currentTarget.style.borderStyle = "solid";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(61,48,37,0.05)";
                  e.currentTarget.style.borderStyle = "dashed";
                }}
              >
                {showAll ? "▲ SHOW LESS" : `▼ VIEW ARCHIVE (${secondaryProjects.length} OTHER PROJECTS)`}
              </button>

              {/* Tech stack badges */}
              <div style={{ paddingTop: "14px", marginTop: "14px", borderTop: "2px dashed rgba(61,48,37,0.25)" }}>
                <div style={{
                  fontFamily: "var(--font-pixel), monospace",
                  fontSize: "7px",
                  color: "rgba(61,48,37,0.5)",
                  letterSpacing: "0.1em",
                  marginBottom: "10px",
                }}>
                  TOOLS &amp; STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map(({ label, icon }) => (
                    <div
                      key={label}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        fontFamily: "var(--font-pixel), monospace",
                        fontSize: "6px",
                        padding: "4px 8px",
                        background: "rgba(61,48,37,0.08)",
                        border: "2px solid rgba(61,48,37,0.2)",
                        color: "#5A3A1A",
                        letterSpacing: "0.04em",
                        boxShadow: "2px 2px 0 rgba(0,0,0,0.15)",
                      }}
                    >
                      <span style={{ fontSize: "12px" }}>{icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
