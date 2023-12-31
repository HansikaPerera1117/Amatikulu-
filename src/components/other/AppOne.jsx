// import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product";
import { productData ,responsive } from "../data";

export default function AppOne() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
   
  ));

  return (
    <div className="App">
      <h1>React multi carousel</h1>
      <div className="row bg-warning" style={{height:500}}>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      </div>
      
    </div>
  );
}


