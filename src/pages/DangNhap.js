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
