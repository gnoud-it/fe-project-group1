/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import axios from "axios";
const baseUrl = "http://localhost:3000";

const ThemSP = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/product`, inputData);

      console.log(res.data);
      setData((prevData) => [...prevData, res.data]);
      setInputData({
        id: "",
        name: "",
        price: "",
        description: "",
        image: "",
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
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
              <div className="card mb-4">
                <div className="card-header">Thêm sản phẩm</div>
                <form onSubmit={handleSave}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="mb-3 row">
                          <label className="col-lg-2 col-md-6 col-sm-12 col-form-label">
                            Tên sản phẩm:
                          </label>
                          <div className="col-lg-10 col-md-6 col-sm-12">
                            <input
                              name="name"
                              value={inputData.name}
                              onChange={handleInputChange}
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3 row">
                          <label className="col-lg-2 col-md-6 col-sm-12 col-form-label">
                            Đơn giá
                          </label>
                          <div className="col-lg-10 col-md-6 col-sm-12">
                            <input
                              name="price"
                              value={inputData.price}
                              onChange={handleInputChange}
                              type="number"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3 row">
                          <label className="col-lg-2 col-md-6 col-sm-12 col-form-label">
                            Ảnh:
                          </label>
                          <div className="col-lg-10 col-md-6 col-sm-12">
                            <input
                              className="form-control"
                              type="text"
                              name="image"
                              value={inputData.image}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">&nbsp;</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mô tả sản phẩm</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows={3}
                        value={inputData.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-index">
                      Thêm sản phẩm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemSP;
