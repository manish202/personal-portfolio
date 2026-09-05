import React from "react";
import styles from "./Contact.module.css";
import SocialMedia from "../socialMedia/SocialMedia";

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className={`min-vh-100 ${styles.contact}`}>
            <div className="container h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-8 text-center">
                        <div className={styles.sectionHeading}>
                            <span>Let's Connect</span>
                            <h2>Contact Me</h2>
                            <div className={styles.headingLine}></div>
                        </div>
                        <p className={styles.description}>
                            Have a project in mind or just want to say hello ?
                            Feel free to connect with me through any of the
                            platforms below.
                        </p>
                        <SocialMedia hAlign="center" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;