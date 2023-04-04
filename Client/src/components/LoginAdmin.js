import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const [admin, setadmin] = useState({
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

    const res = await fetch("/login/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    });
    const data = await res.json();
    console.log(data);
    if (data.errors) {
      setError(data.errors);
    } else {
      navigate("/admin/home");
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
              value={admin.email}
              onChange={(e) => {
                const tempadmin = { ...admin };
                tempadmin.email = e.target.value;
                setadmin(tempadmin);
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
              value={admin.password}
              onChange={(e) => {
                const tempadmin = { ...admin };
                tempadmin.password = e.target.value;
                setadmin(tempadmin);
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
