import { useEffect, useState, useCallback } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getBooks } from "../../apis/book";
import qs from "qs";

const BookPage = () => {
  let history = useHistory();
  let { search } = useLocation();
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const { query } = qs.parse(search.slice(1));

    setQuery(query);
    searchBooks({ query });
  }, [search]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchBooks({ query });

    const search = qs.stringify({ query });

    history.push({
      search,
    });
  };

  const searchBooks = async ({ query }) => {
    const result = await getBooks({ query });
    setBookList(result.items || []);
  };

  return (
    <>
      <h1>네이버 책 검색</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} />
        <button>검색</button>
      </form>
      {bookList.map((book) => (
        <Link to={`/book/${book.isbn.split(" ")[1]}`} key={book.isbn}>
          <p dangerouslySetInnerHTML={{ __html: book.title }} />
          <img src={book.image} alt="poster" />
        </Link>
      ))}
    </>
  );
};

export default BookPage;
