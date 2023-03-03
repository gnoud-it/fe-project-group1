/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const baseUrl = "http://localhost:3000";

const QuanLyKH = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/user_api/${id}`);
      console.log(res.data);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/user_api`);
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
              <div className="card-header fw-semibold">Quản lý khách hàng</div>
              <div class="row">
                {data.map((item) => (
                  <div class="col-sm-6">
                    <div className="card m-3">
                      <div className="row g-0">
                        <div className="col-2 text-center fs-1 bg-light text-index rounded-1 pt-5">
                          <i className="bi bi-people-fill" />
                        </div>
                        <div className="col-10">
                          <div className="card-body">
                            <h5 className="card-title text-index">
                              {item.name}
                              <span>(#{item.id})</span>
                            </h5>
                            <p className="card-text">{item.email}</p>
                            <div>
                              <button
                                type="button"
                                className="btn btn-index"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <small>
                                  Xoá người dùng&nbsp;
                                  <i className="bi bi-trash" />
                                </small>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL */}
      {data.map((item) => (
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
                  Bạn có chắc chắn muốn xoá khách hàng này?
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
                  onClick={() => handleDelete(item.id)}
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

export default QuanLyKH;
