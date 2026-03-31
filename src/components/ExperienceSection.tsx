import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "MAQ Software",
    period: "Oct 2025 – Present",
    highlights: [
      "Designed scalable REST APIs using Spring Boot, serving thousands of daily requests",
      "Implemented JWT-based authentication with role-based access control (RBAC)",
      "Improved database query performance by 30% through indexing and optimization",
      "Built reusable, type-safe frontend components with React and TypeScript",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "ITJOBXS",
    period: "2024",
    highlights: [
      "Developed responsive UI components improving user engagement",
      "Engineered spam detection logic that reduced spam activity by 40%",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading label="Experience" title="Where I've contributed." />

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="surface-glass rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company} · {exp.period}
                </p>
              </div>
            </div>
            <ul className="space-y-3 ml-14">
              {exp.highlights.map((h, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
