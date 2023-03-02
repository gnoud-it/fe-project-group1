import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./containers/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dang-nhap" element={<DangNhap />} />
        <Route path="/dang-ky" element={<DangKy />} />
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
