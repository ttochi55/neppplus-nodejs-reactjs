import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <img src="https://instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png" />
      <Right>
        <Container>
          <LogoImage src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          <Form>
            <Input placeholder="전화번호, 사용자 이름 또는 이메일" />
            <Input placeholder="비밀번호" />
            <BtnLogin>로그인</BtnLogin>
          </Form>
        </Container>
        <Container>
          <div>
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </div>
        </Container>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Right = styled.div``;
const Container = styled.div`
  width: 350px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 10px 0;
  & + & {
    margin-top: 20px;
  }
`;

const LogoImage = styled.img`
  width: 175px;
  height: 51px;
  margin: 22px 0;
`;

const Form = styled.form`
  padding: 0 40px;
`;
const Input = styled.input`
  width: 100%;
  height: 36px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  margin-bottom: 6px;
  padding: 0 10px;
`;

const BtnLogin = styled.button`
  width: 100%;
  margin: 8px 0;
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 30px;
`;
export default Login;
