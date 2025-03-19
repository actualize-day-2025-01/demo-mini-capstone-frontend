import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.href = "/";
    });
  };

  return (
    <a href="#" onClick={handleClick} className="p-3 mx-1 rounded hover:bg-gray-500">
      Logout
    </a>
  );
}
