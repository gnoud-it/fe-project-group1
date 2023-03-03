//USER
import TrangChu from "./user/TrangChu";
import ThucDon from "./user/ThucDon";
import LienHe from "./user/LienHe";
import GioiThieu from "./user/GioiThieu";
import Blog from "./user/Blog";
import ChiTietSanPham from "./user/ChiTietSanPham";
import DangNhap from "./pages/DangNhap";
import DangKy from "./pages/DangKy";
import KhongTimThayTrang from "./user/KhongTimThayTrang";

//ADMIN
import Home from "./admin/Home";
import Login from "./admin/Login";
import QuanLySP from "./admin/QuanLySP";
import QuanLyKH from "./admin/QuanLyKH";
import ThemSP from "./admin/ThemSP";
import DonHang from "./admin/DonHang";
import SuaSP from "./admin/SuaSP";
import ThanhToan from "./user/ThanhToan";

const routes = [
  { path: "", component: <TrangChu /> },
  { path: "fe-project-group1", component: <TrangChu /> },
  { path: "TrangChu", component: <TrangChu /> },
  { path: "ThucDon", component: <ThucDon /> },
  { path: "LienHe", component: <LienHe /> },
  { path: "GioiThieu", component: <GioiThieu /> },
  { path: "Blog", component: <Blog /> },
  { path: "ThanhToan", component: <ThanhToan /> },
  { path: "ThucDon/:id", component: <ChiTietSanPham /> },
  { path: "DangNhap", component: <DangNhap /> },
  { path: "DangKy", component: <DangKy /> },
  { path: "*", component: <KhongTimThayTrang /> },

  { path: "", component: <Home /> },
  { path: "Home", component: <Home /> },
  { path: "Admin", component: <Home /> },
  { path: "Login", component: <Login /> },
  { path: "QuanLySP", component: <QuanLySP /> },
  { path: "QuanLyKH", component: <QuanLyKH /> },
  { path: "ThemSP", component: <ThemSP /> },
  { path: "SuaSP", component: <SuaSP /> },
  { path: "DonHang", component: <DonHang /> },
];

export default routes;
