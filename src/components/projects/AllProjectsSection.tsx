import styles from "./Projects.module.css";

const AllProjectsSection = () => {
    return (
        <section id="projects" className={`min-vh-100 ${styles.projects}`}>
            <div className="container pt-5">
                <div className={`${styles.sectionHeading} mb-1`}>
                    <span>My Entire Journey</span>
                    <h2>All Projects</h2>
                    <div className={styles.headingLine}></div>
                </div>
                
            </div>
        </section>
    )
}

export default AllProjectsSection;