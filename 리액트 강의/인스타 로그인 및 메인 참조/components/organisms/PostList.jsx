import styled from "styled-components";

const PostListComponent = ({ postList }) => {
  return (
    <PostList>
      {postList.map((post, i) => (
        <PostContainer>
          <Header>
            <HeaderProfileImage src={post.user.profileImage} />
            <HeaderUserName>{post.user.name}</HeaderUserName>
          </Header>
          <Main>
            {post.imageList.map((image) => (
              <PostImage src={image.image} />
            ))}
          </Main>
        </PostContainer>
      ))}
    </PostList>
  );
};

const PostList = styled.div``;
const PostContainer = styled.article`
  background: #fff;
  border: 1px solid #dbdbdb;
  margin-bottom: 24px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px;
`;
const HeaderProfileImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const HeaderUserName = styled.div`
  flex: 1;
  margin-left: 12px;
  color: #262626;
`;

const Main = styled.main``;

const PostImage = styled.img`
  width: 100%;
`;
export default PostListComponent;
