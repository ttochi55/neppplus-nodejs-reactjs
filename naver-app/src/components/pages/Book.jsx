import React, { useState, useEffect } from "react";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Search, List } from "../organisms/book";
import { getBookList } from "../../api/book";
import Pagination from "../organisms/Pagination";

// 1. 검색컴포넌트 / 리스트 출력 컴포넌트
// 2. 검색어 입력 후 submit 되면 부모 컴포넌트에서 검색어 받아와서 api로 제출
//    api 주소: /v1/search/book.json
// 3. 결과값을 리스트 컴포넌트에 넘겨준다.
// 4. 리스트 컴포넌트는 결과값 출력

const Book = () => {
  let navigate = useNavigate();

  let { search } = useLocation();

  const [bookList, setBookList] = useState([]);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // const query = qs.parse(search.slice(1));
    const { query } = qs.parse(search.replace("?", ""));

    if (query) {
      setQuery(query);
      searchBookList({ query });
    }
  }, [search]);

  useEffect(() => {
    searchBookList({ query });
  }, [page]);

  const searchBookList = async ({ query }) => {
    if (!query) {
      return;
    }

    // 쿼리스트링에 검색 결과 고정 시키기
    const search = qs.stringify({ query });
    navigate({ search });

    const start = (page - 1) * 10 + 1;
    const result = await getBookList({ query, start });

    setBookList(result.items);
    setTotal(result.total);
  };

  const handleSubmit = () => {
    setPage(1);
    searchBookList({ query });
  };

  return (
    <>
      <Title>책 검색</Title>
      <Search
        // onSubmit={() => searchBookList({ query })}
        onSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
      />
      <List bookList={bookList} />
      <Pagination total={total} nowPage={page} onChange={setPage} />
    </>
  );
};

const Title = styled.h1`
  padding: 0 10px;
`;

export default Book;
