import React from "react";
import { NavLink } from "react-router-dom";

const Introduce = () => {
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
                Giới Thiệu
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="bg-light">
        <div className="container">{/* nội dung */}</div>
      </div>
    </div>
  );
};

export default Introduce;
