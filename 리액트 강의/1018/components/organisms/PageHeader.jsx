import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const PageHeader = () => {
  // let location = useLocation();
  // location.pathname
  let { pathname } = useLocation();

  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [pathname]);

  const linkList = [
    {
      name: "main",
      link: "/",
    },
    {
      name: "movie",
      link: "/movie",
    },
    {
      name: "book",
      link: "/book",
    },
  ];

  return (
    <>
      {isShow && (
        <nav>
          <List>
            {linkList.map((e) => (
              <Item key={e.link}>
                <Link to={e.link} key={e.link}>
                  {e.name}
                </Link>
              </Item>
            ))}
          </List>
        </nav>
      )}
    </>
  );
};

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  padding: 10px;
`;
const Item = styled.li`
  padding: 0 15px;
  font-size: 18px;
`;

export default PageHeader;
