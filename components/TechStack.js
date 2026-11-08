const stack = [
  "React",
  "Next.js",
  "Flutter",
  "React Native",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "PyTorch",
  "OpenAI API",
  "Kubernetes",
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <span className="mb-6 inline-block font-mono text-xs uppercase tracking-widest text-teal">
        Stack we ship with
      </span>
      <div className="flex flex-wrap gap-2.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-4 py-2 font-mono text-[13px] text-muted transition-colors hover:border-teal/40 hover:text-teal"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
