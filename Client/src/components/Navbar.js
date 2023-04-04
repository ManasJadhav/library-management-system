import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    async function handleNavbar() {
      const res = await fetch("/getprofile");
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        setIsLoggedin(false);
      } else {
        setIsLoggedin(true);
      }
    }
    handleNavbar();
  });

  // const handleLogout = async () => {
  //   const res = await fetch("/logout");
  //   setIsLoggedin(false);
  //   window.location.reload();
  //   navigate("/");
  // };

  // const location = useLocation();
  return (
    <div className="z-10 uppercase fixed w-full text-white bg-blue-1 flex px-14 py-4 justify-between items-center">
      <h1 className="text-2xl font-bold"> LMS</h1>
      <nav className="flex justify-between  space-x-10">
        <h1>
          {!isLoggedin ? (
            <div className="flex space-x-8">
              <Link to="/user_login">
                <h1>USER LOGIN</h1>
              </Link>
              <Link to="/admin_login">
                <h1>ADMIN LOGIN</h1>
              </Link>
            </div>
          ) : (
            <h1 className="cursor-pointer text-white">
              <a href="/login">Logout</a>
            </h1>
          )}
        </h1>
      </nav>
    </div>
  );
}
