import {
    FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaJs, FaReact, FaPhp, FaWordpress,
    FaLaravel, FaNodeJs, FaGitAlt, FaGithub, FaServer,
} from "react-icons/fa";
import {
    SiTypescript, SiMysql, SiDrizzle, SiExpress, SiMongodb, SiMongoose, SiNextdotjs, SiJquery,
} from "react-icons/si";
import { PiFileSvg } from "react-icons/pi";
import styles from "./Skills.module.css";

type SkillType = {name:string, icon:any, level?: "Basic" | "Medium" | null}
type SkillCategoryProps = {title:string, skills:SkillType[]}

const frontendSkills: SkillType[] = [
    { name: "HTML 5", icon: <FaHtml5 />, },
    { name: "SVG", icon: <PiFileSvg />, },
    { name: "CSS 3", icon: <FaCss3Alt />, },
    { name: "SASS", icon: <FaSass />, },
    { name: "Bootstrap 5", icon: <FaBootstrap />, },
    { name: "JavaScript", icon: <FaJs />, },
    { name: "jQuery", icon: <SiJquery />, },
    { name: "AJAX", icon: <FaServer />, },
    { name: "ReactJS", icon: <FaReact />, },
    { name: "TypeScript", icon: <SiTypescript />, level: "Basic", },
];

const backendSkills: SkillType[] = [
    { name: "PHP", icon: <FaPhp />, },
    { name: "WordPress", icon: <FaWordpress />, level: "Basic", },
    { name: "Laravel", icon: <FaLaravel />, level: "Medium", },
    { name: "MySQL", icon: <SiMysql />, },
    { name: "Drizzle ORM", icon: <SiDrizzle />, level: "Basic" },
    { name: "REST API", icon: <FaServer />, },
    { name: "Node.js", icon: <FaNodeJs />, },
    { name: "Express.js", icon: <SiExpress />, },
    { name: "MongoDB", icon: <SiMongodb />, },
    { name: "Mongoose ODM", icon: <SiMongoose />, },
    { name: "NextJS", icon: <SiNextdotjs />, level: "Basic", },
];

const tools: SkillType[] = [
    { name: "Git", icon: <FaGitAlt />, },
    { name: "GitHub", icon: <FaGithub />, },
];

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
    return (
        <div className={styles.category}>
            <div className={styles.categoryHeader}>
                <h3>{title}</h3>
                <span>{skills.length} skills</span>
            </div>
            <div className="row g-3">
                {skills.map((skill:SkillType) => (
                    <div className="col-sm-6 col-lg-4" key={skill.name}>
                        <div className={styles.skillCard}>
                            <div className={styles.skillIcon}>{skill.icon}</div>
                            <div className={styles.skillInfo}><h4>{skill.name}</h4></div>
                            {skill.level && <small className={styles.level}>{skill.level}</small>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const SkillsSection = () => {
    return (
        <section id="skills" className={`min-vh-100 ${styles.skills}`}>
            <div className="container">
                <div className={styles.sectionHeading}>
                    <span>My technical expertise</span>
                    <h2>Skills</h2>
                    <div className={styles.headingLine}></div>
                </div>
                <SkillCategory title="Frontend" skills={frontendSkills}/>
                <SkillCategory title="Backend" skills={backendSkills}/>
                <SkillCategory title="Tools" skills={tools}/>
            </div>
        </section>
    );
}

export default SkillsSection;