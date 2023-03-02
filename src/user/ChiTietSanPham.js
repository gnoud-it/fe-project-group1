import React from "react";
import { NavLink } from "react-router-dom";

import detail_pro from "../images/new-product/bur-new-1.jpg";

const ChiTietSanPham = () => {
  return (
    <div>
      <div id="breadcrum">
        <div className="container pt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink
                  to={"/user/TrangChu"}
                  className="text-decoration-none text-index"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="breadcrumb-item">
                <NavLink
                  to={"/user/ThucDon"}
                  className="text-decoration-none text-index"
                >
                  Thực đơn
                </NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chi Tiết Sản Phẩm
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="bg-light">
        <div className="container">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-lg-2">
                <div className="mb-3">
                  <img src={detail_pro} className="card-img-top" alt="..." />
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-3">
                  <h3 className="text-index">
                    COMBO Burger Cá Hồi Xông Khói (2 miếng)
                  </h3>
                  <p>Buger 2 Miếng cá hồi xông khói phô mai</p>
                  <h5 className="text-danger">
                    99.000đ -{" "}
                    <span className="text-success fst-italic fs-6">
                      Còn hàng
                    </span>
                  </h5>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="border p-3">
                  <h5>Thông tin thanh toán </h5>
                  <hr />
                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Họ và tên
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Địa chỉ
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Số điện thoại
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder=""
                      />
                    </div>
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Số lượng
                    </label>
                    <div className="col-sm-2">
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        min={1}
                        max={10}
                      />
                    </div>
                  </div>

                  <hr />
                  <button className="btn btn-index">Đặt hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietSanPham;
