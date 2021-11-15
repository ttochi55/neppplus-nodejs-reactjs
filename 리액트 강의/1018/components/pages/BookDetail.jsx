import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../../apis/book";

const BookDetailPage = () => {
  const [book, setBook] = useState({});
  let { isbn } = useParams();

  useEffect(() => {
    // IIFE 즉시실행함수
    (async () => {
      const result = await getBookDetail({ isbn });
      setBook(result.items[0] || {});
    })();
  }, [isbn]);

  return (
    <div>
      <img src={book.image} />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetailPage;
