import React from "react";
import { NavLink } from "react-router-dom";

import banner1 from "../images/slider/banner1.jpg";
import banner2 from "../images/slider/banner2.jpg";
import banner3 from "../images/slider/banner3.jpg";

import new_pro1 from "../images/new-product/bur-new-1.jpg";
import new_pro2 from "../images/new-product/bur-new-2.jpg";
import new_pro3 from "../images/new-product/chic-new-1.jpg";
import new_pro4 from "../images/new-product/chic-new-2.jpg";
import sell_pro1 from "../images/combo-seller/combo-chic-1.jpg";
import sell_pro2 from "../images/combo-seller/combo-chic-2.jpg";
import sell_pro3 from "../images/combo-seller/combo-bur-2.jpg";
import sell_pro4 from "../images/combo-seller/combo-bur-1.jpg";

const TrangChu = () => {
  return (
    <div>
      <div id="banner">
        <div
          id="carouselExampleCaptions"
          className="carousel carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img src={banner1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Chào mừng đến với Mango Food</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src={banner2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Chào mừng đến với Mango Food</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={banner3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Chào mừng đến với Mango Food</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div id="content1">
        <div className="bg-index p-3 text-center mb-5 shadow">
          <h2 className="text-white">Món mới</h2>
        </div>
        <div className="container pt-0 pb-4">
          <div className="row text-center">
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <NavLink
                  to={"/chi-tiet-san-pham"}
                  className="text-decoration-none"
                >
                  <img src={new_pro1} className="card-img-top" alt="..." />
                </NavLink>
                <div className="card-body border-bottom border-3 rounded border-index">
                  <NavLink
                    to={"/chi-tiet-san-pham"}
                    className="text-decoration-none"
                  >
                    <h5 className="card-title text-index">
                      COMBO Burger Cá Hồi Xông Khói (2 miếng)
                    </h5>
                    <h6 className="card-title text-muted small pt-2">
                      Buger 2 Miếng cá hồi xông khói phô mai
                    </h6>
                    <h6 className="card-title text-danger fw-bold pt-2 pb-3 fs-5">
                      99,000 VND
                    </h6>
                  </NavLink>
                  <div className="text-center">
                    <a className="btn btn-index mb-2" href="/#">
                      <i className="bi bi-basket2" />
                      &nbsp;Thêm vào giỏ
                    </a>
                  </div>
                  <div className="text-center">
                    <NavLink className="btn btn-warning" to={"/chi-tiet-san-pham"}>
                      <i className="bi bi-info-circle" />
                      &nbsp;Chi tiết
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={new_pro2} className="card-img-top" alt="..." />
                <div className="card-body border-bottom border-3 rounded border-index">
                  <h5 className="card-title text-index">
                    COMBO Burger Cá Hồi Xông Khói
                  </h5>
                  <h6 className="card-title text-muted small pt-2">
                    1 Burger Cá Hồi Xông Khói + 1 Khoai Tây Chiên (M) + 1 Nước
                    ngọt
                  </h6>
                  <h6 className="card-title text-danger fw-bold pt-2 pb-3 fs-5">
                    79,000 VND
                  </h6>
                  <div className="text-center">
                    <a className="btn btn-index mb-2" href="/#">
                      <i className="bi bi-basket2" />
                      &nbsp;Thêm vào giỏ
                    </a>
                  </div>
                  <div className="text-center">
                    <NavLink className="btn btn-warning" to={"/ChiTietSanPham"}>
                      <i className="bi bi-info-circle" />
                      &nbsp;Chi tiết
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={new_pro3} className="card-img-top" alt="..." />
                <div className="card-body border-bottom border-3 rounded border-index">
                  <h5 className="card-title text-index">
                    COMBO Gà Rán Giòn Cay (2 Miếng)
                  </h5>
                  <h6 className="card-title text-muted small pt-2">
                    1 Nước (M) + 1 Khoai Tây (M) + 2 Miếng gà rán giòn cay
                  </h6>
                  <h6 className="card-title text-danger fw-bold pt-2 pb-3 fs-5">
                    90,000 VND
                  </h6>
                  <div className="text-center">
                    <a className="btn btn-index mb-2" href="/#">
                      <i className="bi bi-basket2" />
                      &nbsp;Thêm vào giỏ
                    </a>
                  </div>
                  <div className="text-center">
                    <NavLink className="btn btn-warning" to={"/ChiTietSanPham"}>
                      <i className="bi bi-info-circle" />
                      &nbsp;Chi tiết
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={new_pro4} className="card-img-top" alt="..." />
                <div className="card-body border-bottom border-3 rounded border-index">
                  <h5 className="card-title text-index">
                    COMBO Gà BBQ (2 Miếng)
                  </h5>
                  <h6 className="card-title text-muted small pt-2">
                    1 Nước (M) + 1 Khoai Tây Chiên (M) + 3 Miếng gà rán giòn cay
                  </h6>
                  <h6 className="card-title text-danger fw-bold pt-2 pb-3 fs-5">
                    119,000 VND
                  </h6>
                  <div className="text-center">
                    <a className="btn btn-index mb-2" href="/#">
                      <i className="bi bi-basket2" />
                      &nbsp;Thêm vào giỏ
                    </a>
                  </div>
                  <div className="text-center">
                    <NavLink className="btn btn-warning" to={"/ChiTietSanPham"}>
                      <i className="bi bi-info-circle" />
                      &nbsp;Chi tiết
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content2">
        <div className="bg-index p-3 text-center mb-5 shadow">
          <h2 className="text-white">Combo tiết kiệm</h2>
        </div>
        <div className="container pt-0 pb-4">
          <div className="row text-center">
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={sell_pro1} className="card-img-top" alt="..." />
                <div className="card-body border-bottom border-3 rounded border-index">
                  <h5 className="card-title text-index">
                    COMBO Gà Rán Giòn Cay (2 Miếng)
                  </h5>
                  <h6 className="card-title text-muted small pt-2">
                    1 Nước (M) + 1 Khoai Tây (M) + 2 Miếng gà rán giòn cay
                  </h6>
                  <h6 className="card-title text-danger fw-bold pt-2 pb-3 fs-5">
                    90,000 VND
                  </h6>
                  <div className="text-center">
                    <a className="btn btn-index mb-2" href="/#">
                      <i className="bi bi-basket2" />
                      &nbsp;Thêm vào giỏ
                    </a>
                  </div>
                  <div className="text-center">
                    <NavLink className="btn btn-warning" to={"/ChiTietSanPham"}>
                      <i className="bi bi-info-circle" />
                      &nbsp;Chi tiết
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={sell_pro2} className="card-img-top" alt="..." />
                <div className="card-body border-bottom border-3 rounded border-index">
                  <h5 className="card-title text-index">
                    COMBO Gà BBQ (2 Miếng)
                  </h5>
                  <h6 className="card-title text-muted small pt-2">
                    1 Nước (M) + 1 Khoai Tây Chiên (M) + 3 Miếng gà rán giòn cay
                  </h6>
                  <h6 className="card-title text-danger fw-bold pt-2 pb-3 fs-5">
                    119,000 VND
                  </h6>
                  <div className="text-center">
                    <a className="btn btn-index mb-2" href="/#">
                      <i className="bi bi-basket2" />
                      &nbsp;Thêm vào giỏ
                    </a>
                  </div>
                  <div className="text-center">
                    <NavLink className="btn btn-warning" to={"/ChiTietSanPham"}>
                      <i className="bi bi-info-circle" />
                      &nbsp;Chi tiết
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={sell_pro3} className="card-img-top" alt="..." />
                <div className="card-body border-bottom border-3 rounded border-index">
                  <h5 className="card-title text-index">
                    COMBO Burger Cá Hồi Xông Khói (2 phần)
                  </h5>
                  <h6 className="card-title text-muted small pt-2">
                    2 Burger Cá Hồi Xông Khói + 4 Miếng gà viên + 2 Nước ngọt
                  </h6>
                  <h6 className="card-title text-danger fw-bold pt-2 pb-3 fs-5">
                    169,000 VND
                  </h6>
                  <div className="text-center">
                    <a className="btn btn-index mb-2" href="/#">
                      <i className="bi bi-basket2" />
                      &nbsp;Thêm vào giỏ
                    </a>
                  </div>
                  <div className="text-center">
                    <NavLink className="btn btn-warning" to={"/ChiTietSanPham"}>
                      <i className="bi bi-info-circle" />
                      &nbsp;Chi tiết
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={sell_pro4} className="card-img-top" alt="..." />
                <div className="card-body border-bottom border-3 rounded border-index">
                  <h5 className="card-title text-index">
                    COMBO Burger Cá Hồi Xông Khói (2 miếng)
                  </h5>
                  <h6 className="card-title text-muted small pt-2">
                    2 Miếng Cá Hồi Xông Khói Phô Mai + 1 Khoai tây chiên + 1
                    Nước ngọt
                  </h6>
                  <h6 className="card-title text-danger fw-bold pt-2 pb-3 fs-5">
                    109,000 VND
                  </h6>
                  <div className="text-center">
                    <a className="btn btn-index mb-2" href="/#">
                      <i className="bi bi-basket2" />
                      &nbsp;Thêm vào giỏ
                    </a>
                  </div>
                  <div className="text-center">
                    <NavLink className="btn btn-warning" to={"/ChiTietSanPham"}>
                      <i className="bi bi-info-circle" />
                      &nbsp;Chi tiết
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrangChu;
