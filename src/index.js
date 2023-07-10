import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const obj1 = {
  title: "Atomic Habits",
  author: "James Clear",
  image:
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
};

const obj2 = {
  title: "Elon Musk",
  author: "Elon",
  image:
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
};

const BookList = () => {
  return (
    <React.Fragment>
      <h1 className="heading">Top Sellers Books Of The Year</h1>
      <section className="bookList">
        <Book author={obj1.author} title={obj1.title} img={obj1.image} />
        <Book author={obj2.author} title={obj2.title} img={obj2.image} />
      </section>
    </React.Fragment>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img}></img>
      <h2>{props.author}</h2>
      <h2>{props.title}</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
