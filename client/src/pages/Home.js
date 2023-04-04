import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeImage from "../images/lib2.svg";
import NavbarAdmin from "../components/NavbarAdmin";
import NavbarUser from "../components/NavbarUser";
export default function Home(props) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUser, setIsUser] = useState("");

  useEffect(() => {
    async function handleUser() {
      const res = await fetch("/getAdmin");
      const data = await res.json();
      if (data.AuthError) {
        setIsUser((prev) => (prev = "User"));
        setIsLoggedIn(false);
      } else {
        setIsUser((prev) => (prev = "admin"));
        setIsLoggedIn(true);
      }
      console.log(isUser);
    }
    handleUser();
  }, []);
  return (
    <div>
      {!isLoggedIn ? (
        <Navbar />
      ) : isUser === "admin" ? (
        <NavbarAdmin />
      ) : (
        <NavbarUser />
      )}

      <div className="grid grid-cols-2 pl-24 py-10">
        <div className="mt-32">
          <h1 className="text-5xl font-bold text-blue-3">Manage your Books</h1>
          <h1 className="text-3xl py-8">Books Are A Uniquely Portable Magic</h1>
          <p className="text-lg">Track All Our Library Books Here!!</p>
          {isLoggedIn ? (
            <button
              className="my-5 px-8 py-4 bg-blue-2 font-bold rounded-full"
              onClick={() => {
                navigate("/");
              }}
            >
              <h1 className="text-white">See Books</h1>
            </button>
          ) : (
            <Link to="/signup">
              <button className="my-5 px-8 py-4 bg-blue-2 font-bold rounded-full">
                <h1 className="text-white">Get Started</h1>
              </button>
            </Link>
          )}
        </div>
        <div className="mt-32 ">
          <img src={HomeImage} />
        </div>
      </div>
    </div>
  );
}
