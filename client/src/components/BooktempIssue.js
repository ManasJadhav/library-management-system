import React from "react";
import { useNavigate } from "react-router-dom";

export default function BooktempIssue(props) {
  const navigate = useNavigate();

  return (
    <div className="relative top-24 mb-10 bg-white shadow-xl shadow-blue-10 rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl ">
      <div className="items-start px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="mb-4">
            {/* <p className="text-gray-700">Book-Name: {props.post.book_name}</p> */}
            <h1 className="text-4xl text-[#012a4a]">
              <strong>{props.book.book_name}</strong>
            </h1>
            {/* <h2 className="mt-3 text-gray-700 text-sm">{props.post.author}</h2> */}
            <h2 className="text-blue-8 text-sm ml-1">
              ~ {props.book.user_first_name} {props.book.user_last_name}
            </h2>
          </div>
          {/* <p className="mt-3 text-gray-700 text-sm">
              {props.post.status}
            </p> */}
          <div className="mr-4 space-y-7">
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
              :{new Date(props.book.return_date).toLocaleDateString()}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
