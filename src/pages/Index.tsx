import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <div className="divider-gradient max-w-5xl mx-auto" />
    <AboutSection />
    <div className="divider-gradient max-w-5xl mx-auto" />
    <SkillsSection />
    <div className="divider-gradient max-w-5xl mx-auto" />
    <ExperienceSection />
    <div className="divider-gradient max-w-5xl mx-auto" />
    <ProjectsSection />
    <div className="divider-gradient max-w-5xl mx-auto" />
    <AchievementsSection />
    <div className="divider-gradient max-w-5xl mx-auto" />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
