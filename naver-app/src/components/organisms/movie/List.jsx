import React from "react";
import styled from "styled-components";

const List = ({ movieList }) => {
  return (
    <ListWrapper>
      {movieList.map((movie) => (
        <a key={movie.title} href={movie.link} target="_blank" rel="noreferrer">
          <Item>
            <Img src={movie.image} />
            {/* <Title>{movie.title}</Title> */}
            <Title dangerouslySetInnerHTML={{ __html: movie.title }} />
            <span>
              {movie.pubDate} / <span>{movie.userRating}</span>
            </span>
          </Item>
        </a>
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
