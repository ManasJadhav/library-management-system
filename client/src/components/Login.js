import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    setError({
      email: "",
      password: "",
    });

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    });
    const data = await res.json();
    if (data.errors) {
      setError(data.errors);
    } else {
      navigate("/user/home");
    }
  };

  return (
    <div className="w-72 ml-auto mr-auto  mt-24">
      {error.email !== "" ? (
        <div class="alert alert-danger" role="alert">
          {error.email}
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          {error.password}
        </div>
      )}
      <main class="form-signin w-100 m-auto">
        <form className="" onSubmit={handleLogin}>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={User.email}
              onChange={(e) => {
                const tempUser = { ...User };
                tempUser.email = e.target.value;
                setUser(tempUser);
              }}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={User.password}
              onChange={(e) => {
                const tempUser = { ...User };
                tempUser.password = e.target.value;
                setUser(tempUser);
              }}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div>
            <br />
          </div>
          <button class="w-100 btn btn-lg btn-primary text-black" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
