import React from "react";
import { NavLink } from "react-router-dom";
import blog1 from "../images/blog/blog1.jpg";
import blog2 from "../images/blog/blog2.jpg";
import blog3 from "../images/blog/blog3.jpg";
import blog4 from "../images/blog/blog4.jpg";

const Contact = () => {
  return (
    <div>
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
                  Blog
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="bg-light">
          <div
            id="bgBlog"
            className="text-center mb-5 shadow"
            style={{ paddingTop: 70, paddingBottom: 70 }}
          >
            <h2
              className="text-white text-uppercase fw-semibold"
              style={{ letterSpacing: 2 }}
            >
              Blog - tổng hợp thông tin
            </h2>
          </div>
          <div className="container">
            <div className="row pb-5">
              <div className="col-7 pb-2">
                <h3 className="text-index pb-2">Khuyến mãi từ cửa hàng</h3>
                <div className="card shadow mb-4">
                  <img src={blog1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-index">VALENTINE</h5>
                    <p className="card-text">
                      Duyên là do trời định, phận là do con người tạo ra. Mà
                      muôn hạnh phúc thì hãy tới với Mango Food ăn gà nào.
                    </p>
                    <a href="/#" className="btn btn-index float-end">
                      Xem thêm
                    </a>
                  </div>
                </div>

                <div className="card shadow">
                  <img src={blog2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-index">Quốc Tế Phụ Nữ</h5>
                    <p className="card-text">
                      Sắp tới đây sẽ là 8/3, đây là ngày hết sức quan trọng của
                      các chị em phụ nữ. vì thế Mango Food sẽ tung ra món mới và
                      hơn thế sẽ giảm giá cho các chị em phụ nữ khi tới của hàng
                      của Mango.
                    </p>
                    <a href="/#" className="btn btn-index float-end">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-5 pb-2">
                <h3 className="text-index pb-2">Review & đánh giá</h3>
                <div className="card shadow mb-4">
                  <img src={blog3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-index">
                      Top 5 thương hiệu gà rán ngon nhất tại Việt Nam
                    </h5>
                    <p className="card-text text-truncate">
                      Gà rán là món ăn nổi tiếng được mọi người yêu thích không
                      chỉ đối với những bạn trẻ mà ngay cả những bậc phụ huynh,
                      những người lớn tuổi. Trên thị trường hiện nay, có rất
                      nhiều thương hiệu gà rán nổi tiếng xuất hiện khắp Việt
                      Nam. Cùng Utop điểm qua top 5 thương hiệu gà rán ngon nhất
                      tại Việt Nam nhé!
                    </p>
                    <a href="/#" className="btn btn-index float-end">
                      Xem thêm
                    </a>
                  </div>
                </div>

                <div className="card shadow">
                  <img src={blog4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-index">
                      5 thông tin thú vị ngay cả "fan cứng" của món gà rán cũng
                      chưa chắc đã biết
                    </h5>
                    <p className="card-text text-truncate">
                      Khó ai cưỡng lại được một miếng gà chiên ngập dầu, bên
                      ngoài giòn rụm, bên trong mềm mịn ngon ngọt. Trên thực tế,
                      người Mỹ đã hoàn thiện phương pháp chiên gà độc đáo này
                      nhưng có ảnh hưởng từ một số quốc gia khác. Ngoài ra còn
                      một số bí mật thú vị về gà rán mà có thể những fan cứng
                      của món ăn này cũng chưa biết được.
                    </p>
                    <a href="/#" className="btn btn-index float-end">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
