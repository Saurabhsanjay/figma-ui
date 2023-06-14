
import style from '../../styles/product.module.css'
import product1 from '../../assets/product1.svg'
import product2 from '../../assets/product2.svg'
import product3 from '../../assets/product3.svg'
import product4 from '../../assets/product4.svg'
const Products = () => {
    const products = [
      {
        title: "Web Application",
        description: "Lorem Ipsum is simply",
        image: product1,
        bgcolor: "#EFEAFF",
      },
      {
        title: "SEO",
        description: "Lorem Ipsum is simply",
        image: product2,
        bgcolor: "#ECFFDA",
      },
      {
        title: "AR/VR Solutions",
        description: "Lorem Ipsum is simply",
        image: product3,
        bgcolor: "#DAE6FF",
      },
      {
        title: "Mobile Applications",
        description: "Lorem Ipsum is simply",
        image: product4,
        bgcolor: "#FFE5DA",
      },
    ];
  return (
    <div className={style.main}>
      {products?.map((el,i) => (
        <div key={i} className={style.product}>
          <div style={{background:el.bgcolor}} className={style.imagebox}>
            <img src={el.image} alt="" />
          </div>

          <div>
            <h4 className={style.title}>{el.title}</h4>
            <p className={style.desc}>{el.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products
