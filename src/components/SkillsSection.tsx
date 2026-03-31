import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Backend Engineering",
    primary: true,
    skills: ["Java", "Spring Boot", "REST APIs", "JWT & OAuth", "Microservices", "Node.js"],
  },
  {
    title: "Frontend Engineering",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Responsive Design"],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Query Optimization", "Database Design"],
  },
  {
    title: "System Design",
    skills: ["API Design", "Scalable Architecture", "RBAC", "Authentication", "Load Balancing", "Caching Strategies"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Git", "Linux", "Nginx"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading label="Skills" title="Technical expertise." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-2xl p-6 border transition-colors ${
              cat.primary
                ? "border-primary/30 bg-primary/5"
                : "border-border/50 surface-elevated"
            } ${cat.primary ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-semibold text-foreground text-sm">{cat.title}</h3>
              {cat.primary && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium uppercase tracking-wider">
                  Primary
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
