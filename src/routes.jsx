import Analysis from "./pages/Analysis/Analysis";
import Home from "./pages/Home/Home";
import Products from './pages/Products/Products'
const allRoutes = [
    { path: "/", element: <Home /> } ,
    {path : '/analysis' , element : <Analysis />} ,
    {path : '/products' , element : <Products />}
];

export default allRoutes;
