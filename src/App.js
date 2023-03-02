import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./containers/DefaultLayout";
import DefaultLayoutUser from "./containers/user/DefaultLayout";
import DefaultLayoutAdmin from "./containers/admin/DefaultLayout";
import DangNhap from "./pages/DangNhap";
import DangKy from "./pages/DangKy";
import Login from "./admin/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DefaultLayout />} />
        <Route path="/admin/*" element={<DefaultLayoutAdmin />} />
        <Route path="/user/*" element={<DefaultLayoutUser />} />
        <Route path="/DangNhap" element={<DangNhap />} />
        <Route path="/DangKy" element={<DangKy />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
