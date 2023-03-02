/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ThongTinKH = () => {
  return (
    <div>
      <div className="g-0 m-5 mt-3">
        <div className="row pt-4">
          <div className="col">
            <div className="card">
              <div className="card-header fw-semibold">
                Thông tin khách hàng
              </div>
              <div className="card-body">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-2 text-center fs-1 bg-light text-index rounded-1 pt-5">
                      <i className="bi bi-people-fill" />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <h5 className="card-title text-index">
                          Duong <span>(Admin)</span>
                        </h5>
                        <p className="card-text">d.nguyn88@gmail.com</p>
                        <p className="card-text">Admin</p>
                        <NavLink
                          to="/admin/QuanLyKH"
                          className="card-text text-decoration-none"
                        >
                          <small className="text-index">
                            <i className="bi bi-chevron-left" />
                            &nbsp;Quay lại
                          </small>
                        </NavLink>
                      </div>
                    </div>
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

export default ThongTinKH;
