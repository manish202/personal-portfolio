import styles from "./Projects.module.css";
import ProjectsContainer from "./ProjectsContainer";
import projects from "./projects";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const ProjectsSection = () => {
    const highlightedProjects = projects.filter((item) => item.isHighlighted);
    return (
        <section id="projects" className={`min-vh-100 ${styles.projects}`}>
            <div className="container">
                <div className={styles.sectionHeading}>
                    <span>What I've built</span>
                    <h2>Projects</h2>
                    <div className={styles.headingLine}></div>
                </div>
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