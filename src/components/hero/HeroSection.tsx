import { FaGithub, FaCodepen, FaLinkedinIn, FaEnvelope, } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import styles from "./Hero.module.css";

const socialLinks = [
    {
        icon: <FaGithub />,
        href: "https://github.com/manish202",
        label: "GitHub",
    },
    {
        icon: <FaCodepen />,
        href: "https://codepen.io/manish202",
        label: "CodePen",
    },
    {
        icon: <FaLinkedinIn />,
        href: "https://in.linkedin.com/in/manish-prajapati-640b061b6",
        label: "LinkedIn",
    },
    {
        icon: <FaEnvelope />,
        href: "mailto:mp94760@gmail.com",
        label: "Email",
    },
    {
        icon: <SiUpwork />,
        href: "https://www.upwork.com/freelancers/~017561d1f9ce0508fc",
        label: "Upwork",
    },
];

const HeroSection = () => {
    return (
        <section id="home" className={`min-vh-100 ${styles.hero}`}>
            <div className="container pt-5">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.imageWrapper}>
                            <span className={`${styles.ripple} ${styles.ripple1}`} />
                            <span className={`${styles.ripple} ${styles.ripple2}`} />
                            <span className={`${styles.ripple} ${styles.ripple3}`} />
                            <div className={styles.imageCircle}>
                                <img
                                    src="/images/manish-prajapati.jpg"
                                    alt="Manish Prajapati"
                                    className={styles.profileImage}
                                    sizes="(max-width: 768px) 280px, 420px"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.content}>
                            <p className={styles.greeting}>Hello!</p>
                            <h1>
                                I'm <span>Manish Prajapati,</span>
                                <br />
                                A Professional <strong>Full-Stack Developer</strong>
                            </h1>
                            <p className={styles.description}>
                                I build responsive, scalable and user-friendly web
                                applications using modern technologies.
                            </p>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={styles.socialIcon}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;