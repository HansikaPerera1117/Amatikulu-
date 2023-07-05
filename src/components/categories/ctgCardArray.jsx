import { Card, CardBody, CardTitle} from "reactstrap";
import Ctg1 from "../../assests/ctg1.png"
import Ctg2 from "../../assests/ctg2.png"
import Ctg3 from "../../assests/ctg3.png"
import Ctg4 from "../../assests/ctg4.png"
import Ctg5 from "../../assests/ctg5.png"
import Ctg6 from "../../assests/ctg6.png"


export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  export const ctgCardArray = [
        {
            id: 1,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg1}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Beach</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 2,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg2}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Desert</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 3,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg3}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Mountain</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 4,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg4}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Lake</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 5,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg5}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>River</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 6,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg6}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Savanna </CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 7,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg1}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Beach</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 8,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg2}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Desert</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 9,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg3}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Mountain</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 10,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg4}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Lake</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 11,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg5}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>River</CardTitle>
                    </CardBody>
                </Card>
        },
        {
            id: 12,
            code:
                <Card className="ctgCards" color="light" outline>
                    <img alt="image" src={Ctg6}/>
                    <CardBody className="text-center">
                    <CardTitle  style={{fontFamily:'Inter',fontSize:26}}>Savanna </CardTitle>
                    </CardBody>
                </Card>
        },
        
  ]