import { useCallback, useEffect, useState } from "react";
import movieApi from "../../apis/movie";
import { MovieList, Pagination } from "../organisms";

const MoviePage = () => {
  //   한국 (KR), 일본 (JP), 미국 (US), 홍콩 (HK),
  // 영국 (GB), 프랑스 (FR), 기타 (ETC)

  const display = 10;
  const countryList = [
    {
      name: "한국",
      code: "KR",
    },
    {
      name: "일본",
      code: "JP",
    },
    {
      name: "미국",
      code: "US",
    },
    {
      name: "홍콩",
      code: "HK",
    },
    {
      name: "영국",
      code: "GB",
    },
    {
      name: "프랑스",
      code: "FR",
    },
    {
      name: "기타",
      code: "ETC",
    },
  ];

  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("KR");
  const [movieList, setMovieList] = useState([]);
  const [total, setTotal] = useState(0);
  const [nowPage, setNowPage] = useState(1);

  useEffect(() => {
    getMovies();
  }, [nowPage, country]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setCountry(value);
  };

  const getMovies = async () => {
    const result = await movieApi.getMovies({ query, country, start: nowPage });
    setMovieList(result.items || []);
    setTotal(result.total);
  };

  const handlePage = (page) => {
    setNowPage(page);
  };

  return (
    <>
      <h1>네이버 영화 검색</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={handleCountryChange}>
          {countryList.map((c) => (
            <option value={c.code} key={c.code}>
              {c.name}
            </option>
          ))}
        </select>

        <input onChange={handleChange} />
        <button>검색</button>
      </form>
      <MovieList movieList={movieList} />
      <Pagination
        total={total}
        display={display}
        nowPage={nowPage}
        handlePage={handlePage}
      />
    </>
  );
};

export default MoviePage;
