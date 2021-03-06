import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/organisms";
import { Main, Movie, Book, BookDetail } from "./components/pages";
// import Main from "./components/pages/Main";
// import Movie from "./components/pages/Movie";
// import Book from "./components/pages/Book";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book/:isbn" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
