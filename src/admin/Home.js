import React, { Component, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Gà Rán", Chi: 4000, Thu: 2400, amt: 2400 },
        { name: "Hamburger", Chi: 3000, Thu: 1398, amt: 2210 },
        { name: "Khoai tây chiên", Chi: 2000, Thu: 9800, amt: 2290 },
        { name: "Nước có ga", Chi: 2780, Thu: 3908, amt: 2000 },
        { name: "Nước trái cây", Chi: 1890, Thu: 4800, amt: 2181 },
      ],
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="g-0 m-5 mt-3">
          <div className="row pt-4">
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 text-center fs-1 bg-index rounded-1 pt-5">
                    <i className="bi bi-people-fill text-white" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-index">Khách hàng</h5>
                      <hr />
                      <h6 className="card-title">1 Khách</h6>
                      <p className="card-text small">
                        Tổng số khách hàng đã đăng ký
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 text-center fs-1 bg-primary rounded-1 pt-5">
                    <i className="bi bi-inboxes-fill text-white" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-primary">Sản phẩm</h5>
                      <hr />
                      <h6 className="card-title">5 Sản phẩm</h6>
                      <p className="card-text small">
                        Tổng sản phẩm trong cửa hàng
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 text-center fs-1 bg-success rounded-1 pt-5">
                    <i className="bi bi-receipt-cutoff text-white" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-success">Đơn hàng</h5>
                      <hr />
                      <h6 className="card-title">1 Đơn</h6>
                      <p className="card-text small">
                        Tổng đơn hàng trong ngày
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 text-center fs-1 bg-danger rounded-1 pt-5">
                    <i className="bi bi-cash-coin text-white" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-danger">Doanh thu</h5>
                      <hr />
                      <h6 className="card-title">0 ₫</h6>
                      <p className="card-text small">
                        Tổng doanh thu trong ngày
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-7">
              <div className="card">
                <div className="card-header fw-semibold">
                  Thống kê doanh thu
                </div>
                <div className="card-body">
                  <div className="fst-italic text-center pb-3 text-danger">
                    *Doanh thu trong tháng hiện tại
                  </div>
                  <ResponsiveContainer className="chart" height={300}>
                    <LineChart
                      width={600}
                      height={300}
                      data={data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="Thu"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="Chi" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="card">
                <div className="card-header fw-semibold">Hướng dẫn</div>
                <div className="card-body">
                  <p className="card-text">
                    - Các cột thống kê được đo theo đơn vị 'nghìn VNĐ'
                    <br></br>- Các dữ liệu thống kê được tổng hợp trong tháng
                    hiện tại
                  </p>
                  <p className="card-text fst-italic small">
                    Ví dụ:
                    <br></br>
                    - Cột "Gà rán" hiển thị 450&nbsp;
                    <i className="bi bi-arrow-right" />
                    &nbsp;450.000 VNĐ
                    <br></br>
                    - Cột "Hamburger" hiển thị 5000&nbsp;
                    <i className="bi bi-arrow-right" />
                    &nbsp;5.000.000 VNĐ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
