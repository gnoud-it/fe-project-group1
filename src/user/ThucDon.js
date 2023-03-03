/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delItem } from "../redux/action";

const ThucDon = () => {
  var total = 0;
  // const state = useSelector((state) => state.handleCart);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;
  // const dispatch = useDispatch();
  // const handleClose = (items) => {
  //   dispatch(delItem(items));
  // };
  // const [cartQuantities, setCartQuantities] = useState({});
  // const defaultQuantity = 1;

  // const handleIncrement = (cartItem) => {
  //   const newQuantities = { ...cartQuantities };
  //   newQuantities[cartItem.id] =
  //     (newQuantities[cartItem.id] || defaultQuantity) + 1;
  //   setCartQuantities(newQuantities);
  // };

  // const handleDecrement = (cartItem) => {
  //   const newQuantities = { ...cartQuantities };
  //   newQuantities[cartItem.id] = Math.max(
  //     (newQuantities[cartItem.id] || defaultQuantity) - 1,
  //     0
  //   );
  //   setCartQuantities(newQuantities);
  // };

  // const addProduct = (product) => {
  //   dispatch(addCart(product));
  // };

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
              <li className="breadcrumb-item active" aria-current="page">
                Thực đơn
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div id="menu">
        <div
          id="bgMenu"
          className="text-center mb-5 shadow"
          style={{ paddingTop: 70, paddingBottom: 70 }}
        >
          <h2
            className="text-white text-uppercase fw-semibold"
            style={{ letterSpacing: 2 }}
          >
            Thực đơn tất cả các món
          </h2>
        </div>
        <div className="container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Tất cả
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-2"
                href="#"
                style={{ color: "#f05123" }}
              >
                Gà rán
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-2"
                href="#"
                style={{ color: "#f05123" }}
              >
                Hamburger
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-3"
                href="#"
                style={{ color: "#f05123" }}
              >
                Khoai tây chiên
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-4"
                href="#"
                style={{ color: "#f05123" }}
              >
                Nước có ga
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="list-item-4"
                href="#"
                style={{ color: "#f05123" }}
              >
                Nước trái cây
              </a>
            </li>
          </ul>
        </div>
        <div className="container pt-5 pb-4">
          <div className="row text-center">
            {filter.map((product) => {
              return (
                <div className="col-12 col-lg-3 col-md-6 pb-4" key={product.id}>
                  <div className="card h-100 shadow">
                    <NavLink
                      to={`${product.id}`}
                      className="text-decoration-none"
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                      />
                    </NavLink>
                    <div className="card-body border-bottom border-3 rounded border-index">
                      <h5 className="card-title text-index">{product.name}</h5>
                      <h6 className="card-title text-muted small pt-2">
                        {product.description}
                      </h6>
                      <h6 className="card-title text-danger fw-bold pt-2 pb-3 fs-5">
                        {product.price} VND
                      </h6>
                      <a className="btn btn-index">
                        <i className="bi bi-basket2" />
                        &nbsp;Thêm vào giỏ
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-12 pt-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThucDon;
