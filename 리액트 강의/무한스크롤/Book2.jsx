import { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getBooks } from "../../apis/book";
import qs from "qs";
import { Pagination, BookList } from "../organisms";

const BookPage = () => {
  let history = useHistory();
  let { search } = useLocation();
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);

  const apiMode = useRef("set");
  const [nowPage, setNowPage] = useState(1);

  const total = useRef(0);

  const display = 10;

  useEffect(() => {
    const { query } = qs.parse(search.slice(1));

    if (query) {
      setQuery(query);
      searchBooks({ query });
    }
  }, [search]);

  useEffect(() => {
    searchBooks({ query });
  }, [nowPage]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiMode.current = "set";
    setNowPage(1);
    searchBooks({ query });

    const search = qs.stringify({ query });

    history.push({
      search,
    });
  };

  const searchBooks = async ({ query }) => {
    if (!query) return;
    const result = await getBooks({
      query,
      start: display * (nowPage - 1) + 1,
    });

    const { items } = result;
    if (apiMode.current === "set") {
      setBookList(items || []);
    } else if (apiMode.current === "add") {
      setBookList((prev) => (items ? [...prev, ...items] : []));
    }

    total.current = result.total;
  };

  const addPage = () => {
    apiMode.current = "add";
    setNowPage((prev) => prev + 1);
  };

  return (
    <>
      <h1>네이버 책 검색</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} />
        <button>검색</button>
      </form>
      <BookList bookList={bookList} addPage={addPage} total={total} />
    </>
  );
};

export default BookPage;
