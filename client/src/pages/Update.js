import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";

export default function Update(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  //sj change

  const [Book, setBook] = useState({
    book_name: "",
    author: "",
  });

  const UpdateBook = async () => {
    setIsLoading(true);
    const res = await fetch(`/update/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Book),
    });
    const data = await res.json();
    setIsLoading(false);
    console.log(data);
    if (data.errors) {
      navigate("/");
    } else {
      navigate("/admin/allBooksadmin");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const getDetailsBook = async (e) => {
      const res = await fetch(`/getBook/${id}`);
      const data = await res.json();
      if (data.errors) {
        setIsLoading(false);
        navigate("/");
      } else {
        setIsLoading(false);
        setBook(data.data);
      }
    };
    getDetailsBook();
  }, []);

  return (
    <div>
      <form>
        <div className="grid place-items-center h-screen">
          <div className=" w-3/4 p-8 border  bg-blue-1 shadow-lg shadow-blue-8/80 rounded-lg  text-blue-8">
            <div className="flex justify-center items-center mb-6">
              <h3 className="text-lg mr-5">Book_Name</h3>
              <input
                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="text"
                placeholder="Enter Book Name"
                value={Book.book_name}
                onChange={(e) => {
                  const tempBook = { ...Book };
                  tempBook.book_name = e.target.value;
                  setBook(tempBook);
                }}
              />
              <br />

              <h3 className="text-lg mr-5 ml-3">Author</h3>
              <input
                className="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="text"
                placeholder="Enter Author"
                value={Book.author}
                onChange={(e) => {
                  const tempBook = { ...Book };
                  tempBook.author = e.target.value;
                  setBook(tempBook);
                }}
              />
              <br />
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
                  onClick={UpdateBook}
                  type="submit"
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
