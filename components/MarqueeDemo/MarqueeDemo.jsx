import React from "react";
import {
  SiDocker,
  SiFirebase,
  SiFlask,
  SiOpenjdk as SiJava,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { Marquee } from "../Marquee/Marquee";

const TECH_SKILLS = [
  { name: "Java", category: "Language", icon: SiJava, color: "#ED8B00" },
  { name: "Python", category: "Language", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", category: "Language", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", category: "Language", icon: SiTypescript, color: "#3178C6" },
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "currentColor" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Flask", category: "Backend", icon: SiFlask, color: "currentColor" },
  { name: "MySQL", category: "Database", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", category: "Platform", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", category: "DevOps", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", category: "DevOps", icon: SiKubernetes, color: "#326CE5" },
];

const SkillCard = ({ icon: Icon, name, category, color }) => {
  return (
    <article className="skill-marquee-card group flex min-h-36 w-64 shrink-0 flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.08] p-5 text-fg shadow-[0_16px_48px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.14] dark:border-white/10 dark:bg-white/[0.08] dark:hover:bg-white/[0.13]">
      <div className="flex items-start justify-between gap-4">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.12] text-2xl shadow-inner dark:border-white/10 dark:bg-black/20"
          style={{ color }}
        >
          <Icon aria-hidden="true" />
        </span>
        <span className="rounded-full border border-white/15 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-fg-muted dark:border-white/10">
          {category}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-medium tracking-[-0.04em]">{name}</h3>
    </article>
  );
};

export function MarqueeDemo() {
  return (
    <section id="tech-skills" className="relative overflow-hidden bg-bg px-5 py-20 text-fg md:px-10 md:py-28 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-col gap-4 border-b border-theme-border pb-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-muted">
              Technical stack
            </span>
            <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
              Tech skills
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-fg-muted md:text-right">
            A moving snapshot of the languages, frameworks, databases, and DevOps tools I use to build production systems.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <Marquee pauseOnHover className="[--duration:30s]">
          {TECH_SKILLS.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/5 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/5 bg-gradient-to-l from-bg via-bg/80 to-transparent" />
      </div>
    </section>
  );
}
