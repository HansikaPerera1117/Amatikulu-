import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cardArray ,responsive } from "../../components/destinations/cardArray";
import { Button } from "reactstrap";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import '../destinations/Destinations.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


const Destinations = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    const product = cardArray.map((item) => (
        <div>
            {item.code}
        </div>
      ));

    return(
        <>
        <div id="destinations" data-aos="fade-up" className="row" style={{height:650}}>
            <div className="col-lg-12">
                <div className="row  align-items-end justify-content-center" style={{height:90}}>
                    <div className="col-lg-8 col-md-7 col-sm-12">
                        <h2 className="fw-semibold" style={{fontFamily:'Inter',fontSize:56}}>Find Popular Destination</h2>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-12">
                        <div className="row justify-content-center">
                        <Button color="dark"outline className="rounded-circle fs-4 text-dark arrowBtn" style={{height:64,width:64}}><IoIosArrowBack/></Button>{' '}
                        <Button color="dark"outline className="rounded-circle ms-3 fs-4 text-dark arrowBtn" style={{height:64,width:64}}><IoIosArrowForward/></Button>{' '}
                        </div>
                         </div>
                </div>
            </div>
            <div className="col-lg-12">
            <div className="row align-items-center justify-content-center "style={{height:540}}>
                <div className="col-lg-10 col-md-12 col-sm-12 ">
                    <div id="des-card-row" className="row justify-content-center">
                    <Carousel className="ms-5" showDots={true} responsive={responsive}>
                         {product}
                    </Carousel>
                    </div>
                
                </div>
              
                </div>
            </div>
        </div>
        </>
    );
}
export default Destinations