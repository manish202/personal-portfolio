import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";

const menuItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string|null>(null);
    const location = useLocation();
    const isNavigating = useRef(false);
    const navTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeMenu = () => setIsOpen(false);
    useEffect(() => {
        const matchedSection = menuItems.find((item) => item.href === location.hash);
        if(matchedSection){
            const section = document.getElementById(matchedSection.href.replace("#",""));
            if(!section) return;
            section.scrollIntoView({ behavior: "smooth", block: "start", });
            setActiveSection(location.hash);
            isNavigating.current = true;
            if(navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
            navTimeoutRef.current = setTimeout(() => {
                isNavigating.current = false;
            }, 800);
        }else{
            if(location.pathname === "/") setActiveSection("#home");
        }
        return () => {
            if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
        }
    },[location.hash]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (isNavigating.current) return;
            // multiple section ek sath ui mai aa sakte hai to random order mil sakta hai.
            // const visibleSection = entries.find((entry) => entry.isIntersecting);
            // avoide random order by picking last section.
            const visibleSection = entries.filter((entry) => entry.isIntersecting).pop();
            if(visibleSection){
                const id = visibleSection.target.id;
                setActiveSection(`#${id}`);
            }
        },{
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0
        });
        const sections = menuItems.map((item) => document.querySelector(item.href))
        .filter(sec => sec !== null);
        sections.forEach(section => observer.observe(section));
        return () => {
            observer.disconnect();
        }
    },[]);
    return (
        <header className={styles.navbarWrapper}>
            <nav className={`container ${styles.navbar}`}>
                <Link to="/#home" className={styles.logo} onClick={closeMenu}>Manish Prajapati</Link>
                <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
                    {menuItems.map((item) => (
                        <Link key={item.href} to={`/${item.href}`} onClick={closeMenu}
                            className={`${styles.navLink} ${item.href === activeSection ? styles.active : ""}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={isOpen}
                    >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>
        </header>
    )
}

export default Navbar;