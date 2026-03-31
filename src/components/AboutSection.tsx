import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const highlights = [
  { value: "30%", label: "Query Performance Boost" },
  { value: "40%", label: "Faster Request Processing" },
  { value: "500+", label: "DSA Problems Solved" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading label="About" title="Engineering with purpose." />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid md:grid-cols-3 gap-6 mb-12"
      >
        {highlights.map((h) => (
          <div key={h.label} className="surface-glass rounded-2xl p-8 text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{h.value}</div>
            <div className="text-sm text-muted-foreground">{h.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto space-y-5 body-md text-muted-foreground"
      >
        <p>
          Full Stack Engineer with industry experience at <span className="text-foreground font-medium">MAQ Software</span>,
          focused on building production-grade systems that scale. Strong backend focus spanning REST API
          design, authentication architectures, and database performance optimization.
        </p>
        <p>
          I write clean, maintainable code with an emphasis on system reliability and developer experience.
          From optimizing SQL queries to building reusable React components — every line of code serves
          a purpose.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
