import styles from "./Projects.module.css";

const ProjectsSection = () => {
    return (
        <section id="projects" className={`min-vh-100 ${styles.projects}`}>
            <div className="container">
                <div className={styles.sectionHeading}>
                    <span>What I've built</span>
                    <h2>Projects</h2>
                    <div className={styles.headingLine}></div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;