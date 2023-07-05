import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ctgCardArray ,responsive } from "../../components/categories/ctgCardArray";
import { Button } from "reactstrap";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import '../categories/Categories.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const Categories =()=>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    const product = ctgCardArray.map((item) => (
        <div className="ms-2">
            {item.code}
        </div>
      ));

    return(
        <>
        <div id="categories"  data-aos="fade-left" className="row" style={{height:650}}>
        <div className="col-12 ">
                <div className="row  align-items-end justify-content-center" style={{height:90}}>
                    <div className="col-lg-8 col-md-7 col-sm-12">
                        <h2 className="fw-semibold" style={{fontFamily:'Inter',fontSize:56}}>Categories</h2>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <p style={{fontFamily:'Inter',fontSize:16,color:'#5B5F62'}}>Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-12">
                        <div className="row justify-content-center">
                        <Button color="dark"outline className="rounded-circle fs-4 text-dark arrowBtn" style={{height:64,width:64}}><IoIosArrowBack/></Button>{' '}
                        <Button color="dark"outline className="rounded-circle ms-3 fs-4 text-dark arrowBtn" style={{height:64,width:64}}><IoIosArrowForward/></Button>{' '}
                        </div>
                         </div>
                </div>
            </div>
            <div className="col-12">
            <div id="ctgCrdRow" className="row align-items-center justify-content-center "style={{height:380}}>
                <div id="ctg-imgContainter" className="col-11">
                <Carousel  className="ms-4" showDots={true} responsive={responsive}>
                    {product}
                </Carousel>
                </div>
              
                </div>
            </div>
        </div>
        </>
    );
}

export default Categories