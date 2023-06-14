import { motion } from "framer-motion";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/LOGO.svg";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} ${styles.sticky}`}>
      <div className={styles["navbar-left"]}>
        <motion.img
          src={logo}
          alt="Logo"
          className={styles.logo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className={styles["navbar-right"]}>
        <ul className={styles["menu-list"]}>
          <motion.li
            className={styles["menu-item"]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Home
          </motion.li>
          <motion.li
            className={styles["menu-item"]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            About Us
          </motion.li>
          <motion.li
            className={styles["menu-item"]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Services
          </motion.li>
          <motion.li
            className={styles["menu-item"]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Blog
          </motion.li>
        </ul>
        <motion.button
          className={styles["contact-button"]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Contact Us
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
