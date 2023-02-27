import TrangChu from "./pages/TrangChu";
import ThucDon from "./pages/ThucDon";
import LienHe from "./pages/LienHe";
import GioiThieu from "./pages/GioiThieu";
import Blog from "./pages/Blog";
import ChiTietSanPham from "./pages/ChiTietSanPham";
import KhongTimThayTrang from "./pages/KhongTimThayTrang";

const routes = [
  { path: "", component: <TrangChu /> },
  { path: "fe-project-group1", component: <TrangChu /> },
  { path: "trang-chu", component: <TrangChu /> },
  { path: "thuc-don", component: <ThucDon /> },
  { path: "lien-he", component: <LienHe /> },
  { path: "gioi-thieu", component: <GioiThieu /> },
  { path: "blog", component: <Blog /> },
  { path: "chi-tiet-san-pham", component: <ChiTietSanPham /> },
  { path: "*", component: <KhongTimThayTrang /> },
];

export default routes;
