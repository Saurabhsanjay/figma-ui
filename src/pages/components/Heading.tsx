import style from '../../styles/Heading.module.css'

const Heading = () => {
  return (
    <div className={style.main}>
      <h1 className={style.title}>
        Lorem Ipsum is simply dummy text of the printing.
      </h1>
      <p className={style.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <p className={style.desc}>Lorem Ipsum has been the industry's</p>
     
    </div>
  );
}

export default Heading
