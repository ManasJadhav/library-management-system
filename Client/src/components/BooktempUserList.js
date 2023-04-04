import React, { useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

export default function BooktempUserList(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const deleteBook = async () => {
    setIsLoading(true);
    const res = await fetch(`/deleteUser/${props.user._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    });
    const data = await res.json();
    console.log(data);
    setIsLoading(false);
    if (data.errors) {
      navigate("/");
    } else {
      props.setReload((prev) => !prev);
    }
  };

  return (
    <div className="relative top-24 mb-10 bg-white shadow-xl shadow-blue-10 rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl ">
      <div className="flex px-4 py-6 items-center justify-between">
        <div className="flex justify-between">
          <div className="mb-4">
            {/* <p className="text-gray-700">Book-Name: {props.post.book_name}</p> */}
            <h1 className="pt-6 text-4xl text-[#012a4a]">
              <strong>
                {props.user.first_name}
                {props.user.last_name}
              </strong>
            </h1>
            {/* <h2 className="mt-3 text-gray-700 text-sm">{props.post.author}</h2> */}
            <h2 className="text-blue-8 text-sm ml-1">~ {props.user.email}</h2>
          </div>
          {/* <p className="mt-3 text-gray-700 text-sm">
              {props.post.status}
            </p> */}
        </div>

        <div className="mr-2 text-gray-700 text-sm">
          <div className="flex flex-col space-y-8 mr-10">
            <button
              type="button"
              onClick={() => {
                navigate(`/admin/updateuser/${props.user._id}`);
              }}
              className="border-2 border-blue-8 hover:bg-blue-2 hover:text-white hover:border-blue-2 px-6 py-3 rounded-md text-blue-8"
            >
              Update
            </button>

            {!isLoading ? (
              <button
                onClick={deleteBook}
                type="button"
                className="text-md border-2 border-blue-8 hover:bg-blue-2 hover:text-white hover:border-blue-2 px-6 py-3 rounded-md text-blue-8"
              >
                Delete
              </button>
            ) : (
              <ReactLoading
                type={"cylon"}
                color={"#89C2D9"}
                height={"7%"}
                width={"7%"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
