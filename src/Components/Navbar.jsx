

// import { Link } from "react-router-dom"
// export function Navbar(){

// return <>

// <nav className="navbar navbar-expand-lg  fixed-top ">
//   <div className="container py-2">
//     <Link className="navbar-brand text-light logo active"  to={'/'}>Start Framework</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse " id="navbarNav">
//       <ul className="navbar-nav ms-auto ">
//         <li className="nav-item">
//           <Link className="nav-link active text-light" aria-current="page" to={'About'}>About</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-light" to={"Portfoilo"}>Portofilo</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-light" to={"Contact"}>Contact</Link>
//         </li>
        
//       </ul>
//     </div>
//   </div>
// </nav>


// </>

// }import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container py-2">
          <Link
            className="navbar-brand text-light logo active"
            to="/"
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/portfoilo">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

