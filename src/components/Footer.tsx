import styles from '../styles/footer.module.css'
import facebook from '../assets/fb.svg'
import insta from '../assets/instagram 1.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin 1.svg'

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.col}>
          <h4>Logo</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <p>@lorem</p>
        </div>
        <div className={styles.col}>
          <h4>About us</h4>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Contact Us</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>+908 89097 890</p>
        </div>
        <div className={styles.col}>
          <h4>Follow Us</h4>
          <div className={styles["logo-container"]}>
            <img width='40px' height='' src={facebook} alt="Logo 1" />
            <img src={insta} alt="Logo 2" />
            <img src={linkedin} alt="Logo 3" />
            <img src={twitter} alt="Logo 4" />
          </div>
        </div>
      </footer>
      <hr />
      <div className={styles.copyright}>
        <p>Copyright ® 2021 Lorem All rights Rcerved </p>
      </div>
    </div>
  );
};

export default Footer;
