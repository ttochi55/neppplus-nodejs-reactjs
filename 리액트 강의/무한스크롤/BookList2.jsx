import { Link } from "react-router-dom";
import { useCallback, useRef } from "react";
import styled from "styled-components";

const BookList = ({ bookList, addPage, total }) => {
  const observer = useRef();

  const lastItemRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && total.current > 0) {
        addPage();
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <List>
      {bookList.map((book, i) => (
        <Link
          to={`/book/${book.isbn.split(" ")[1]}`}
          key={book.isbn}
          ref={bookList.length - 1 === i ? lastItemRef : null}
        >
          <Item>
            <p dangerouslySetInnerHTML={{ __html: book.title }} />
            <img src={book.image} alt="poster" />
          </Item>
        </Link>
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

export default BookList;
