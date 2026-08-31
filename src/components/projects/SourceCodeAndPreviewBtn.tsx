import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import { type Project } from "./constantsAndTypes";
import styles from "./Projects.module.css";

const SourceCodeAndPreviewBtn = ({project}:{project:Project}) => {
    return (
        <>
            <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceButton}
            >
                {project.isPrivateRepo ? (<><FaLock /> Private Repo</>) : (<><FaGithub /> Source Code</>)}
            </a>
            {project.livePreview && (
                <a
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveButton}
                >
                    <FaExternalLinkAlt /> Live Preview
                </a>
            )}
        </>
    )
}

export default SourceCodeAndPreviewBtn;