import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import Des1 from "../assests/des1.png"

export default function Product(props) {
  return (
    <>

    {/* <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div> */}


        <Card style={{width:368,height:440}}>
         <img alt="image" src={props.url}/>
         <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
           <CardSubtitle className="mb-2 text-muted" tag="h6">{props.description}</CardSubtitle>
           <CardText>{props.price}/Person</CardText>
           <Button>Book Now</Button>
         </CardBody>
       </Card>

</>
  );
}
