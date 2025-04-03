import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsPage } from "./ProductsPage";
import { ProductsShowPage } from "./ProductsShowPage";
import { CartedProductsPage } from "./CartedProductsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://demo-mini-capstone-api-5zlt.onrender.com";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="container mx-auto flex-auto p-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/cart",
        element: <CartedProductsPage />,
        loader: () => axios.get("/carted_products.json").then((response) => response.data),
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
