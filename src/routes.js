//USER
import TrangChu from "./pages/TrangChu";
import ThucDon from "./pages/ThucDon";
import LienHe from "./pages/LienHe";
import GioiThieu from "./pages/GioiThieu";
import Blog from "./pages/Blog";
import ChiTietSanPham from "./pages/ChiTietSanPham";
import DangNhap from "./pages/DangNhap";
import DangKy from "./pages/DangKy";
import KhongTimThayTrang from "./pages/KhongTimThayTrang";

//ADMIN
import Home from "./admin/Home";
import Login from "./admin/Login";
import QuanLySP from "./admin/QuanLySP";
import QuanLyKH from "./admin/QuanLyKH";
import ThemSP from "./admin/ThemSP";
import DonHang from "./admin/DonHang";
import ThongTinKH from "./admin/ThongTinKH";
import SuaSP from "./admin/SuaSP";

const routes = [
  { path: "", component: <TrangChu /> },
  { path: "fe-project-group1", component: <TrangChu /> },
  { path: "TrangChu", component: <TrangChu /> },
  { path: "ThucDon", component: <ThucDon /> },
  { path: "LienHe", component: <LienHe /> },
  { path: "GioiThieu", component: <GioiThieu /> },
  { path: "Blog", component: <Blog /> },
  { path: "ChiTietSanPham", component: <ChiTietSanPham /> },
  { path: "DangNhap", component: <DangNhap /> },
  { path: "DangKy", component: <DangKy /> },
  { path: "*", component: <KhongTimThayTrang /> },

  { path: "", component: <Home /> },
  { path: "Home", component: <Home /> },
  { path: "Admin", component: <Home /> },
  { path: "Login", component: <Login /> },
  { path: "QuanLySP", component: <QuanLySP /> },
  { path: "QuanLyKH", component: <QuanLyKH /> },
  { path: "ThongTinKH", component: <ThongTinKH /> },
  { path: "ThemSP", component: <ThemSP /> },
  { path: "SuaSP", component: <SuaSP /> },
  { path: "DonHang", component: <DonHang /> },
];

export default routes;
