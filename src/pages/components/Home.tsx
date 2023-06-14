import { motion } from "framer-motion";
import style from "../../styles/home.module.css";
import Home from "../../assets/Home.png";

const Services = () => {
  return (
    <div className={style.main}>
      <div className={style.child}>
        <motion.div
          className={style.heading}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Experienced <span> mobile and web </span>
            applications and website builders measuring
          </p>
        </motion.div>

        <motion.div
          className={style.info}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </motion.div>

        <motion.div
          className={style.button}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button>Contact Us</button>
          <button>View More</button>
        </motion.div>
      </div>

      <div className={style.recent_img}>
        <img src={Home} alt="Home" />
      </div>
    </div>
  );
};

export default Services;
