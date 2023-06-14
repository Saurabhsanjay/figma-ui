import style from "../../styles/services.module.css";
import website_mockup from "../../assets/website-mockup.svg";
import happy from "../../assets/happy 1.svg";
const Services2 = () => {
  return (
    <div className={style.main}>
      <div className={style.recent_img}>
        <img src={website_mockup} alt="recent_activities" />
      </div>
      <div className={style.child}>
        <div className={style.product}>
          <div style={{ background: "#1090CB" }} className={style.imagebox}>
            <img src={happy} alt="err" />
          </div>

          <div>
            <h4 className={style.title}>Lorem Ipsum is simply dummy text</h4>
            <p className={style.desc}>Lorem Ipsum is simply dummy text</p>
          </div>
        </div>

        <div className={style.heading}>
          <p>
            {" "}
            <span>Lorem Ipsum </span>
            is simply dummy text of the printing.
          </p>
        </div>

        <div className={style.info}>
          <p>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services2;
