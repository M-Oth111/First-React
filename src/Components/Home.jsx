import React from "react";
import Logo from "../assets/imgs/avataaars.svg";
import { Star } from './Attr/Star';
export function Home() {
    return (
        <>
            <div className="Home text-centerv d-flex justify-content-center align-items-center flex-column" >
              <div><img className="avatar w-100" src={Logo} alt="Logo" /></div>  
          <h2 className="contact-head text-white">Start Framework</h2>
          <div className="d-flex justify-content-center align-items-center  ">
    <div className="line-About me-2 "></div>
    <div className="star text-white"><span><i class="fa-solid fa-star"></i></span></div>
    <div className="line-About ms-2 "></div>
</div>
<div className=" my-2"><p>Graphic Artist - Web Designer - Illustrator
</p></div>
          
          
            </div>
        </>
    );
}
