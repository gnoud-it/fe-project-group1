import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import axios from "axios";

import Input from "../components/Input";

import userService from "../services/userService";
const DangKy = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      return;
    }
    if (password !== confirmPassword) {
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/user_api", {
        name,
        email,
        password,
        confirmPassword,
      });
      console.log(response.data);

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau!");
    }
  };
  const [message, setMessage] = useState("");

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  const navigate = useNavigate();

  useEffect(() => {
    nameRef.current.focus();
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
          <form onSubmit={handleSubmit}>
            <Input
              inputRef={nameRef}
              label="Tài khoản"
              id="textUsername"
              placeholder="Nhập tài khoản"
              autoComplete="off"
              labelSize="3"
              name="username"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              inputRef={emailRef}
              label="Email"
              id="textUsername"
              placeholder="Nhập địa chỉ Email"
              autoComplete="off"
              labelSize="3"
              name="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              inputRef={passwordRef}
              label="Mật khẩu"
              type="Password"
              id="txtPassword"
              placeholder="Nhập mật khẩu"
              autoComplete="off"
              name="username"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Input
              inputRef={confirmPasswordRef}
              label="Xác nhận mật khẩu"
              type="Password"
              id="txtPassword"
              placeholder="Nhập lại mật khẩu lần nữa"
              autoComplete="off"
              name="username"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <div className="row">
              <div className="offset-sm-3 col-auto">
                <button type="submit" className="btn btn-index">
                  Đăng Ký
                </button>
              </div>
            </div>

            <div className="pt-4">
              <div className="float-end">
                <p>
                  Đã có tài khoản Mango?{" "}
                  <NavLink
                    className="text-decoration-none text-index"
                    to={"/DangNhap"}
                  >
                    Đăng nhập ngay
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
export default DangKy;
