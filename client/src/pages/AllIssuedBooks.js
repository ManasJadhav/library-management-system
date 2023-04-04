import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BooktempIssue from "../components/BooktempIssue";

export default function AllIssuedBooks(props) {
  const navigate = useNavigate();
  const [Book, setBook] = useState([]);
  useEffect(() => {
    async function handleBook() {
      const res = await fetch("/viewSelfIssuedBooks");
      const data = await res.json();
      if (data.error) {
        navigate("/");
      } else {
        setBook(data.data);
      }
    }
    handleBook();
  }, []);

  return (
    <div className="ml-96">
      {Book.map((book) => {
        return <BooktempIssue book={book} />;
      })}
    </div>
  );
}
