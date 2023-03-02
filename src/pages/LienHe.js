import React from "react";
import { NavLink } from "react-router-dom";

const LienHe = () => {
  return (
    <div>
      <div id="breadcrum">
        <div className="container pt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink
                  to={"/TrangChu"}
                  className="text-decoration-none text-index"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Liên hệ
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="bg-light">
        <div className="container">
          <div className="text-center py-4">
            <h1 className="text-center">LIÊN HỆ VỚI CHÚNG TÔI</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col pb-3 d-flex">
              <div className="  ">
                <i className="bi bi-phone text-warning fs-2 pe-2 " />
              </div>
              <div className="float-start">
                <h5 className="float-end fw-bold  pt-1 ">Điện thoại</h5>
                <p className="text-black-50 mb-0 pb-1">+ 033.9999</p>
              </div>
            </div>

            <div className="col pb-3 d-flex">
              <div className="  ">
                <i className="bi bi-envelope text-warning fs-2 pe-2 " />
              </div>
              <div className="float-start">
                <h5 className="fw-bold pt-1 ">Email</h5>
                <p className="text-black-50 mb-0 pb-1">admin@mango.com</p>
              </div>
            </div>

            <div className="col pb-3 d-flex">
              <div className="  ">
                <i className="bi bi-geo-alt text-warning fs-2 pe-2" />
              </div>
              <div className="float-start">
                <h5 className=" fw-bold  pt-1 ">Địa chỉ </h5>
                <p className="text-black-50 mb-0 pb-1">
                  CN1: 777 Lê Lai, Bến Thành, Q1
                </p>
                <p className="text-black-50 ">
                  CN2: 448 Phan Huy Ích, P12, Gò Vấp
                </p>
              </div>
            </div>
            <div className="col pb-3 d-flex">
              <div className="  ">
                <i className="bi bi-clock text-warning fs-2 pe-2" />
              </div>
              <div className="float-start">
                <h5 className="fw-bold  pt-1 ">Giờ mở cửa: </h5>
                <p className="text-black-50 mb-0 pb-1">
                  T2-T6: 7:00 AM - 22:30 PM
                </p>
                <p className="text-black-50 ">T7-CN: 7:30 AM - 23:00 PM</p>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="col col-12 col-md-6  pe-lg-3">
              <iframe
                className="w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31348.232344791108!2d106.6367293279236!3d10.84730775773237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce800a25143c8e3a!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1675529657475!5m2!1svi!2s"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col col-12 col-md-6 py-4 ps-lg-3">
              <h4 className="text-center fw-bold pb-3">
                Gửi tin nhắn cho chúng tôi
              </h4>
              <form action>
                <div className="row g-3 ">
                  {/* name */}
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Họ Và Tên"
                      aria-label="Your name"
                      id="yourName"
                    />
                  </div>
                  {/* email */}
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="email"
                      id="inputEmail"
                    />
                  </div>
                  {/* nội dung */}
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      placeholder="Nội Dung"
                      id="noiDung"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  {/* nút */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn border-0 px-3 py-2 rounded-1 fw-semibold btn-index"
                    >
                      Gửi đi
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LienHe;
