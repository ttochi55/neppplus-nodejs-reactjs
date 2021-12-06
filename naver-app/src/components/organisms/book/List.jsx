import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = ({ bookList }) => {
  return (
    <ListWrapper>
      {bookList.map((book) => (
        // <a key={book.isbn} href={book.link} target="_blank" rel="noreferrer">
        <Link key={book.isbn} to={`/book/${book.isbn}`}>
          <Item>
            <Img src={book.image} />
            {/* <Title>{book.title}</Title> */}
            <Title dangerouslySetInnerHTML={{ __html: book.title }} />
            <span>
              {book.pubDate} / <span>{book.publisher}</span>
            </span>
          </Item>
        </Link>
        // </a>
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Item = styled.div`
  padding: 5px;
  cursor: pointer;
`;
const Title = styled.p`
  font-weight: bold;
`;
const Img = styled.img`
  width: 100%;
`;

export default List;
