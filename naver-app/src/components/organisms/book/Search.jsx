import React, { useState } from "react";
import styled from "styled-components";

const Search = ({ onSubmit, query, setQuery }) => {
  // const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputText onChange={(e) => setQuery(e.target.value)} value={query} />
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
