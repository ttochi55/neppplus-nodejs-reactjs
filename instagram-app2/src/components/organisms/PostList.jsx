import styled from "styled-components";

const PostList = ({ data }) => {
  return (
    <List>
      {data.map((post) => (
        <Container key={post.id}>
          <Header>
            <ProfileImage src={post.profile_image} />
            <UserName>{post.user_name}</UserName>
          </Header>
          <Main>
            {post.imageList.map((image, index) => (
              <PostImage key={index} src={image} />
            ))}
          </Main>
        </Container>
      ))}
    </List>
  );
};

const List = styled.div``;
const Container = styled.article`
  background: #fff;
  border: 1px solid #dbdbdb;
  margin-bottom: 24px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const UserName = styled.span`
  flex: 1;
  margin-left: 12px;
  color: #262626;
`;
const Main = styled.main``;
const PostImage = styled.img`
  width: 100%;
`;

export default PostList;
