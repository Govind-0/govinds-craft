import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight, Zap, Globe, MessageCircle, QrCode } from "lucide-react";

const projects = [
  {
    title: "Employee Request Management System",
    problem: "Manual request workflows causing delays and errors in enterprise operations.",
    solution:
      "Automated end-to-end request processing with secure authentication, role-based access, and real-time reporting dashboards.",
    tech: ["Spring Boot", "React", "PostgreSQL", "JWT", "REST APIs"],
    impact: [
      "Reduced request processing time by 40%",
      "Automated workflows and reporting",
      "Integrated RBAC and secure auth",
    ],
    icon: Zap,
  },
  {
    title: "Real Estate Web Application",
    problem: "Slow, unresponsive property search experience with poor rendering performance.",
    solution:
      "Built a scalable property platform with dynamic filtering, optimized rendering, and modular component architecture.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    impact: [
      "Dynamic search and filtering system",
      "Optimized rendering performance",
      "Scalable, reusable component design",
    ],
    icon: Globe,
  },
  {
    title: "College Dating App",
    problem: "No secure, campus-specific platform for students to connect in real-time.",
    solution:
      "Designed a real-time chat application with secure authentication, matching algorithms, and scalable API architecture.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    impact: [
      "Real-time chat with Socket.io",
      "Secure authentication & matching logic",
      "Scalable API architecture",
    ],
    icon: MessageCircle,
  },
];

const ordigoz = {
  title: "Ordigoz",
  subtitle: "Smart Dining & Restaurant Management",
  description:
    "A product-level QR-based ordering and restaurant management system that eliminates manual order-taking, reduces errors, and speeds up service.",
  features: [
    { label: "QR-Based Ordering", desc: "Customers scan, browse menu, and order from their table" },
    { label: "Real-Time Dashboard", desc: "Live order tracking for kitchen and management" },
    { label: "Digital Menu System", desc: "Dynamic menu management with categories and pricing" },
    { label: "Table-Based Tracking", desc: "Orders mapped to tables for seamless service" },
  ],
  impact: [
    "Reduces staff dependency by 60%",
    "Speeds up order-to-serve time",
    "Eliminates manual order errors",
    "Improves overall customer experience",
  ],
  tech: ["React", "Spring Boot", "PostgreSQL", "WebSocket", "QR Integration"],
};

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        label="Projects"
        title="Work that matters."
        description="Each project represents a real engineering challenge — with measurable outcomes."
      />

      {/* Regular projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group surface-glass rounded-2xl p-6 flex flex-col hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <p.icon size={18} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-1">
              {p.title}
              <ArrowUpRight
                size={14}
                className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              <span className="text-foreground/70 font-medium">Problem:</span> {p.problem}
            </p>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              <span className="text-foreground/70 font-medium">Solution:</span> {p.solution}
            </p>

            <div className="mt-auto pt-4 border-t border-border/50">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-1">
                {p.impact.map((imp, idx) => (
                  <li key={idx} className="text-[11px] text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {imp}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ordigoz — featured product */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <QrCode size={20} className="text-primary" />
          </div>
          <span className="text-[10px] px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold uppercase tracking-wider">
            Product
          </span>
        </div>
        <h3 className="heading-md text-foreground mb-1">{ordigoz.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{ordigoz.subtitle}</p>
        <p className="body-md text-muted-foreground mb-8 max-w-2xl">{ordigoz.description}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {ordigoz.features.map((f) => (
            <div key={f.label} className="surface-glass rounded-xl p-5">
              <h4 className="text-sm font-medium text-foreground mb-1">{f.label}</h4>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Business Impact
            </h4>
            <ul className="space-y-2">
              {ordigoz.impact.map((imp, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {imp}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {ordigoz.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
