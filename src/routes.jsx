import AddProduct from "./pages/Addproduct/AddProduct";
import Analysis from "./pages/Analysis/Analysis";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
const allRoutes = [
  { path: "/", element: <Home /> },
  { path: "/analysis", element: <Analysis /> },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:ID",
    element: <Product />,
  },
  {
    path : "/addproduct" , 
    element : <AddProduct />
  } ,
  {
    path : "/addproduct/:ID" , 
    element : <AddProduct />
  }
];

export default allRoutes;
