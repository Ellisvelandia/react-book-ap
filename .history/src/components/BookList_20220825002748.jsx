import React, {useState, useEffect} from "react";
import React from "react";
import "../App";
import { API_URL } from "../API";
import axios from "axios";

const BookList = () => {

  const [Books, setBooks] = useState([]);

  useEffect(() => {
    axios
    .get(API_URL)
    .then((res) => {
      console.log(res.data);
      setBooks(res.data);
    })
    .catch((err))
  }, [])
  return <div className="book-list">BookList</div>;
};

export default BookList;
