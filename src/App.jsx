import axios from "axios";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsPage } from "./ProductsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto flex-auto p-4">
        <SignupPage />
        <LoginPage />
        <ProductsPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
