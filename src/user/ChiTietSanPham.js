import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

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
              <div className="col-12 col-lg-4">
                <div className="mb-3">
                  <img src={product.image} className="card-img" alt="..." />
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="mb-3">
                  <h3 className="text-index">{product.name}</h3>
                  <p>{product.description}</p>
                  <h5 className="text-danger">
                    {product.price} ₫ -{" "}
                    <span className="text-success fst-italic fs-6">
                      Còn hàng
                    </span>
                  </h5>
                  <hr className="w-75"></hr>

                  <div className="my-3">
                    <label className="form-label">Số lượng:</label>
                    <input
                      className="form-control"
                      style={{ width: "8%" }}
                      type={"number"}
                      min={1}
                      max={10}
                    ></input>
                  </div>
                  <hr className="w-75"></hr>

                  <NavLink
                    to={"/user/ThanhToan"}
                    className="btn btn-index mt-2"
                  >
                    Thanh toán
                  </NavLink>
                  <button className="btn btn-warning ms-3 mt-2">
                    Thêm vào giỏ hàng
                  </button>
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
