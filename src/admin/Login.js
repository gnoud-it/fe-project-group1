import React, { useState, useEffect, Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

import Input from "../components/Input";

import userService from "../services/userService";
const Login = (props) => {
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
        navigate("/admin/Home");
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
              placeholder="Enter user name"
              autoComplete="off"
              labelSize="3"
            />
            <Input
              inputRef={passwordRef}
              label="Mật khẩu"
              type="Password"
              id="txtPassword"
              placeholder="Enter password"
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
