import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Introduce from "./pages/Introduce";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "", component: <Home /> },
  { path: "Home", component: <Home /> },
  { path: "Menu", component: <Menu /> },
  { path: "Contact", component: <Contact /> },
  { path: "Introduce", component: <Introduce /> },
  { path: "ProductDetail", component: <ProductDetail /> },
  { path: "*", component: <NotFound /> },
];

export default routes;
