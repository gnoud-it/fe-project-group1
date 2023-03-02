import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

import Input from "../components/Input";

import userService from "../services/userService";
const DangNhap = (props) => {
  const [message, setMessage] = useState("");

  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const navigate = useNavigate();
  // cpf => function
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(username, password);
    userService.login(username, password).then((res) => {
      if (res.errorCode === 0) {
        setMessage("");
        navigate("/user/TrangChu");
      } else {
        setMessage("Sai tài khoản hoặc mật khẩu!");
      }
    });
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center h-100 align-items-center mt-5">
        <div className="fs-2">
          <NavLink to={"/TrangChu"}>
            <i class="bi bi-chevron-left text-index"></i>
          </NavLink>
        </div>
        <div className="text-center mb-4">
          <h4 className="card-title mb-0">
            <NavLink to={"/TrangChu"}>
              <img src={logo} className="w-25" />
            </NavLink>
          </h4>
        </div>

        <div className="pb-3">
          <p className="text-center text-danger"> {message}</p>
        </div>

        <div style={{ width: "40%" }}>
          <form onSubmit={formSubmitHandler}>
            <Input
              inputRef={usernameRef}
              label="Tài khoản"
              id="textUsername"
              placeholder="Nhập tài khoản"
              autoComplete="off"
              labelSize="3"
            />
            <Input
              inputRef={passwordRef}
              label="Mật khẩu"
              type="Password"
              id="txtPassword"
              placeholder="Nhập mật khẩu"
              autoComplete="off"
            />

            <div className="row">
              <div className="offset-sm-3 col-auto">
                <button type="submit" className="btn btn-index">
                  Đăng nhập
                </button>
              </div>
            </div>

            <div className="pt-4">
              <div className="float-start">
                <NavLink className="text-decoration-none text-index" to={"/*"}>
                  Quên mật khẩu
                </NavLink>
              </div>
              <div className="float-end">
                <p>
                  Chưa có tài khoản Mango?{" "}
                  <NavLink
                    className="text-decoration-none text-index"
                    to={"/DangKy"}
                  >
                    Đăng ký ngay
                  </NavLink>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DangNhap;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";

import userService from "../services/userService";
import "./Dangky.css";

// sfc => stateless functional component
const DangNhap = (props) => {
   const [message, setMessage] = useState("");

   const usernameRef = React.useRef();
   const passwordRef = React.useRef();

   const navigate = useNavigate();
   // cpf => function
   const formSubmitHandler = (e) => {
      e.preventDefault();
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;

      userService.login(username, password).then((res) => {
         if (res.errorCode === 0) {
            setMessage("");
            navigate("/trang-chu");
         } else {
            setMessage("Wrong username or password");
         }
      });
   };

   //uef => useEffect
   useEffect(() => {
      usernameRef.current.focus();
   }, []);

   return (
      <div
         id="page-register"
         style={{
            background: "linear-gradient(to right,#CC6600 0%, #FACE9C 100%)",
         }}
      >
         <div className="container " style={{ height: "100vh" }}>
            <div className="row justify-content-center h-100 align-items-center">
               <div
                  className="col-sm-8 col-lg-5  py-4 px-4"
                  style={{
                     borderRadius: "28px",
                     background: "#EEE9E9",
                     boxShadow: "9px 9px 29px #d7d7d7,-9px -9px 29px #e9e9e9",
                  }}
               >
                  {/* <div className="card bg-primary"> */}
                  <div className="card-header">
                     <h1 className="card-title text-center pb-3">Đăng Nhập</h1>
                  </div>

                  <div className="card-body ">
                     <p className="text-center text-danger"> {message}</p>
                     <form onSubmit={formSubmitHandler}>
                        <Input
                           inputRef={usernameRef}
                           label="Tên đăng nhập"
                           id="textUsername"
                           placeholder="Tên đăng nhập"
                           autoComplete="off"
                           labelSize="4 mb-3"
                        />
                        <Input
                           inputRef={passwordRef}
                           label="Mật khẩu: "
                           type="Password"
                           id="txtPassword"
                           placeholder="Nhập mật khẩu của bạn"
                           autoComplete="off"
                           labelSize="4 mb-3"

                        />

                        <div className="row mt-3 mb-3">
                           <div className="offset-sm-4 col-auto ">
                              <button type="submit" className="btn btnButton btn-primary">
                                 Đăng Nhập
                              </button>
                           </div>
                        </div>
                   
                     </form>
                  </div>
                  {/* </div> */}
               </div>
            </div>
         </div>
      </div>
   );
};
export default DangNhap;
