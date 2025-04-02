import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="bg-black text-white p-4">
        <Link to="/" className="p-3 mx-1 rounded hover:bg-gray-500">
          Home
        </Link>
        <Link to="/cart" className="p-3 mx-1 rounded hover:bg-gray-500">
          Shopping Cart
        </Link>
        <Link to="/signup" className="p-3 mx-1 rounded hover:bg-gray-500">
          Signup
        </Link>
        <Link to="/login" className="p-3 mx-1 rounded hover:bg-gray-500">
          Login
        </Link>
        <LogoutLink />
      </nav>
    </header>
  );
}
