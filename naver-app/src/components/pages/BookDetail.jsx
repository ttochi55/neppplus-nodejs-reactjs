import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../../api/book";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const { isbn } = useParams();

  // 상세 페이지에 대한 정보는 최초 한번만 실행 하면 됨.
  useEffect(() => {
    // console.log(isbn);
    (async () => {
      const result = await getBookDetail({ isbn });
      setBook(result.items[0]);
    })();
  }, [isbn]);

  if (!book) return <>로딩 중</>;
  // if (Object.keys(book).length === 0) return <>로딩 중</>;

  console.log(book);
  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.image} alt="thumbnail" />
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
