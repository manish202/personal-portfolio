import React from "react";
import { type Project } from "./constantsAndTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Projects.module.css";
import { IoClose } from "react-icons/io5";
import SourceCodeAndPreviewBtn from "./SourceCodeAndPreviewBtn";

const ProjectPopupModal = ({project,onClose}:{project:Project,onClose: () => void}) => {
    const onMouseDown = (e:React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    }
    return (
        <div className={styles.modalOverlay} onMouseDown={onMouseDown}>
            <div className={styles.modalCard}>
                <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close project details">
                    <IoClose />
                </button>
                <div className={styles.modalHeader}>
                    <span>Project Details</span>
                    <h2>{project.title}</h2>
                </div>
                {project.images.length > 0 && (
                    <div className={styles.sliderWrapper}>
                        <Swiper
                            modules={[Navigation,Pagination,Keyboard,]}
                            navigation={project.images.length > 1}
                            pagination={{clickable: true,}}
                            keyboard={{enabled: true,}}
                            spaceBetween={20}
                            slidesPerView={1}
                            className={styles.swiper}
                        >
                            {project.images.map((image, index) => (
                                <SwiperSlide key={image}>
                                    <img
                                        src={`/images/projects/${image}`}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        className={styles.sliderImage}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
                <div className={styles.modalSection}>
                    <h3>Description</h3>
                    <ul className={styles.descriptionList}>
                        {project.description.map((desc, index) => <li key={index}>{desc}</li>)}
                    </ul>
                </div>
                <div className={styles.modalSection}>
                    <h3>Development Period</h3>
                    <div className={styles.dateBox}>
                        <div>
                            <span>Started</span>
                            <strong>{project.approxStartDate}</strong>
                        </div>
                        <span className={styles.dateArrow}>→</span>
                        <div>
                            <span>Completed</span>
                            <strong>{project.approxEndDate}</strong>
                        </div>
                    </div>
                </div>
                <div className={styles.modalSection}>
                    <h3>Technologies & Packages</h3>
                    <div className={styles.techList}>
                        {project.techAndPackages.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                </div>
                <div className={styles.modalActions}>
                    <SourceCodeAndPreviewBtn project={project} />
                </div>
            </div>
        </div>
    )
}

export default ProjectPopupModal;