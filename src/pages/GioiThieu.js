import React from "react";

import hamburger from "../images/hamburger/bur-1.jpg";

const GioiThieu = () => {
  return (
    <>
      <div id="breadcrum">
        <div className="container pt-3 ">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a
                  href="/trang-chu"
                  className="text-decoration-none text-index"
                >
                  Trang chủ
                </a>
              </li>
              <a
                href="/gioi-thieu"
                className="breadcrumb-item active text-decoration-none text-index"
                aria-current="page"
              >
                Giới thiệu<nav></nav>
              </a>
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
            Giới Thiệu Về Cửa Hàng Của Chúng Tôi
          </h2>
        </div>
        <div className="container">
          <div className="">
            <p
              className="fst-italic"
              style={{
                fontFamily: "OpenSans-Light",
                fontSize: "70px",
                color: "#bd0017",
              }}
            >
              MangoFood
            </p>
            <p
              className="fs-5"
              style={{ color: "#444444", marginBottom: "20px" }}
            >
              Nắm bắt nhu cầu của người tiêu dùng Việt Nam hiện nay, chúng tôi
              mong muốn phục vụ những bữa ăn nhanh nhưng hợp vệ sinh, đầy đủ
              dưỡng chất cùng với cung cách phục vụ chuyên nghiệp, MangoFood cam
              kết sẽ làm bạn hài lòng với dòng sản phẩm nổi tiếng khắp thế giới.
              Không chỉ nổi tiếng về thức ăn ngon, MangoFood còn nổi tiếng về
              chuỗi tiêu chuẩn Chất Lượng, Dịch Vụ, Vệ Sinh và Giá trị.
            </p>
          </div>
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="text-center py-4">
                <img
                  src={hamburger}
                  className="card-img-top"
                  alt=""
                  width="835"
                  height="418"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6 ps-3 pt-4">
              <p
                className=""
                style={{
                  fontFamily: "OpenSans-Light",
                  fontSize: "40px",
                  color: "#bd0017",
                }}
              >
                tầm nhìn & hoài bão <br /> <span>thương hiệu</span>
              </p>
              <p
                className="fs-5"
                style={{ color: "#444444", marginBottom: "12px" }}
              >
                MangoFood sẽ thiết lập một chuẩn mực mới cho ngành công nghiệp
                nhà hàng phục vụ thức ăn nhanh tại Việt Nam, mang đến cho khách
                hàng những trải nghiệm độc nhất chỉ có tại chuỗi nhà hàng của
                chúng tôi.
              </p>
              <p
                className="fs-5"
                style={{ color: "#444444", marginBottom: "12px" }}
              >
                Hoài bão của chúng tôi là phục vụ Thức ăn ngon cùng đội ngũ Nhân
                Viên Chuyên Nghiệp,Thân Thiện và là một Thành Viên Tốt của cộng
                đồng.
              </p>
              <p
                className="fs-5"
                style={{ color: "#444444", marginBottom: "12px" }}
              >
                Thức ăn ngon: chúng tôi phục vụ thức ăn ngon từ nguồn nguyên vật
                liệu chất lượng nhất và được chế biến theo từng yêu cầu của
                khách hàng.
              </p>
              <p
                className="fs-5"
                style={{ color: "#444444", marginBottom: "12px" }}
              >
                Nhân viên chuyên nghiệp, thân thiện: chúng tôi luôn tạo cơ hội
                để nhân viên phát triển sự nghiệp cùng công ty; từ đó, cùng
                nhau, chúng tôi phục vụ khách hàng một cách tốt nhất.
              </p>
              <p
                className="fs-5"
                style={{ color: "#444444", marginBottom: "12px" }}
              >
                Thành viên tốt của cộng đồng: Chúng tôi luôn quan tâm đến cộng
                đồng, đặc biệt là trẻ em và các gia đình; chúng tôi mang đến
                niềm vui và làm phong phú hơn cuộc sống của mọi người.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/* <div className="container">
            <h3 className="ourTeam text-center fs-1  py-5">OUR TEAM</h3>
            <div className="row  justify-content-center">
               <div className="col col-12  col-md-4 pb-4">
                
                  <div className="card ">
                     <img
                        src={hamburger}
                        className=" card-img-top"
                        alt="..."
                        style={{ height: 260 }}
                     />
                     <div className="card-body text-center">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text mb-0">Some quick example</p>
                        <div className=" ">
                           <a href="/#">
                              <i className="bi bi-facebook fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-twitter fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-instagram fs-3 px-1text-warning"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col col-12 col-md-4 pb-4">
                 
                  <div className="card">
                     <img
                        src={hamburger}
                        className=" card-img-top"
                        alt="..."
                        style={{ height: 260 }}
                     />
                     <div className="card-body text-center">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text mb-0">Some quick example</p>
                        <div className=" ">
                           <a href="/#">
                              <i className="bi bi-facebook fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-twitter fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-instagram fs-3 px-1text-warning"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col col-12 col-md-4 pb-4">
                
                  <div className="card">
                     <img
                        src={hamburger}
                        className=" card-img-top"
                        alt="..."
                        style={{ height: 260 }}
                     />
                     <div className="card-body text-center">
                        <h5 className="card-title ">Card title</h5>
                        <p className="card-text mb-0">Some quick example</p>
                        <div className=" ">
                           <a href="/#">
                              <i className="bi bi-facebook fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-twitter fs-3 px-1"></i>
                           </a>
                           <a href="/#">
                              <i className="bi bi-instagram fs-3 px-1text-warning"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div> */}
    </>
  );
};

export default GioiThieu;
