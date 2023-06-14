
import style from '../../styles/posters.module.css'
const Posters = () => {
  return (
    <div className={style.main}>
      <div className={style.child}>
        <div className={style.title}>
          <h3>
            Lorem Ipsum is simply <br /> dummy text.
          </h3>
        </div>
        <div className={style.description}>
          <p>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </div>
        <div className={style.button}>
          <button>View More</button>
        </div>
      </div>



      <div className={style.child2}>
        <div className={style.title}>
          <h3>
            Lorem Ipsum is simply <br /> dummy text.
          </h3>
        </div>
        <div className={style.description}>
          <p>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </div>
        <div className={style.button}>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default Posters
