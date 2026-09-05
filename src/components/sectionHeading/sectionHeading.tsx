import styles from "./SectionHeading.module.css";

const SectionHeading = ({span,h2,className=""}:{span:string,h2:string,className?: string}) => {
    return (
        <div className={`${styles.sectionHeading} ${className}`}>
            <span>{span}</span>
            <h2>{h2}</h2>
            <div className={styles.headingLine}></div>
        </div>
    )
}

export default SectionHeading;