import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const highlights = [
  { value: "400+", label: "Problems Solved" },
  { value: "7.8", label: "CGPA (B.Tech CSE)" },
  { value: "90.7%", label: "Class 10 Score" },
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
          Software Engineer currently working at <span className="text-foreground font-medium">EY</span> as an SAP Engineer,
          contributing to enterprise systems and backend engineering. With prior experience at{" "}
          <span className="text-foreground font-medium">DRDO / ADRDE</span>, skilled in backend development,
          REST APIs, and database integration.
        </p>
        <p>
          Delivering clean, maintainable, and scalable applications. From engineering efficient
          backend architectures to building responsive user interfaces — every line of code is written
          with production quality in mind.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
