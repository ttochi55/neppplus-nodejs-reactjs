import styled from "styled-components";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Wrapper>
      <Link to="/movie">
        <Button>영화 검색</Button>
      </Link>
      <Link to="/book">
        <Button>책 검색</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;
const Button = styled.button`
  width: 300px;
  height: 80px;
  background: #fff;
  border: 1px solid #ccc;
  font-size: 20px;
  margin: 10px;
`;

export default MainPage;
