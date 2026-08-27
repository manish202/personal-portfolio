import { FaCode, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa";
import styles from "./About.module.css";

const highlights = [
    {
        icon: <FaLaptopCode />,
        title: "Frontend Development",
        text: "Building responsive and interactive interfaces with ReactJS, JavaScript, HTML, CSS and Bootstrap.",
    },
    {
        icon: <FaServer />,
        title: "Backend Development",
        text: "Developing REST APIs and server-side applications using Node.js, Express.js, PHP and Laravel.",
    },
    {
        icon: <FaDatabase />,
        title: "Database",
        text: "Working with both SQL and NoSQL databases including MySQL and MongoDB.",
    },
    {
        icon: <FaCode />,
        title: "Modern Web",
        text: "Focused on writing clean, reusable and maintainable code using modern web development practices.",
    },
];

const AboutSection = () => {
    return (
        <section id="about" className={`min-vh-100 ${styles.about}`}>
            <div className="container">
                <div className={styles.sectionHeading}>
                    <span>Get to know me</span>
                    <h2>About Me</h2>
                    <div className={styles.headingLine}></div>
                </div>
                <div className="row align-items-center g-5">
                    <div className="col-lg-5">
                        <div className={styles.introduction}>
                            <h3>Building ideas into <span> modern web applications.</span></h3>
                            <p>
                                I'm Manish Prajapati, a full-stack developer passionate about
                                creating responsive, scalable and user-friendly web
                                applications.
                            </p>
                            <p>
                                I enjoy working across both frontend and backend development,
                                turning ideas and requirements into functional digital
                                experiences.
                            </p>
                            <p>
                                My primary focus is ReactJS for frontend development, while I
                                also work with Node.js, Express.js, PHP, Laravel and databases
                                to build complete web applications.
                            </p>
                            <div className={styles.stats}>
                                <div>
                                    <strong>Frontend</strong>
                                    <span>ReactJS</span>
                                </div>
                                <div>
                                    <strong>Backend</strong>
                                    <span>Node.js / PHP</span>
                                </div>
                                <div>
                                    <strong>Database</strong>
                                    <span>MySQL / MongoDB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {highlights.map((item) => (
                                <div className="col-md-6" key={item.title}>
                                    <div className={styles.card}>
                                        <div className={styles.icon}>{item.icon}</div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;