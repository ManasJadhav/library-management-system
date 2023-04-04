import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BooktempIssueUser from "../components/BooktempIssueUser";

export default function AllBooksUser(props) {
  const navigate = useNavigate();
  const [Book, setBook] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    async function handleGetBook() {
      const res = await fetch("/viewAllBooks");
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        navigate("/");
      } else {
        setBook(data.data);
      }
    }
    handleGetBook();
  }, [reload]);

  return (
    <div className="ml-96">
      {Book.map((book) => {
        return <BooktempIssueUser book={book} setReload={setReload} />;
      })}
    </div>
  );
}
