import React, { Component } from 'react';
export function About(){

   return <>
    <section className=" About d-flex justify-content-center align-items-center flex-column my-3 ">
    <div className="container">
    <div className="row">
    <div className='col-lg-12 my-3'> <h2 className="contact-head text-center  text-white">About Component
</h2>
<div className="d-flex justify-content-center align-items-center  ">
    <div className="line-About me-2 "></div>
    <div className="star text-white"><span><i class="fa-solid fa-star"></i></span></div>
    <div className="line-About ms-2 "></div>
</div>
</div  >
<div className="row g-2">
        <div className="col-lg-6 "><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        <div className="col-lg-6"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
</div> 
  </div>
    </div>
    </section>
    </>
}

