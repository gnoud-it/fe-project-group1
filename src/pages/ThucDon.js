/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import combo1 from "../images/combo-seller/combo-chic-1.jpg";
import combo2 from "../images/combo-seller/combo-chic-2.jpg";
import combo3 from "../images/combo-seller/combo-bur-1.jpg";
import combo4 from "../images/combo-seller/combo-bur-2.jpg";

const ThucDon = () => {
  return (
    <div>
      <div id="breadcrum">
        <div className="container pt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a
                  href="/trang-chu"
                  className="text-decoration-none text-index"
                >
                  Trang chủ
                </a>
              </li>
              <a href="/thuc-don" className="breadcrumb-item active text-decoration-none text-index" aria-current="page">
                Thực đơn<nav></nav>
              </a>
            </ol>
          </nav>
        </div>
      </div>
      <div id="menu">
        <div
          id="bgMenu"
          className="text-center mb-5 shadow"
          style={{ paddingTop: 70, paddingBottom: 70 }}
        >
          <h2
            className="text-white text-uppercase fw-semibold"
            style={{ letterSpacing: 2 }}
          >
            Thực đơn tất cả các món
          </h2>
        </div>
        <div className="container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Tất cả
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-2"
                href="#"
                style={{ color: "#f05123" }}
              >
                Gà rán
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-2"
                href="#"
                style={{ color: "#f05123" }}
              >
                Hamburger
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-3"
                href="#"
                style={{ color: "#f05123" }}
              >
                Khoai tây chiên
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-4"
                href="#"
                style={{ color: "#f05123" }}
              >
                Nước có ga
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-4"
                href="#"
                style={{ color: "#f05123" }}
              >
                Nước trái cây
              </a>
            </li>
          </ul>
        </div>
        <div className="container pt-5 pb-4">
          <div className="row text-center">
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={combo1} className="card-img-top" alt="..." />
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
                  <a className="btn btn-index">
                    <i className="bi bi-basket2" />
                    &nbsp;Thêm vào giỏ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={combo2} className="card-img-top" alt="..." />
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
                  <a className="btn btn-index">
                    <i className="bi bi-basket2" />
                    &nbsp;Thêm vào giỏ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={combo4} className="card-img-top" alt="..." />
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
                  <a className="btn btn-index">
                    <i className="bi bi-basket2" />
                    &nbsp;Thêm vào giỏ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={combo3} className="card-img-top" alt="..." />
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
                  <a className="btn btn-index">
                    <i className="bi bi-basket2" />
                    &nbsp;Thêm vào giỏ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={combo1} className="card-img-top" alt="..." />
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
                  <a className="btn btn-index">
                    <i className="bi bi-basket2" />
                    &nbsp;Thêm vào giỏ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={combo2} className="card-img-top" alt="..." />
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
                  <a className="btn btn-index">
                    <i className="bi bi-basket2" />
                    &nbsp;Thêm vào giỏ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={combo4} className="card-img-top" alt="..." />
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
                  <a className="btn btn-index">
                    <i className="bi bi-basket2" />
                    &nbsp;Thêm vào giỏ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 pb-4">
              <div className="card h-100 shadow">
                <img src={combo3} className="card-img-top" alt="..." />
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
                  <a className="btn btn-index">
                    <i className="bi bi-basket2" />
                    &nbsp;Thêm vào giỏ
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 pt-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThucDon;
