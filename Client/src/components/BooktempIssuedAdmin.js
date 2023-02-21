import React, { useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

export default function BooktempIssuedAdmin(props) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleReturn = async (e) => {
    const res = await fetch(`/returnBook/${props.book.book_id}`, {
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

  return (
    <div className="relative top-24 mb-10 bg-white shadow-xl shadow-blue-10 rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl ">
      <div className="items-start px-4 py-6">
        <div className="flex justify-between items-start">
          <div className="mb-4">
            {/* <p className="text-gray-700">Book-Name: {props.post.book_name}</p> */}
            <h1 className="text-4xl text-[#012a4a]">
              <strong>{props.book.book_name}</strong>
            </h1>
            {/* <h2 className="mt-3 text-gray-700 text-sm">{props.post.author}</h2> */}
            <h2 className="text-blue-8 text-sm ml-1">~ {props.book.author}</h2>
            {/* <h2 className="mt-3 text-gray-700 text-sm">Issued By : {props.post.}</h2> */}
            <h2 className="mt-3 text-blue-8 text-md font-semibold ml-1">
              Issued By : {props.book.user_first_name}{" "}
              {props.book.user_last_name}
            </h2>
            {/* <h2 className="mt-3 text-gray-700 text-sm">Email : {props.post.email}</h2> */}
            <h2 className="mt-1 text-blue-8 text-md font-semibold ml-1">
              Email : {props.book.email}
            </h2>
          </div>
          {/* <p className="mt-3 text-gray-700 text-sm">
              {props.post.status}
            </p> */}
          <div className="mr-4 mt-3 space-y-8">
            <h2 className="text-blue-8 text-md font-semibold ml-1">
              <span className="text-green-900 font-semibold text-sm bg-green-400 py-1 px-3 rounded-xl">
                {" "}
                Issued Date
              </span>{" "}
              : {new Date(props.book.issue_date).toLocaleDateString()}
            </h2>
            <h2 className="text-blue-8 text-md font-semibold ml-1">
              <span className="text-red-900 font-semibold text-sm bg-red-400 py-1 px-3 rounded-xl">
                {" "}
                Return Date
              </span>{" "}
              : {new Date(props.book.return_date).toLocaleDateString()}
            </h2>
          </div>
          {/* <div>
            <p className="mt-4 mr-12 text-green-900 font-semibold text-sm bg-green-400 py-1 px-3 rounded-xl">Available</p>
          </div> */}
        </div>

        <div className="grid">
          <div className="justify-self-end text-gray-700 text-sm mr-[5.5rem]">
            {isLoading ? (
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
                className="text-lg font-semibold border-2 border-blue-8 hover:bg-blue-2 hover:text-white hover:border-blue-2 px-7 py-2 rounded-md text-blue-8"
              >
                Return
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
