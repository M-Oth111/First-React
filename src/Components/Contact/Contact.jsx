import { Star } from "../Attr/Star"
 export function Contact(){



return <>
<section className="Contact d-flex justify-content-center align-items-center flex-column ">

   <div> <h2 className="contact-head text-center ">Conatct section</h2>
<div><Star/></div>

</div>
 <form action className="container w-50 my-5"><div className="mb-4">
    <input type="text" className="form-control py-3" id="exampleFormControlInput1" placeholder="userName" />
  </div>
  <div className="mb-4">
    <input type="number" className="form-control py-3" id="exampleFormControlInput1" placeholder="userAge" />
  </div>
  <div className="mb-4">
    <input type="email" className="form-control py-3" id="exampleFormControlInput1" placeholder="userEmail" />
  </div>
  <div className="mb-4">
    <input type="password" className="form-control py-3" id="exampleFormControlInput1" placeholder="userPassword" />
  </div>
  <button className=" btn  form-btn text-white"> Send massage</button>
  </form>

</section>
</>


}