import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./containers/DefaultLayout";
import DangKy from "./pages/DangKy";
import DangNhap from './pages/DangNhap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/dang-nhap" element={<DangNhap />} />
      <Route path="/dang-ky" element={<DangKy />} />
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
