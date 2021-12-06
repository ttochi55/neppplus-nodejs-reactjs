import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search, List } from "../organisms/movie";
// import Search from "../organisms/movie/Search";
// import List from "../organisms/movie/List";
import { getMovieList } from "../../api/movie";
import Pagination from "../organisms/Pagination";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [total, setTotal] = useState(0);
  const [params, setParams] = useState({ query: "", country: "all" });
  const [page, setPage] = useState(1);

  // select 값이 바뀔때마다 실행 시키기
  useEffect(() => {
    search();
  }, [params, page]);

  const handleChange = ({ name, value }) => {
    console.log(name, value);
    // console.log(params);
    setPage(1);
    setParams({ ...params, [name]: value });
    // setParams({ [name]: value });
    console.log(params);
  };
  const handleChangePage = (page) => setPage(page);

  const search = async () => {
    const { query, country } = params;

    if (!query) {
      return;
    }

    // page : start
    // 1 : 1
    // 2 : 11
    // 3 : 21
    // 10 : 99

    const start = (page - 1) * 10 + 1;
    const form = { query, start };

    // 국가 전체 선택이면 country 파라미터 넣지 않음.
    if (country !== "all") {
      form.country = country;
    }

    const result = await getMovieList(form);
    console.log(result);

    setMovieList(result.items);
    setTotal(result.total);
  };

  return (
    <>
      <Title>영화 검색</Title>
      <Search onChange={handleChange} />
      <List movieList={movieList} />
      <Pagination total={total} onChange={handleChangePage} nowPage={page} />
    </>
  );
};

const Title = styled.h1`
  padding: 0 10px;
`;

export default Movie;
