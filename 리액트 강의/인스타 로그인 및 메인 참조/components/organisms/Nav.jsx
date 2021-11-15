import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const NavComponent = () => {
  let { pathname } = useLocation();
  const isRender = pathname !== "/login";
  return (
    <>
      {isRender && (
        <Header>
          <NavWrapper>
            <Link to="/">
              <LogoImage src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
            </Link>
            <Nav>
              <ProfileImage src="https://cdn.topstarnews.net/news/photo/201802/364393_7891_3546.jpg" />
            </Nav>
          </NavWrapper>
        </Header>
      )}
    </>
  );
};

const Header = styled.header`
  background: #fff;
  position: fixed;
  top: 0;
  height: 54px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
`;

const NavWrapper = styled.div`
  max-width: 975px;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  width: 104px;
  cursor: pointer;
`;
const Nav = styled.nav``;
const ProfileImage = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
`;

export default NavComponent;
