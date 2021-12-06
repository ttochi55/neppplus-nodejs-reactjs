import React, { useState } from "react";
import styled from "styled-components";

// https://developers.naver.com/docs/serviceapi/search/movie/movie.md#%EC%98%81%ED%99%94
const countryList = [
  { code: "all", name: "전체" },
  { code: "KR", name: "한국" },
  { code: "JP", name: "일본" },
  { code: "US", name: "미국" },
  { code: "HK", name: "홍콩" },
  { code: "GB", name: "영국" },
  { code: "FR", name: "프랑스" },
  { code: "ETC", name: "기타" },
];

const Search = ({ onChange }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({ name: "query", value: text });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <select
          onChange={(e) => onChange({ name: "country", value: e.target.value })}
        >
          {countryList.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <InputText onChange={(e) => setText(e.target.value)} />
        <BtnSearch>검색</BtnSearch>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  padding: 10px;
`;
const InputText = styled.input`
  flex: 1;
`;
const BtnSearch = styled.button`
  margin-left: 10px;
`;

export default Search;
