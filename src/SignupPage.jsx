import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 className="text-3xl font-bold">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" className="mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div>
          Email: <input name="email" type="email" className="mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div>
          Password: <input name="password" type="password" className="mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div>
          Password confirmation:{" "}
          <input
            name="password_confirmation"
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <button type="submit" className="rounded border border-gray-300 p-2 hover:bg-gray-100 mt-3">
          Signup
        </button>
      </form>
    </div>
  );
}
