import React from "react";

import hamburger from "../images/hamburger/bur-1.jpg";

const GioiThieu = () => {
   return (
      <>
         <div id="breadcrum">
            <div className="container pt-3 ">
               <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                     <li className="breadcrumb-item">
                        <a
                           href="index.html"
                           className="text-decoration-none text-index"
                        >
                           Trang chủ
                        </a>
                     </li>
                     <li className="breadcrumb-item active" aria-current="page">
                        Giới Thiệu
                     </li>
                  </ol>
               </nav>
            </div>
         </div>
         <div className="bg-light">
            <div className="container">
               <div className="">
                  <h4 className="fs-1"> A FEW WORDS ABOUT AS</h4>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                     occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                     occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum.
                  </p>
                  <div className="text-center py-4">
                     <img
                        src={hamburger}
                        className="card-img-top"
                        alt=""
                        width="835"
                        height="418"
                     />
                  </div>
               </div>
            </div>
         </div>
         {/*  */}
         <div className="container">
            <h3 className="ourTeam text-center fs-1  py-5">OUR TEAM</h3>
            <div className="row  justify-content-center">
               <div className="col col-12  col-md-4 pb-4">
                  {/* Team Modern  */}
                  <div className="card ">
                     <img
                        src={hamburger}
                        className=" card-img-top"
                        alt="..."
                        style={{ height: 260 }}
                     />
                     <div className="card-body text-center">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text mb-0">Some quick example</p>
                        <div className=" ">
                           <a href="/#">
                              <i className="bi bi-facebook fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-twitter fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-instagram fs-3 px-1text-warning"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col col-12 col-md-4 pb-4">
                  {/* Team Modern*/}
                  <div className="card">
                     <img
                        src={hamburger}
                        className=" card-img-top"
                        alt="..."
                        style={{ height: 260 }}
                     />
                     <div className="card-body text-center">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text mb-0">Some quick example</p>
                        <div className=" ">
                           <a href="/#">
                              <i className="bi bi-facebook fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-twitter fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-instagram fs-3 px-1text-warning"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col col-12 col-md-4 pb-4">
                  {/* Team Modern*/}
                  <div className="card">
                     <img
                        src={hamburger}
                        className=" card-img-top"
                        alt="..."
                        style={{ height: 260 }}
                     />
                     <div className="card-body text-center">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text mb-0">Some quick example</p>
                        <div className=" ">
                           <a href="/#">
                              <i className="bi bi-facebook fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-twitter fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-instagram fs-3 px-1text-warning"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default GioiThieu;
