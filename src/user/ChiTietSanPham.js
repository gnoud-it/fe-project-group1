import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { delItem } from "../redux/action";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";

const ChiTietSanPham = () => {
  let componentMounted = true;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    const getsProducts = async () => {
      const response = await fetch("http://localhost:3000/product");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
      }

      return () => {
        componentMounted = false;
      };
    };
    getsProducts();
  }, []);

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`http://localhost:3000/product/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, []);
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
                  <img src={product.image} className="card-img-top" alt="..." />
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-3">
                  <h3 className="text-index">{product.name}</h3>
                  <p>{product.description}</p>
                  <h5 className="text-danger">
                    {product.price} ₫ -{" "}
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
