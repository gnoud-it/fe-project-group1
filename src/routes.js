import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Introduce from "./pages/Introduce";
import Blog from "./pages/Blog";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "", component: <Home /> },
  { path: "fe-project-group1", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "menu", component: <Menu /> },
  { path: "contact", component: <Contact /> },
  { path: "introduce", component: <Introduce /> },
  { path: "blog", component: <Blog /> },
  { path: "productDetail", component: <ProductDetail /> },
  { path: "*", component: <NotFound /> },
];

export default routes;
