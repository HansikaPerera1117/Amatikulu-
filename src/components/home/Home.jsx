import "../home/Home.css"
import lftPlane from '../../assests/Vector1.png'
import lftLine from '../../assests/Vector2.png'
import rgtLine from '../../assests/Vector3.png'
import rgtPlane from '../../assests/Vector4.png'
import { RiHomeLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import Amatikulu from "../../assests/Amatikulu.png"
import EarthEnd from "../../assests/earth-end.png"
import EarthStart from "../../assests/earth-start.png"
import EarthMap from "../../assests/earth-map.png"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


const Home = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    return(
        <>
        <div id="home"  className="row bg-warning g-warning" style={{height:1255}}>

        <div id="homeEarth">
                
                <img
                    id="earthStart"
                    alt="EarthStart img"
                    src={EarthStart}
                />
                 
                 <img
                    id="earthEnd"
                    alt="EarthEnd img"
                    src={EarthEnd}
                />

                <img
                data-aos="fade-up"
                    id="earthMap"
                    alt="EarthMap img"
                    src={EarthMap}
                />

                <div id="h-cnt-box" className="row justify-content-center">
                    <div id="h-cnt-box-Bg" className="rounded bg-white opacity-50" style={{height:217,width:1320}}></div>
                </div>
           </div>

           <div id="h-mainSentRow" className="col-12" style={{height:240,backgroundColor:"#008186"}}>
            <div className="row  mt-3 justify-content-center">
                <h1 data-aos="zoom-in" id="h-mainSent" className="mt-4 fw-bold text-center text-white">Find The Best Place To Stress Release </h1>
            </div>
           </div>

           <div id="h-cnt-row-cntier" className="col-12" style={{backgroundColor:"#008186",height:120}}>
                <div id="h-cnt-row" className="row  justify-content-center " style={{height:150}}>

                    {/* <div  className="col-10 rounded bg-white" style={{height:217,width:1320}}> */}

                        <div id="h-cnt-row" className="row   align-items-end justify-content-center ms-4 me-0 " style={{width:1200}}>
                            <div id="h-contBar" className="col-lg-10 col-md-11 col-sm-11 rounded">
                                <div id="h-Cont" className="row bg-white" style={{height:70 , borderRadius:12}}>
                                    <div className="col-lg-5 col-md-5 col-sm-6 ">
                                        <div className="row mt-2">
                                            <div className="col-2 fs-3 text-secondary">
                                                <RiHomeLine/>
                                            </div>
                                            <div className="col-8 mt-1" style={{fontFamily:'Poppins'}}>
                                                <h6 style={{fontSize:14}}>Accommodation</h6>
                                                <h6 className="fw-bold"  style={{fontSize:16}}>6730 Luna Land North </h6>
                                            </div>
                                            <div className="col-2 fs-3 text-secondary">
                                                <MdKeyboardArrowDown/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-6 border-start">
                                        <div className="row mt-2">
                                            <div className="col-3 fs-3 text-secondary">
                                                <CiCalendarDate/>
                                            </div>
                                            <div className="col-9 mt-2" style={{fontFamily:'Poppins'}}>
                                                <h6 style={{fontSize:14}}>Check-in</h6>
                                                <h6 style={{fontSize:12}} className="fw-bold">19.06.2019</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-6 border-start">
                                        <div className="row mt-2">
                                            <div className="col-3 fs-3 text-secondary">
                                                <CiCalendarDate/>
                                            </div>
                                            <div className="col-9 mt-2" style={{fontFamily:'Poppins'}}>
                                                <h6 style={{fontSize:14}}>Check-Out</h6>
                                                <h6 style={{fontSize:12}}className="fw-bold">24.06.2019</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 border-start ">
                                        <div className="row mt-2">
                                            <div className="col-2 fs-3 text-secondary">
                                                <GoPerson/>
                                            </div>
                                            <div className="col-8 mt-2 " style={{fontFamily:'Poppins'}}>
                                                <h6 style={{fontSize:14}}>Guests</h6>
                                                <h6 style={{fontSize:12}} className="fw-bold">4 adults</h6>
                                            </div>
                                            <div className="col-2 fs-3 text-secondary">
                                                <MdKeyboardArrowDown/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <div className="row justify-content-center">
                                <button id="h-button" type="button" class="btn fw-bold fs-5 text-white" style={{width:175,height:72 ,fontFamily:'Poppins',backgroundColor:'#D37643',borderRadius:12}}>Search</button>
                                </div>
                            </div>
                    </div>
                    {/* </div> */}
                </div>
           </div>

           <div id="amatikulu-row" className="col-12" style={{height:495,backgroundColor:"#008186"}}>
                <img
                id="amatikulu-img"
                alt="Amatikulu img"
                src={Amatikulu}
                style={{
                    height: 235,
                    width: 1480,
                    marginTop:30
                }}
                />
           </div>
           <div className="col-12 bg-white" style={{height:410}}></div>

           <div id="homePlane"  className="">
                    <div data-aos="fade-right" id="h-leftB-plane" className="">
                         <img alt="logo" src={lftPlane} />
                    </div>
                    <div data-aos="fade-right" id="h-leftB-line" className="">
                        <img alt="logo" src={lftLine} style={{height:200}} />
                    </div>

                     <div data-aos="fade-left" id="h-rightB-line" className="">
                    <img alt="logo" src={rgtLine} style={{height:160}} />
                </div>
                <div data-aos="fade-left" id="h-rightB-plane" className="">
                    <img alt="logo" src={rgtPlane}/>
                </div>
           </div>

        
                
           
            </div>
        </>
    );
}

export default Home