import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Github, Linkedin, Phone, Code, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's connect."
          description="Open to opportunities, collaborations, and interesting conversations."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Links */}
          <div className="space-y-4">
            <a
              href="tel:+918077084214"
              className="flex items-center gap-4 surface-glass rounded-2xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p className="text-xs text-muted-foreground">+91-8077084214</p>
              </div>
            </a>
            <a
              href="mailto:vidhirawat9023@gmail.com"
              className="flex items-center gap-4 surface-glass rounded-2xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">vidhirawat9023@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/vaishnavi-rawat-7a985a257"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 surface-glass rounded-2xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Linkedin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-xs text-muted-foreground">vaishnavi-rawat</p>
              </div>
            </a>
            <a
              href="https://github.com/ividhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 surface-glass rounded-2xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Github size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="text-xs text-muted-foreground">github.com/ividhi</p>
              </div>
            </a>
            <a
              href="https://leetcode.com/u/Vaishnavirawat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 surface-glass rounded-2xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">LeetCode</p>
                <p className="text-xs text-muted-foreground">leetcode.com/u/Vaishnavirawat</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="surface-glass rounded-2xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-secondary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-secondary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-secondary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary/50 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
