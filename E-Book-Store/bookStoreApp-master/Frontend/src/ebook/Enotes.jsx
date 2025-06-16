import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "../components/Navbar";  // Adjust the import path according to your project structure

function Ebook() {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    const getEbooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.category === "Ebook");
        console.log(data);
        setEbooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getEbooks();
  }, []);

  

  return (
    <>
      <h1>aman dixit</h1>
    </>
  );
}

export default Ebook;
