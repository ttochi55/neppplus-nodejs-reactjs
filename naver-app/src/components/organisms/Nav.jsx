import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const linkList = [
  { link: "/", name: "main" },
  { link: "/movie", name: "movie" },
  { link: "/book", name: "book" },
];

const Nav = () => {
  // let location = useLocation();
  // const [showNav, setShowNav] = useState(false);

  // useEffect(() => {
  //   console.log(pathname);
  //   const flag = pathname !== "/";
  //   setShowNav(flag);
  // }, [pathname]);

  // if (!showNav) {
  //   return <></>;
  // }
  let { pathname } = useLocation();

  if (pathname === "/") {
    return <></>;
  }

  return (
    <Container>
      <LinkList>
        {linkList.map(({ link, name }) => {
          return (
            <LinkItem key={link}>
              <StyeldLink to={link} active={(pathname === link).toString()}>
                {name}
              </StyeldLink>
            </LinkItem>
          );
        })}
      </LinkList>
    </Container>
  );
};

const Container = styled.header`
  height: 50px;
  background: #ffffff;
  width: 100vw;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 0 -10px;
`;
const LinkList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const LinkItem = styled.li`
  margin: 10px;
`;
const StyeldLink = styled(Link)`
  padding: 5px 10px;
  ${({ active }) => {
    return (
      !!JSON.parse(active) &&
      css`
        background: #000;
        color: #fff;
      `
    );
  }}
`;

export default Nav;
