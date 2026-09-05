import { FaGithub, FaCodepen, FaLinkedinIn, FaEnvelope, } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import styles from "./SocialMedia.module.css";

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

const SocialMedia = ({hAlign}:{hAlign:string}) => {
    return (
        <div className={`${styles.socialLinks} ${hAlign === "center" && styles.centerLinks}`}>
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
    )
}

export default SocialMedia;