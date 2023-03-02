import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const baseUrl = "http://localhost:3000";

const QuanLySP = () => {
  const [data, setData] = useState([]);
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/product/${id}`);
      console.log(res.data);
      setData((prevData) => prevData.filter((product) => product.id !== id));
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/product`);
        setData(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="g-0 m-5 mt-3">
        <div className="row pt-4">
          <div className="col">
            <div className="card">
              <div className="card-header fw-semibold">Quản lý sản phẩm</div>

              <div className="card-body">
                <table
                  className="table table-bordered table-striped"
                  id="printablediv"
                >
                  <tr>
                    <thead>
                      <tr className="text-center">
                        <th scope="col">ID</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col" className="w-25">
                          Ảnh
                        </th>
                        <th scope="col">Đơn giá</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xoá</th>
                      </tr>
                    </thead>
                    {data.map((product) => {
                      return (
                        <tbody>
                          <tr key={product.id} className="text-center">
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>
                              <img
                                src={product.image}
                                className="img-fluid w-25"
                                alt=""
                              />
                            </td>
                            <td>{product.price} ₫</td>
                            <td>
                              <NavLink
                                className="btn btn-index rounded-circle"
                                to={"/admin/SuaSP"}
                              >
                                <i className="bi-pencil" />
                              </NavLink>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger rounded-circle"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i className="bi-trash" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL */}
      {data.map((product) => (
        <div
          className="modal"
          id="exampleModal"
          tabIndex={"-1"}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chú ý</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p className="text-danger fw-semibold">
                  Bạn có chắc muốn xoá sản phẩm này?
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Huỷ
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(product.id)}
                  data-bs-dismiss="modal"
                  className="btn btn-danger"
                >
                  Xoá
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* MODAL */}
    </div>
  );
};

export default QuanLySP;
