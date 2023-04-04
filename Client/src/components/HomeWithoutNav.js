import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeImage from "../images/lib2.svg";
export default function HomeWithoutNav(props) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    async function handleUser() {
      const res = await fetch("/auth");
      const data = await res.json();
      console.log(data);
      if (data.msg === "User Login Found" || data.msg === "Admin Login Found") {
        setIsLoggedIn(true);
        setMsg(data.msg);
      } else {
        setIsLoggedIn(false);
        navigate("/admin_login");
      }
    }
    handleUser();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 pl-24 py-10">
        <div className="mt-32">
          <h1 className="text-5xl font-bold text-blue-3">
            Library Management System
          </h1>
          <h1 className="text-3xl py-8">Books Are A Uniquely Portable Magic</h1>
          <p className="text-lg">Track All Our Library Books Here!!</p>
          {isLoggedIn ? (
            <button
              className="my-5 px-8 py-4 bg-blue-2 font-bold rounded-full"
              onClick={() => {
                msg === "User Login Found"
                  ? navigate("/user/allbooksuser")
                  : navigate("/admin/allBooksadmin");
              }}
            >
              <h1 className="text-white">See Books</h1>
            </button>
          ) : (
            <button className="my-5 px-8 py-4 bg-blue-2 font-bold rounded-full">
              <h1 className="text-white">Get Started</h1>
            </button>
          )}
        </div>
        <div className="mt-32 ">
          <img src={HomeImage} alt="Library" />
        </div>
      </div>
    </div>
  );
}
