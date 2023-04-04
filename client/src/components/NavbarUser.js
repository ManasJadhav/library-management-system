import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ProfileTemp from "../components/ProfileTemp";
// import { useLocation } from "react-router-dom";

export default function NavbarUser(props) {
  const [show, setShow] = useState("hidden");
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [Profile, setProfile] = useState({});
  useEffect(() => {
    async function handleNavbar() {
      const res = await fetch("/auth");
      const data = await res.json();
      if (data.msg !== "User Login Found") {
        setIsLoggedin(false);
        navigate("/user_login");
      } else {
        setIsLoggedin(true);
        const pro = await fetch("/getProfile");
        const proData = await pro.json();
        setProfile(proData.user);
      }
    }
    handleNavbar();
  }, []);

  const handleLogout = async () => {
    const res = await fetch("/logout");
    setIsLoggedin(false);
    navigate("/");
  };

  // const location = useLocation();
  return (
    <>
      <div className="z-10 uppercase fixed w-full text-white bg-blue-1 flex px-14 py-4 justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/user/home">
            <h1>LMS</h1>
          </Link>
        </h1>
        <nav className="flex justify-between space-x-10">
          <Link to="/user/allbooksuser">
            <h1>Books</h1>
          </Link>
          <Link to="/user/allavailablebooks">
            <h1>Available Books</h1>
          </Link>
          <Link to="/user/allissuedbooks">
            <h1>Issued Books</h1>
          </Link>
          {isLoggedin ? (
            <h1
              onMouseEnter={() => {
                setShow("visible");
              }}
              onMouseLeave={() => {
                setShow("hidden");
              }}
            >
              Profile
            </h1>
          ) : undefined}
          <ProfileTemp Profile={Profile} show={show} />
          <h1>
            {!isLoggedin ? (
              <h1 className="cursor-pointer">Login</h1>
            ) : (
              <h1 onClick={handleLogout} className="cursor-pointer text-white">
                <a href="/">Logout</a>
              </h1>
            )}
          </h1>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
