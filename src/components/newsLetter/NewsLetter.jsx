import {Button, FormGroup ,Input ,Label} from 'reactstrap'
import { IoIosPaperPlane } from "react-icons/io";
import Nwsl1 from '../../assests/nwsl1.png'
import Nwsl2 from '../../assests/nwsl2.png'
import Nwsl3 from '../../assests/nwsl3.png'
import '../newsLetter/NewsLetter.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const NewsLetter =()=>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);


    return(
        <>
        <div className="row align-items-center justify-content-center" data-aos="fade-up" style={{height:460}}>
            <div id='Line1Div' className="col-1">
            <img id='nwslLine1'alt="newsLetter bg"src={Nwsl1}/>
            </div>

                <div id='nwslBox' className="row align-items-center justify-content-center " style={{height:348,width:1170,borderRadius:30,backgroundColor:"#008186"}}>
                    <div className="col-12 text-center">
                        <div id='nwslBoxRow' className="row mt-4 align-items-center" style={{height:250}}>
                            <div id='signupBox' className="row mt-5 justify-content-center" style={{height:60}}>
                                <h1 className="fw-bold" style={{fontFamily:'Inter',fontSize:40}}>Sign up to our newsletter</h1>
                            </div>
                            <div className="row justify-content-center">
                                <h1 className="text-white fw-light" style={{width:430,fontFamily:'Inter',fontSize:16}}>Reciev latest news, update, and many other things every week.</h1>
                            </div>
                            <div className="row justify-content-center">
                                <div id='nwsInputRow' className="row bg-white align-items-start justify-content-center" style={{height:58,width:520,borderRadius:10}}>
                                    <div className="col-10">
                                        <Input className='border border-white text-secondary' id="exampleEmail" name="email" placeholder="Enter Your email address" type="email" style={{height:58}}/>
                                    </div>
                                     <div id='sendBtn' className="col-2"><Button className='text-white shadow mt-2' style={{backgroundColor:'#D37643'}}><IoIosPaperPlane/></Button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img id='nwslBg' alt="newsLetter bg"src={Nwsl2}/>

                </div>

            <div  id='Line2Div' className="col-1">
                <img id='nwslLine2'alt="newsLetter bg"src={Nwsl3} />
            </div>   
        </div>
        </>
    );
}

export default NewsLetter