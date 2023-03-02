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

const routes = [
  { path: "", component: <TrangChu /> },
  { path: "fe-project-group1", component: <TrangChu /> },
  { path: "TrangChu", component: <TrangChu /> },
  { path: "ThucDon", component: <ThucDon /> },
  { path: "LienHe", component: <LienHe /> },
  { path: "GioiThieu", component: <GioiThieu /> },
  { path: "Blog", component: <Blog /> },
  { path: "ChiTietSanPham", component: <ChiTietSanPham /> },
  { path: "*", component: <KhongTimThayTrang /> },
];

export default routes;
