import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ProfileTemp from "./ProfileTemp";

// import { useLocation } from "react-router-dom";

export default function NavbarAdmin(props) {
  const [show, setShow] = useState("hidden");
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [Profile, setProfile] = useState({});
  useEffect(() => {
    async function handleNavbar() {
      const res = await fetch("/auth");
      const data = await res.json();
      if (data.msg !== "Admin Login Found") {
        setIsLoggedin(false);
        navigate("/");
      } else {
        setIsLoggedin(true);
        const profile = await fetch("/getAdmin");
        const proData = await profile.json();
        setProfile(proData.admin);
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
          <a href="/admin/home">LMS</a>
        </h1>
        <nav className="flex justify-between space-x-10">
          <Link to="/admin/allBooksadmin">
            <h1>All Books</h1>
          </Link>
          <Link to="/admin/allissuedadmin">
            <h1>All Issued Books</h1>
          </Link>
          <Link to="/admin/userlist">
            <h1>Userlist</h1>
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
            {isLoggedin ? (
              <h1 onClick={handleLogout} className="cursor-pointer">
                logout
              </h1>
            ) : (
              <h1 className="cursor-pointer text-white">
                <a href="/">login</a>
              </h1>
            )}
          </h1>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
