import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import logo_nav from "../images/logo-nav.png";
import "../App.css";
const Header = () => {
   return (
      <div>
         <div id="contact">
            <div className="overflow-hidden">
               <div className="bg-index2 container-fluid">
                  <div className="row pt-1">
                     <div className="d-none d-lg-block d-md-block col-12 col-lg-6 col-md-8 mt-1">
                        <nav
                           aria-label="breadcrumb"
                           style={{
                              bsBreadcrumbDivider: "",
                              marginBottom: "-15px",
                           }}
                        >
                           <ol className="breadcrumb">
                              <li className="breadcrumb-item small">
                                 <h6 className="text-white float-start small">
                                    &nbsp;
                                    <a
                                       href="/#"
                                       className="text-decoration-none text-white"
                                    >
                                       Giờ mở cửa: T2-T6: 7:00 AM - 22:30 PM,
                                       T7-CN: 7:30 AM - 23:00 PM
                                    </a>
                                 </h6>
                              </li>
                              <li className="breadcrumb-item small">
                                 <i className="text-white bi bi-telephone-fill float-start small" />
                                 <h6 className="text-white float-start small">
                                    &nbsp;
                                    <a
                                       href="tel:0339999"
                                       className="text-decoration-none text-white"
                                    >
                                       033.9999
                                    </a>
                                 </h6>
                              </li>
                           </ol>
                        </nav>
                     </div>
                     <div className="col-12 col-lg-6 col-md-4 mt-1">
                        <h6 className="text-white float-start small pe-2 float-end">
                           <NavLink
                              to="/dang-ky"
                              className="text-decoration-none text-index px-2 "
                           >
                              Đăng Ký
                           </NavLink>
                           <span className="text-index">/</span>
                           <NavLink
                              to="/dang-nhap"
                              className="text-decoration-none text-index ps-2"
                           >
                              Đăng Nhập
                           </NavLink>
                        </h6>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div id="header" className="bg-light">
            <div className="container-fluid">
               <div className="container ">
                  <div className="row d-md-flex d-lg-flex mb-2">
                     <div className=" col-12 col-lg-4 col-md-5 mt-2 text-lg-start text-center">
                        <NavLink to={"/trang-chu"}>
                           <img src={logo} className="w-50" alt="logo" />
                        </NavLink>
                     </div>
                     <div className="col-8 col-lg-5 col-md-5 mt-4">
                        <div className="input-group">
                           <input
                              className="form-control"
                              type="search"
                              placeholder="Nhập sản phẩm cần tìm..."
                              aria-label="Search"
                           />
                           <button className="btn btn-index" id="basic-addon1">
                              <i className="bi bi-search text-white" />
                           </button>
                        </div>
                     </div>
                     <div className="col-4 col-lg-3 col-md-2 mt-3 mt-lg-2">
                        <button
                           className="btn float-end"
                           data-bs-toggle="modal"
                           data-bs-target="#exampleModal"
                        >
                           <i className="bi bi-basket2-fill fs-2 text-index" />
                           <span className="badge text-bg-secondary rounded-5">
                              +2
                           </span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div id="navigation">
            <div className="col-12 col-lg-12 col-md-12">
               <nav
                  className="navbar navbar-expand-lg navbar bg-index shadow-sm"
                  style={{ letterSpacing: 1 }}
               >
                  <div className="container" style={{ fontSize: "15px" }}>
                     <NavLink className="navbar-brand" to={"/trang-chu"}>
                        <img
                           src={logo_nav}
                           alt="logo nav"
                           width={100}
                           height={40}
                        />
                     </NavLink>
                     <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                     >
                        <span className="navbar-toggler-icon" />
                     </button>
                     <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarNavDropdown"
                     >
                        <ul className="navbar-nav fw-semibold">
                           <li className="nav-item active">
                              <NavLink
                                 className="nav-link  "
                                 aria-current="page"
                                 to={"/trang-chu"}
                              >
                                 Trang chủ
                              </NavLink>
                           </li>
                           <li className="nav-item active">
                              <NavLink className="nav-link" to={"/thuc-don"}>
                                 Thực đơn
                              </NavLink>
                           </li>
                           <li className="nav-item active">
                              <NavLink className="nav-link" to={"/blog"}>
                                 Blog
                              </NavLink>
                           </li>
                           <li className="nav-item active">
                              <NavLink className="nav-link" to={"/gioi-thieu"}>
                                 Giới thiệu
                              </NavLink>
                           </li>
                           <li className="nav-item active">
                              <NavLink className="nav-link" to={"/lien-he"}>
                                 Liên hệ
                              </NavLink>
                           </li>
                        </ul>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
};

export default Header;
