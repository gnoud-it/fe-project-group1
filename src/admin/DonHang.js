/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const DonHang = () => {
  return (
    <div>
      <div className="g-0 m-5 mt-3">
        <div className="row pt-4">
          <div className="col">
            <div className="card">
              <div className="card-header">
                Đơn hàng #<span></span>
              </div>
              <div className="card-body">
                <b>Ngày:</b>
                <br />
                <b>Tổng:</b> ₫
                <br />
                <table className="table table-bordered table-striped text-center mt-3">
                  <thead>
                    <tr>
                      <th scope="col">Mã sản phẩm</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Đơn giá</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <a className="link-success" href="">
                          2
                        </a>
                      </td>
                      <td>3 ₫</td>
                      <td>4</td>
                      <td className="fst-italic text-success fw-semibold">
                        Đang giao
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonHang;
