import { type Project } from "./constantsAndTypes";
import styles from "./Projects.module.css";
import SourceCodeAndPreviewBtn from "./SourceCodeAndPreviewBtn";

const ProjectCard = ({project,onViewMore}:{project:Project,onViewMore: () => void}) => {
    return (
        <article className={styles.projectCard}>
            <div className={styles.thumbnail}>
                <img src={`${import.meta.env.BASE_URL}/images/projects/${project.images[0]}`} alt={project.title} loading="lazy"/>
            </div>
            <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <div className={styles.date}>
                    <span>{project.approxStartDate}</span>
                    <span>→</span>
                    <span>{project.approxEndDate}</span>
                </div>
                <div className={styles.cardActions}>
                    <SourceCodeAndPreviewBtn project={project} />
                    <button type="button" className={styles.detailsButton} onClick={onViewMore}>
                        View More
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;