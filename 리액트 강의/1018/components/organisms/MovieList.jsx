import styled from "styled-components";

const MovieList = ({ movieList }) => {
  return (
    <List>
      {movieList.map((movie) => (
        <Item>
          <p dangerouslySetInnerHTML={{ __html: movie.title }} />
          <img src={movie.image} alt="poster" />
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  padding: 0;
  grid-gap: 10px;
`;
const Item = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default MovieList;
