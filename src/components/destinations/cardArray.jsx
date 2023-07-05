import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import Des1 from "../../assests/des1.png"
import Des2 from "../../assests/des2.png"
import Des3 from "../../assests/des3.png"

export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 790, min: 0 },
      items: 1,
    },
    
  };

  export const cardArray = [
        {
            id: 1,
            code:
            <Card className="desCrds" color="light" outline>
                    <img alt="image" src={Des1}/>
                    <CardBody>
                    <CardTitle  className="fw-semibold" style={{fontFamily:'Inter',fontSize:24}}>Mountain Hiking Tour</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{fontFamily:'Inter',fontSize:14}}>Mountain Hiking Tour</CardSubtitle>
                    <div className="row">
                        <div className="col-6">
                        <CardText  className="fw-bold" style={{fontFamily:'Inter',fontSize:24}}>$89<span className="fw-normal text-secondary" style={{fontSize:16}}> /Person</span></CardText>
                        </div>
                        <div className="col-6">
                        <Button className="rounded-pill buttons" style={{backgroundColor:'#008186',fontSize:14,height:37,width:100}} >Book Now</Button>
                        </div>
                    </div>
                    </CardBody>
                </Card>
        },
        {
            id: 2,
            code:
                <Card className="desCrds" color="light" outline>
                    <img alt="image" src={Des2}/>
                    <CardBody>
                    <CardTitle  className="fw-semibold" style={{fontFamily:'Inter',fontSize:24}}>Machu Picchu, Peru</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{fontFamily:'Inter',fontSize:14}}>Machu Picchu, Peru</CardSubtitle>
                    <div className="row">
                        <div className="col-6">
                        <CardText  className="fw-bold" style={{fontFamily:'Inter',fontSize:24}}>$99<span className="fw-normal text-secondary" style={{fontSize:16}}> /Person</span></CardText>
                        </div>
                        <div className="col-6">
                        <Button className="rounded-pill buttons" style={{backgroundColor:'#008186',fontSize:14,height:37,width:100}} >Book Now</Button>
                        </div>
                    </div>
                    </CardBody>
                </Card>
        },
        {
            id: 3,
            code:
                <Card className="desCrds" color="light" outline>
                    <img alt="image" src={Des3}/>
                    <CardBody>
                    <CardTitle  className="fw-semibold" style={{fontFamily:'Inter',fontSize:24}}>The Grand Canyon, Arizona</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{fontFamily:'Inter',fontSize:14}}>Mountain Hiking Tour</CardSubtitle>
                    <div className="row">
                        <div className="col-6">
                        <CardText  className="fw-bold" style={{fontFamily:'Inter',fontSize:24}}>$70<span className="fw-normal text-secondary" style={{fontSize:16}}> /Person</span></CardText>
                        </div>
                        <div className="col-6">
                        <Button className="rounded-pill buttons" style={{backgroundColor:'#008186',fontSize:14,height:37,width:100}} >Book Now</Button>
                        </div>
                    </div>
                    </CardBody>
                </Card>
        },
        {
            id: 4,
            code:
                <Card className="desCrds" color="light" outline>
                    <img alt="image" src={Des1}/>
                    <CardBody>
                    <CardTitle  className="fw-semibold" style={{fontFamily:'Inter',fontSize:24}}>Mountain Hiking Tour</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{fontFamily:'Inter',fontSize:14}}>Mountain Hiking Tour</CardSubtitle>
                    <div className="row">
                        <div className="col-6">
                        <CardText  className="fw-bold" style={{fontFamily:'Inter',fontSize:24}}>$89<span className="fw-normal text-secondary" style={{fontSize:16}}> /Person</span></CardText>
                        </div>
                        <div className="col-6">
                        <Button className="rounded-pill buttons" style={{backgroundColor:'#008186',fontSize:14,height:37,width:100}} >Book Now</Button>
                        </div>
                    </div>
                    </CardBody>
                </Card>
        },
        {
            id: 5,
            code:
                <Card  className="desCrds" color="light" outline>
                    <img alt="image" src={Des2}/>
                    <CardBody>
                    <CardTitle  className="fw-semibold" style={{fontFamily:'Inter',fontSize:24}}>Machu Picchu, Peru</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{fontFamily:'Inter',fontSize:14}}>Machu Picchu, Peru</CardSubtitle>
                    <div className="row">
                        <div className="col-6">
                        <CardText  className="fw-bold" style={{fontFamily:'Inter',fontSize:24}}>$99<span className="fw-normal text-secondary" style={{fontSize:16}}> /Person</span></CardText>
                        </div>
                        <div className="col-6">
                        <Button className="rounded-pill buttons" style={{backgroundColor:'#008186',fontSize:14,height:37,width:100}} >Book Now</Button>
                        </div>
                    </div>
                    </CardBody>
                </Card>
        },
        {
            id: 6,
            code:
                <Card className="desCrds" color="light" outline>
                    <img alt="image" src={Des3}/>
                    <CardBody>
                    <CardTitle  className="fw-semibold" style={{fontFamily:'Inter',fontSize:24}}>The Grand Canyon, Arizona</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{fontFamily:'Inter',fontSize:14}}>Mountain Hiking Tour</CardSubtitle>
                    <div className="row">
                        <div className="col-6">
                        <CardText  className="fw-bold" style={{fontFamily:'Inter',fontSize:24}}>$70<span className="fw-normal text-secondary" style={{fontSize:16}}> /Person</span></CardText>
                        </div>
                        <div className="col-6">
                        <Button className="rounded-pill buttons" style={{backgroundColor:'#008186',fontSize:14,height:37,width:100}} >Book Now</Button>
                        </div>
                    </div>
                    </CardBody>
                </Card>
        },
  ]