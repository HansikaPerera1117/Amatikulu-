import Logo from "../../assests/Logo-B.png"
import{BiLogoFacebook,BiLogoInstagramAlt,BiLogoTwitter} from 'react-icons/bi'
import{Button}from 'reactstrap'
import "../footer/Footer.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const Footer =()=>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    return(
        <>
        <div id="footer" data-aos="fade-up" className="row align-items-center justify-content-center" style={{height:340}}>
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div id="fLogoRow" className="row ms-4">
                    <div className="col-lg-12 col-md-12 col-sm-5">
                        <img alt="logo"src={Logo}style={{height: 37,width: 225}}/>
                        <h5 className="mt-3" style={{fontFamily:'Inter',fontSize:16,color:'#5B5F62',width:140}}>Enjoy the touring with Amatikulu</h5>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-5 mt-4">
                        <div className="row">
                            <Button id="fButton"  className="border-danger  rounded-circle btn-light fs-5  me-3" style={{height:44,width:44,color:'#F66F4D'}}><BiLogoFacebook/></Button>{' '}
                            <Button  className="border-secondary iButton rounded-circle btn-light fs-5 text-secondary  me-3" style={{height:44,width:44}}><BiLogoInstagramAlt/></Button>{' '}
                            <Button  className="border-secondary iButton rounded-circle btn-light fs-5 text-secondary me-3" style={{height:44,width:44}}><BiLogoTwitter/></Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="row ms-5" style={{fontFamily:'Inter',}}>
                        <h4 className="fw-semibold mb-4" style={{fontSize:18}}>Resources</h4>
                        <h5 className="mb-3 footer-text" style={{fontSize:14,color:'#676A6C'}}>Download </h5>
                        <h5 className="mb-3 footer-text" style={{fontSize:14,color:'#676A6C'}}>Help Center</h5>
                        <h5 className="mb-3 footer-text" style={{fontSize:14,color:'#676A6C'}}>Guide Book</h5>
                        <h5 className="mb-3 footer-text" style={{fontSize:14,color:'#676A6C'}}>App Directory</h5>
                    </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="row ms-5" style={{fontFamily:'Inter',}}>
                        <h4 className="fw-semibold mb-4" style={{fontSize:18}}>Travellers</h4>
                        <h5 className="mb-3 footer-text">Why Travellers</h5>
                        <h5 className="mb-3 footer-text">Enterprice</h5>
                        <h5 className="mb-3 footer-text">Customer Stories</h5>
                        <h5 className="mb-3 footer-text">Instagram post</h5>
                    </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="row ms-5" style={{fontFamily:'Inter',}}>
                        <h4 className="fw-semibold mb-4" style={{fontSize:18}}>Company</h4>
                        <h5 className="mb-3 footer-text">Travelling</h5>
                        <h5 className="mb-3 footer-text">About Locato</h5>
                        <h5 className="mb-3 footer-text">Success</h5>
                        <h5 className="mb-3 footer-text">Information</h5>
                    </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="row ms-5" style={{fontFamily:'Inter',}}>
                        <h4 className="fw-semibold mb-4" style={{fontSize:18}}>Get App</h4>
                        <h5 className="mb-3 footer-text">App Store</h5>
                        <h5 className="mb-3 footer-text">Google Play Store</h5>
                    </div>
            </div>
        </div>
        </>
    );
}
export default Footer