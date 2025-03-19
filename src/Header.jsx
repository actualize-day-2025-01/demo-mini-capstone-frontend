import { LogoutLink } from "./LoginLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a> | <LogoutLink />
      </nav>
    </header>
  );
}
