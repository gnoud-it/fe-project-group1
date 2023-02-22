import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo_footer from "../images/logo-footer.png";

const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div className="container-fluid bg-index2">
          <div className="container pt-4 text-white-index">
            <div className="row d-block d-md-flex d-lg-flex">
              <div className="col-12 col-lg-3 col-md-6 pb-0 pb-lg-5 pt-4 pt-lg-5 text-center text-lg-start text-md-start">
                <h6 className="pb-3 text-white text-uppercase">
                  Hệ thống cửa hàng
                </h6>
                <ul className="list-unstyled">
                  <li className="text-white">
                    <a>
                      <i className="bi bi-geo-alt-fill" />
                      &nbsp;&nbsp;Hồ Chí Minh:
                    </a>
                  </li>
                  <li>
                    <a>CN1: 777 Lê Lai, Bến Thành, Q1</a>
                  </li>
                  <li>
                    <a>CN2: 448 Phan Huy Ích, P12, Gò Vấp</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3 col-md-6 pb-0 pb-lg-5 pt-4 pt-lg-5 text-center text-lg-start text-md-start">
                <h6 className="pb-3 text-white text-uppercase">
                  Kết nối với chúng tôi
                </h6>
                <ul className="list-unstyled">
                  <li>
                    <NavLink href="#">
                      <i className="bi bi-facebook text-primary" />
                      &nbsp;&nbsp;Facebook
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#">
                      <i className="bi bi-instagram text-danger" />
                      &nbsp;&nbsp;Instagram
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#">
                      <i className="bi bi-youtube text-danger" />
                      &nbsp;&nbsp;Youtube
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3 col-md-6 pb-0 pb-lg-5 pt-4 pt-lg-5 text-center text-lg-start text-md-start">
                <h6 className="pb-3 text-white text-uppercase">
                  Chăm sóc khách hàng
                </h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <i className="bi bi-telephone-fill text-white" />
                      &nbsp;&nbsp;033.9999
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-envelope-fill text-white" />
                      &nbsp;&nbsp;admin@mango.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3 col-md-6 pb-0 pb-lg-5 pt-4 pt-lg-5 text-center text-lg-start text-md-start">
                <h6 className="pb-3 text-white text-uppercase">
                  Đăng ký nhận thông báo
                </h6>
                <p>
                  Chúng tôi sẽ gửi mail cho bạn khi có thông tin mới về sản phẩm
                </p>
                <form className="d-flex pb-3" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Nhập email của bạn..."
                    aria-label="Search"
                  />
                  <button className="btn btn-index" type="submit">
                    Gửi
                  </button>
                </form>
                <div className="text-center">
                  <NavLink to="./TrangChu">
                    <img
                      src={logo_footer}
                      width={250}
                      height={80}
                      alt="logo footer"
                    />
                  </NavLink>
                  <p>Since 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container pb-2 text-white-index">
            <div className="row d-block d-md-flex d-lg-flex">
              <a href="#" id="toTop" style={{ display: "block" }}>
                <span id="toTopHover" style={{ opacity: 1 }} />
              </a>
              <div className="col text-center">
                <p>© 2023 All Right Reserved | Nhóm 1 - SaigonTech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
