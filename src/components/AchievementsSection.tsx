import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Code, Target } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Top 10 — IIIT Manipur",
    description: "Ranked in the top 10 in a competitive coding competition",
  },
  {
    icon: Target,
    title: "Rank 3323 / 40,000",
    description: "Competitive standing on Codeforces platform",
  },
  {
    icon: Code,
    title: "500+ Problems Solved",
    description: "Consistent problem-solving across DSA topics",
  },
];

const AchievementsSection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading label="Achievements" title="Competitive edge." />

      <div className="grid md:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="surface-glass rounded-2xl p-6 text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <a.icon size={18} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">{a.title}</h3>
            <p className="text-xs text-muted-foreground">{a.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
