import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="bg-black text-white p-4">
        <a href="#" className="p-3 mx-1 rounded hover:bg-gray-500">
          Home
        </a>
        <a href="#" className="p-3 mx-1 rounded hover:bg-gray-500">
          Link
        </a>
        <LogoutLink />
      </nav>
    </header>
  );
}
