import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateUser(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const [User, setUser] = useState({});

  const [error, setError] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    async function handleUser() {
      setIsLoading(true);
      const res = await fetch(`/getUser/${id}`);
      const data = await res.json();
      setIsLoading(false);
      if (data.errors) {
        navigate("/");
      } else {
        setUser(data.data);
      }
    }
    handleUser();
  }, []);

  const updateUser = async () => {
    setIsLoading(true);
    const res = await fetch(`/updateUser/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(User),
    });
    const data = await res.json();
    setIsLoading(false);
    if (data.errors) {
      {
        navigate("/");
      }
    } else {
      navigate("/admin/userlist");
    }
  };
  return (
    <div>
      <form>
        <div className="grid place-items-center h-screen">
          <div className=" w-1/2 py-4 border  bg-blue-1 shadow-lg shadow-blue-8/80 rounded-lg  text-blue-8">
            <div className="flex flex-col items-center">
              <h3 className="text-lg mr-5">First Name</h3>
              <input
                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="text"
                placeholder="Enter First Name"
                value={User.first_name}
                onChange={(e) => {
                  const tempUser = { ...User };
                  tempUser.first_name = e.target.value;
                  setUser(tempUser);
                }}
              />
              <br />

              <h3 className="text-lg mr-5 ml-3">Last Name</h3>
              <input
                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="text"
                placeholder="Enter Last Name"
                value={User.last_name}
                onChange={(e) => {
                  const tempUser = { ...User };
                  tempUser.last_name = e.target.value;
                  setUser(tempUser);
                }}
              />
              <br />

              <h3 className="text-lg mr-5 ml-3">Email</h3>
              <input
                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="text"
                placeholder="Enter Email"
                value={User.email}
                onChange={(e) => {
                  const tempUser = { ...User };
                  tempUser.email = e.target.value;
                  setUser(tempUser);
                }}
              />
              <br />
            </div>

            <div className="flex items-center justify-center">
              {isLoading ? (
                <ReactLoading
                  type={"cylon"}
                  color={"#89C2D9"}
                  height={"7%"}
                  width={"7%"}
                />
              ) : (
                <button
                  type="button"
                  onClick={updateUser}
                  className="border-2 border-blue-8 hover:bg-white hover:text-blue-2 px-6 py-3 rounded-md text-blue-8"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
