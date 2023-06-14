import style from '../../styles/label.module.css'
import beneoshop from '../../assets/beneoshop.svg'
import caspio from "../../assets/caspio.svg";
import HyperGrid from "../../assets/HyperGrid.svg";
import leotrippi from "../../assets/leotrippi.svg";
const Lables = () => {
  return (
    <div>
      <div className={style.heading}>
        <h2> You will be in good Company</h2>
      </div>

      <div className={style.images}>
        <img src={beneoshop} alt="beneoshop" />
        <img src={caspio} alt="caspio" />
        <img src={HyperGrid} alt="HyperGrid" />
        <img src={leotrippi} alt="leotrippi" />
      </div>
    </div>
  );
}

export default Lables
