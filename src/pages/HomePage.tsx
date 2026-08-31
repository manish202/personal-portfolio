import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/about/AboutSection";
import SkillsSection from "../components/skills/SkillsSection";
import ProjectsSection from "../components/projects/ProjectsSection";

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </main>
    )
}

export default HomePage;