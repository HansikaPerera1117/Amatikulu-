import Off1 from '../../assests/off1.png'
import Off2 from '../../assests/off2.png'
import Off3 from '../../assests/off3.png'
import {Button} from "reactstrap";
import "../offers/Offers.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


const Offers = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    return(
        <>
        <div id='Offers' data-aos="fade-right" className="row justify-content-center" style={{height:730}}>
            <div className="col-lg-6 col-md-7 col-sm-12">
                <div id='offImage-row' className="row align-items-center justify-content-center" style={{height:670}}>
                    <div className="col-lg-5 col-md-12 col-sm-5">
                        <div className="row ">
                        <div  className="col-lg-12 col-md-6 col-sm-12 offSImg"><img className='o-img-sm' alt="image" src={Off1}/></div>
                        <div id='s-img-2'  className="col-lg-12 col-md-6 mt-5 offSImg"><img className='o-img-sm' alt="image" src={Off2}/></div>
                        </div>
                    </div>
                    <div id='offLImg'  className="col-lg-6 col-md-12 col-sm-6"><img id='o-img-lg' alt="image" src={Off3}/></div>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-10">
                <div id='off-cnt' className="row align-items-center"style={{height:540}} >
                    <div id='off-cnt-sen' className="row ms-4" style={{height:400}}>
                        <div className="col-10">
                            <div className='mb-3' style={{height:8,width:67,backgroundColor:'#D37643',borderRadius:4}}></div>
                        <h2 className="fw-semibold" style={{fontFamily:'Inter',fontSize:56}}>Offers In This Season</h2>
                        </div>
                        <div className="col-12">
                            <div className="row justify-content-center mt-5">
                                <div className="col-10">
                                    <p style={{fontFamily:'Inter',fontSize:18,color:'#5B5F62'}}>Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.</p>
                                    <Button className="rounded-pill mt-3 buttons" style={{backgroundColor:'#008186',fontSize:14,height:37,width:100}} >See More</Button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Offers