const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "React Query",
  "Zustand",
  "Framer Motion",
  "Docker",
]

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-muted/30 text-center">
        <h2 className="text-4xl font-bold mb-16">Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 rounded-xl bg-background border shadow-sm 
              hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
      </div>
    </section>
  )
}