import styles from "./Hero.module.css";
import SocialMedia from "../socialMedia/SocialMedia";

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
                                    src={`${import.meta.env.BASE_URL}/images/manish-prajapati.jpg`}
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
                            <SocialMedia hAlign="start" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;