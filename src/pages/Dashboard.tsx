import Heading from "./components/Heading"
import Home from "./components/Home"
import Lables from "./components/Lables"
import Posters from "./components/Posters"
import Products from "./components/Products"
import Services from "./components/Services"
import Services2 from "./components/Services2"
import Services3 from "./components/Services3"
import Subscribe from "./components/Subscribe"


const Dashboard = () => {
  return (
    <div>
        <Home/>
      <Products/>
      <Heading/>
      <Services/>
      <Services2/>
      <Services3/>
      <Posters/>
      <Lables/>
      <Subscribe/>
    </div>
  )
}

export default Dashboard
