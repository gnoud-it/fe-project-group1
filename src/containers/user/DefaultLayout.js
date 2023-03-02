import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../../routes";
import HeaderUser from "./Header";
import Footer from "../Footer";

import sell_pro1 from "../../images/combo-seller/combo-bur-1.jpg";
import sell_pro2 from "../../images/combo-seller/combo-chic-1.jpg";

const DefaultLayout = () => {
  return (
    <>
      <HeaderUser />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
      {/* Modal */}
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-fullscreen-lg-down modal-fullscreen-sm-down modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Giỏ hàng
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* Form check product */}
                <form className="row g-3 needs-validation" validate>
                  <div className="col-lg-1 d-none d-lg-block position-relative">
                    <label htmlFor="#" className="form-label" />
                    <button type="button" className="btn text-danger fs-4">
                      <i className="bi bi-x-circle-fill" />
                    </button>
                  </div>
                  <div className="col-12 col-lg-3 col-md-3 d-none d-lg-block d-md-block position-relative">
                    <img
                      src={sell_pro1}
                      className="img-fluid rounded-5 w-50 ms-4"
                      alt="sell_pro1"
                    />
                  </div>
                  <div className="col-12 col-lg-4 col-md-5 position-relative">
                    <label htmlFor="productName" className="form-label">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      defaultValue="COMBO Burger Cá Hồi Xông Khói (2 miếng)"
                      readOnly
                      disabled
                      required
                    />
                  </div>
                  <div className="col-3 col-lg-1 col-md-1 position-relative">
                    <label htmlFor="productQuantity" className="form-label">
                      SL
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="validationTooltipUsername"
                      aria-describedby="productQuantity"
                      defaultValue={1}
                      required
                    />
                  </div>
                  <div className="col-9 col-lg-3 col-md-3 position-relative">
                    <label htmlFor="productPrice" className="form-label">
                      Đơn giá
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="text"
                        className="form-control"
                        id="productPrice"
                        aria-describedby="validationProductPrice"
                        defaultValue="99,000 VND"
                        readOnly
                        required
                      />
                      <span
                        className="input-group-text"
                        id="validationProductPrice"
                      >
                        VND
                      </span>
                      <div className="invalid-tooltip"></div>
                    </div>
                  </div>
                  <div className="col-12 d-block d-md-block d-lg-none text-center position-relative">
                    <label htmlFor="#" className="form-label" />
                    <button type="button" className="btn text-danger fs-3">
                      <i className="bi bi-x-circle-fill" />
                    </button>
                  </div>
                </form>
                {/* End Form check product */}
                <hr />
                {/* Form check product */}
                <form className="row g-3 needs-validation" validate>
                  <div className="col-lg-1 d-none d-lg-block position-relative">
                    <label htmlFor="#" className="form-label" />
                    <button type="button" className="btn text-danger fs-4">
                      <i className="bi bi-x-circle-fill" />
                    </button>
                  </div>
                  <div className="col-12 col-lg-3 col-md-3 d-none d-lg-block d-md-block position-relative">
                    <img
                      src={sell_pro2}
                      className="img-fluid rounded-5 w-50 ms-4"
                      alt="sell_pro2"
                    />
                  </div>
                  <div className="col-12 col-lg-4 col-md-5 position-relative">
                    <label htmlFor="productName" className="form-label">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      defaultValue="COMBO Gà Rán Giòn Cay (2 Miếng)"
                      readOnly
                      disabled
                      required
                    />
                  </div>
                  <div className="col-3 col-lg-1 col-md-1 position-relative">
                    <label htmlFor="productQuantity" className="form-label">
                      SL
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="validationTooltipUsername"
                      aria-describedby="productQuantity"
                      defaultValue={1}
                      required
                    />
                  </div>
                  <div className="col-9 col-lg-3 col-md-3 position-relative">
                    <label htmlFor="productPrice" className="form-label">
                      Đơn giá
                    </label>
                    <div className="input-group has-validation">
                      <input
                        type="text"
                        className="form-control"
                        id="productPrice"
                        aria-describedby="validationProductPrice"
                        defaultValue="90,000 VND"
                        readOnly
                        required
                      />
                      <span
                        className="input-group-text"
                        id="validationProductPrice"
                      >
                        VND
                      </span>
                      <div className="invalid-tooltip"></div>
                    </div>
                  </div>
                  <div className="col-12 d-block d-md-block d-lg-none text-center position-relative">
                    <label htmlFor="#" className="form-label" />
                    <button type="button" className="btn text-danger fs-3">
                      <i className="bi bi-x-circle-fill" />
                    </button>
                  </div>
                </form>
                {/* End Form check product */}
                <hr />
                <div className="col-12 text-end">
                  <label htmlFor="productNote" className="form-label fw-bold">
                    Thành tiền: 189,000 VND
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="submit" className="btn btn-index">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
      </div>
    </>
  );
};

export default DefaultLayout;
