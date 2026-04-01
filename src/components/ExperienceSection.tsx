import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    role: "SAP Engineer",
    company: "EY",
    period: "Current",
    icon: Briefcase,
    highlights: [
      "Engineering enterprise-grade systems for large-scale business operations",
      "Contributing to backend system development and production workflows",
      "Handling real-world production deployments and business-critical applications",
      "Building scalable architectures aligned with enterprise standards",
    ],
    current: true,
  },
  {
    role: "Intern",
    company: "DRDO / ADRDE",
    period: "Sept 2024 – Oct 2024",
    icon: Briefcase,
    highlights: [
      "Developed responsive web pages for internal systems",
      "Integrated backend using PHP and MySQL",
      "Built dynamic features using JavaScript and Bootstrap",
      "Delivered real-world system design and implementation",
    ],
  },
];

const education = [
  {
    degree: "B.Tech (CSE)",
    institution: "GL Bajaj Group of Institutions",
    detail: "CGPA: 7.8",
  },
  { degree: "Class 12", institution: "", detail: "86%" },
  { degree: "Class 10", institution: "", detail: "90.7%" },
];

const certifications = [
  "Data Structures and Algorithms — Udemy, 2025",
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading label="Experience" title="Where I've contributed." />

      <div className="space-y-6 mb-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`surface-glass rounded-2xl p-8 ${(exp as any).current ? 'border border-primary/30' : ''}`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <exp.icon size={18} className="text-primary" />
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

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="surface-glass rounded-2xl p-8 mb-6"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <GraduationCap size={18} className="text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Education</h3>
        </div>
        <div className="space-y-3 ml-14">
          {education.map((e, idx) => (
            <div key={idx} className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">{e.degree}</span>
              {e.institution && ` — ${e.institution}`}
              {" · "}
              <span className="text-primary font-medium">{e.detail}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="surface-glass rounded-2xl p-8"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Award size={18} className="text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Certifications</h3>
        </div>
        <ul className="space-y-2 ml-14">
          {certifications.map((c, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
