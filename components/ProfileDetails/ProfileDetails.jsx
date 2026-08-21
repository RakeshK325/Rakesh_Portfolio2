const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Web",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Flask",
      "HTML5",
      "CSS3",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "Firebase Firestore"],
  },
  {
    title: "Developer Tools & DevOps",
    items: ["Git", "Git Bash", "Docker", "Kubernetes"],
  },
  {
    title: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "OOP", "DBMS"],
  },
];

const EDUCATION = [
  {
    qualification: "B.E. in Computer Science & Engineering",
    institution: "Alva's Institute of Engineering and Technology, Mangalore",
    period: "2023 – Present",
    result: "CGPA: 7.6",
  },
  {
    qualification: "Pre-University (Science)",
    institution: "ASC PU College, Bangalore",
    period: "2021 – 2023",
    result: "70%",
  },
  {
    qualification: "Secondary Education",
    institution: "ST Xavier High School, Bangalore",
    period: "2018 – 2021",
    result: "79.51%",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Udgama National Level Hackathon 2025",
    location: "Mysore",
    description:
      "Shortlisted in the Top 30 teams out of 100+ participating groups.",
  },
  {
    title: "ICFAI GenAI Hackathon 2025",
    location: "Bangalore",
    description:
      "Pan-India Finalist, built a rapid AI prototype within a 24-hour cycle.",
  },
];

const CERTIFICATIONS = [
  "NPTEL Cloud Computing",
  "Deloitte Data Analytics Simulation (Forage)",
  "Docker & Kubernetes Masterclass (Scaler)",
];

const ProfileDetails = () => {
  return (
    <section
      id="profile-details"
      className="w-full bg-bg px-5 py-20 text-fg md:px-10 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-col gap-4 border-b border-theme-border pb-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-muted">
              Profile
            </span>
            <h2 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
              Skills, education &amp; impact
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-fg-muted md:text-right">
            A focused engineering foundation spanning software development,
            cloud-native tooling, applied AI, and computer science fundamentals.
          </p>
        </div>

        <div className="grid gap-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-28">
          <div>
            <div className="mb-7 flex items-center justify-between border-b border-theme-border pb-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em]">
                Skills grid
              </h3>
              <span className="text-xs text-fg-muted">01 / 03</span>
            </div>
            <div className="grid gap-px overflow-hidden border border-theme-border bg-theme-border sm:grid-cols-2">
              {SKILL_GROUPS.map((group) => (
                <article
                  key={group.title}
                  className={`bg-bg p-5 md:p-7 ${
                    group.title === "CS Fundamentals" ? "sm:col-span-2" : ""
                  }`}
                >
                  <h4 className="text-lg font-medium tracking-[-0.03em] md:text-xl">
                    {group.title}
                  </h4>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-theme-border px-3 py-2 text-xs leading-none text-fg-muted transition-colors hover:border-fg hover:text-fg"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-7 flex items-center justify-between border-b border-theme-border pb-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em]">
                Education
              </h3>
              <span className="text-xs text-fg-muted">02 / 03</span>
            </div>
            <div className="divide-y divide-theme-border border-y border-theme-border">
              {EDUCATION.map((entry) => (
                <article key={entry.qualification} className="py-6 md:py-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <h4 className="max-w-sm text-xl font-medium leading-tight tracking-[-0.03em] md:text-2xl">
                      {entry.qualification}
                    </h4>
                    <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-fg-muted">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {entry.institution}
                  </p>
                  <p className="mt-4 text-sm font-medium">{entry.result}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
          <div>
            <div className="mb-7 flex items-center justify-between border-b border-theme-border pb-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em]">
                Achievements &amp; hackathons
              </h3>
              <span className="text-xs text-fg-muted">03 / 03</span>
            </div>
            <div className="space-y-0 divide-y divide-theme-border border-y border-theme-border">
              {ACHIEVEMENTS.map((achievement) => (
                <article key={achievement.title} className="py-6 md:py-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <h4 className="text-xl font-medium leading-tight tracking-[-0.03em] md:text-2xl">
                      {achievement.title}
                    </h4>
                    <span className="text-xs uppercase tracking-[0.16em] text-fg-muted">
                      {achievement.location}
                    </span>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-fg-muted">
                    {achievement.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-7 border-b border-theme-border pb-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em]">
                Certifications
              </h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {CERTIFICATIONS.map((certification, index) => (
                <li
                  key={certification}
                  className="flex items-start gap-4 border-b border-theme-border pb-4 text-lg leading-tight tracking-[-0.02em] md:text-2xl"
                >
                  <span className="pt-1 text-xs text-fg-muted">0{index + 1}</span>
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
