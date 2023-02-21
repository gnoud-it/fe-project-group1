import React from "react";
import { NavLink } from "react-router-dom";

import detail_pro from "../images/new-product/bur-new-1.jpg";

const ProductDetail = () => {
  return (
    <div>
      <div id="breadcrum">
        <div className="container pt-3">
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
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="border p-3">
                  <h5>Thông tin thanh toán </h5>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p>Giá bán</p>
                    <p className="text-danger fw-semibold">99.000 VNĐ</p>
                  </div>
                  <hr />
                  <p className="text-success fw-semibold">Còn hàng</p>
                  <button className="btn btn-index">Mua ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
