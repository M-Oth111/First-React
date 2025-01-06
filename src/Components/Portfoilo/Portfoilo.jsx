
import React, { Component } from 'react';
import { Star } from '../Attr/Star';
import sora1 from "../../assets/imgs/poert1.png"
import sora2 from "../../assets/imgs/port2.png"
import sora3 from "../../assets/imgs/port3.png"
export function Portfoilo(){


    return<>
    <section className="Port d-flex justify-content-center align-items-center flex-column my-5">
   
   
    <div> <h2 className="contact-head text-center  ">portfolio component</h2>
<div><Star/></div>
</div>
<div className='container  '>
    <div className="row g-5 my-5">
        <div className="col-lg-4">
            <div className='image-container'> <img className='w-100 sora' src={sora1} alt="" />
            <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div></div>
        </div>
        <div className="col-lg-4">
            <div className='image-container'> <img className='w-100 sora' src={sora2} alt="" />
            <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div></div>
        </div>
        <div className="col-lg-4">
            <div className='image-container'> <img className='w-100 sora' src={sora3} alt="" />
            <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div></div>
        </div>
        
    </div>
    <div className="row g-5 ">
    <div className="col-lg-4">
            <div className='image-container'> <img className='w-100 sora' src={sora1} alt="" />
            <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div></div>
        </div>
        <div className="col-lg-4">
            <div className='image-container'> <img className='w-100 sora' src={sora2} alt="" />
            <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div></div>
        </div>
        <div className="col-lg-4">
            <div className='image-container'> <img className='w-100 sora' src={sora3} alt="" />
            <div className="overlay">
                    <span><i className="fa-solid fa-plus fa-2x"></i></span>
                    </div></div>
        </div>
    </div>
</div>

    </section>
    
    
    </>
}