
import style from '../../styles/subscribe.module.css'
const Subscribe = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>
        <h3>
          Lorem Ipsum is simply dummy <br /> text of the printing.{" "}
        </h3>
      </div>

      <div className={style.email_container}>
        <input type="text" placeholder='Enter your email' />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default Subscribe;
