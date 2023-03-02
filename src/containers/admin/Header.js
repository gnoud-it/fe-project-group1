/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import admin from "../../images/admin.png";
import logo from "../../images/logo-nav.png";

const Header = () => {
  return (
    <div>
      <div className="content-grey">
        <div className="row g-0">
          <div className="col-1">
            <button
              className="btn btn-index rounded-0 fs-2 w-100 shadow"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i class="bi bi-list-ul"></i>
            </button>
          </div>
          <div className="col-11">
            <nav className="p-3 shadow text-end">
              <div className="text-start fw-semibold">
                <span id="hour">00</span>:<span id="minutes">00</span>:
                <span id="seconds">00</span>&nbsp;
                <span id="period">AM</span>
                <span>&nbsp;-&nbsp;</span>
                <span id="dayname">Day</span>,&nbsp;
                <span id="daynum">00</span>&nbsp;
                <span id="month">Month</span>,&nbsp;
                <span id="year">Year</span>
              </div>
              <div className="text-end" style={{ marginTop: "-25px" }}>
                <span className="profile-font fw-semibold pe-2">
                  Xin chào Admin,&nbsp;
                  <NavLink
                    to={"/Login"}
                    className="text-index text-decoration-none"
                  >
                    Đăng xuất&nbsp;<i class="bi bi-box-arrow-in-right"></i>
                  </NavLink>
                </span>
                <img className="img-profile rounded-circle" src={admin} />
              </div>
            </nav>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start text-bg-dark"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasExample"
          data-bs-dismiss="offcanvas"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              <button
                type="button"
                className="btn-close btn-close-white float-end"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
              <div className="text-white text-center text-decoration-none">
                <img src={logo} className="w-50" alt />
                <br />
                <span className="fs-4 fw-semibold" style={{ letterSpacing: 2 }}>
                  Bảng điều khiển
                </span>
              </div>
            </h5>
          </div>
          <div className="offcanvas-body">
            <ul className="nav flex-column">
              <li>
                <NavLink to={"/admin/Home"} className="nav-link text-white">
                  <i className="bi bi-house-fill" />
                  &nbsp;&nbsp;Trang quản trị
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink to={"/admin/QuanLySP"} className="nav-link text-white">
                  <i className="bi bi-ui-checks-grid" />
                  &nbsp;&nbsp;Quản lý sản phẩm
                </NavLink>
              </li>
              <div className="pt-2"></div>
              <li>
                <NavLink to={"/admin/ThemSP"} className="nav-link text-white">
                  <i className="bi bi-plus-lg" />
                  &nbsp;&nbsp;Thêm sản phẩm
                </NavLink>
              </li>
              <div className="pt-2"></div>
              <li>
                <NavLink to={"/admin/QuanLyKH"} className="nav-link text-white">
                  <i className="bi bi-people-fill" />
                  &nbsp;&nbsp;Quản lý khách hàng
                </NavLink>
              </li>
              <div className="pt-2"></div>
              <li>
                <NavLink to={"/admin/DonHang"} className="nav-link text-white">
                  <i className="bi bi-receipt" />
                  &nbsp;&nbsp;Đơn hàng
                </NavLink>
              </li>
              <div className="pt-2"></div>
              <li className="text-center">
                <NavLink
                  to={"/TrangChu"}
                  className="mt-2 btn btn-index text-white"
                >
                  Trở về cửa hàng
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
