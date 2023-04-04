import React from "react";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

export default function BooktempAdmin(props) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleReturn = async (e) => {
    const res = await fetch(`/returnBook/${props.book._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setIsLoading(false);
    if (data.errors) {
      navigate("/");
    } else {
      props.setReload((prev) => !prev);
    }
  };

  const handleDelete = async (e) => {
    setIsLoading(true);
    const res = await fetch(`/delete/${props.book._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    setIsLoading(false);
    if (data.errors) {
      navigate("/");
    } else {
      props.setReload((prev) => !prev);
    }
  };

  return (
    <div className="relative top-24 mb-10 bg-white shadow-xl shadow-blue-10 rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl ">
      <div className="items-start px-4 py-6">
        <div className="flex justify-between">
          <div className="mb-4">
            {/* <p className="text-gray-700">Book-Name: {props.post.book_name}</p> */}
            <h1 className="text-4xl text-[#012a4a]">
              <strong>{props.book.book_name}</strong>
            </h1>
            {/* <h2 className="mt-3 text-gray-700 text-sm">{props.post.author}</h2> */}
            <h2 className="text-blue-8 text-sm ml-1">~ {props.book.author}</h2>
          </div>
          {/* <p className="mt-3 text-gray-700 text-sm">
              {props.post.status}
            </p> */}
          <div>
            {props.book.status ? (
              <p className="mt-4 mr-12 text-green-900 font-semibold text-sm bg-green-400 py-1 px-3 rounded-xl">
                Available
              </p>
            ) : (
              <p className="mt-4 mr-12 text-red-900 font-semibold text-sm bg-red-400 py-1 px-3 rounded-xl">
                Issued
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex mr-2 text-gray-700 text-sm">
            <div className="flex items-center justify-center space-x-11">
              {!props.book.status ? (
                isLoading ? (
                  <ReactLoading
                    type={"cylon"}
                    color={"#89C2D9"}
                    height={"7%"}
                    width={"7%"}
                  />
                ) : (
                  <button
                    onClick={handleReturn}
                    type="button"
                    className="border-2 border-blue-8 hover:bg-blue-2 hover:text-white hover:border-blue-2 px-6 py-3 rounded-md text-blue-8"
                  >
                    Return
                  </button>
                )
              ) : null}
              <button
                type="button"
                onClick={() => {
                  navigate(`/admin/updateBook/${props.book._id}`);
                }}
                className="border-2 border-blue-8 hover:bg-blue-2 hover:text-white hover:border-blue-2 px-6 py-3 rounded-md text-blue-8"
              >
                Update
              </button>

              {isLoading ? (
                <ReactLoading
                  type={"cylon"}
                  color={"#89C2D9"}
                  height={"7%"}
                  width={"7%"}
                />
              ) : (
                <button
                  onClick={handleDelete}
                  type="button"
                  className="border-2 border-blue-8 hover:bg-blue-2 hover:text-white hover:border-blue-2 px-6 py-3 rounded-md text-blue-8"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
