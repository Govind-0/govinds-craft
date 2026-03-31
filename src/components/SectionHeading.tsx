import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="text-center mb-16 md:mb-20"
  >
    <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
      {label}
    </span>
    <h2 className="heading-lg text-foreground mb-4">{title}</h2>
    {description && (
      <p className="body-md text-muted-foreground max-w-2xl mx-auto">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
