import styled from "styled-components";
import { postList, shortsList } from "../../apis/index";
import { ShortsList, PostList } from "../organisms";

const Main = () => {
  return (
    <Wrapper>
      <Left>
        <ShortsList shortsList={shortsList} />
        <PostList postList={postList} />
      </Left>
      <Right></Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Left = styled.div`
  max-width: 614px;
  margin-right: 20px;
`;
const Right = styled.div`
  background: #fff;
  height: 500px;
  position: sticky;
  width: 100%;
  top: 80px;
`;

export default Main;
