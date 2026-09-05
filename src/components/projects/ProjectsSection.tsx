import styles from "./Projects.module.css";
import ProjectsContainer from "./ProjectsContainer";
import projects from "./projects";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../sectionHeading/sectionHeading";

const ProjectsSection = () => {
    const highlightedProjects = projects.filter((item) => item.isHighlighted).sort((a,b) => b.id - a.id);
    return (
        <section id="projects" className={`min-vh-100 ${styles.projects}`}>
            <div className="container">
                <SectionHeading span="What I've built" h2="Projects" />
                <ProjectsContainer filteredProjects={highlightedProjects} />
                <div className={styles.viewMoreWrapper}>
                    <Link to="/all_projects" className={styles.viewMoreButton}>
                        View All {projects.length} Projects <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;