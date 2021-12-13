import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostList } from "../../apis/post";
import styled from "styled-components";

const UserName = () => {
  const { userName } = useParams();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    (async () => {
      const { postList } = await getPostList({ userName });
      setPostList(postList);
    })();
  }, [userName]);

  return (
    <div>
      <PostList>
        {postList.map(({ id, imageList }) => (
          <PostThumbnail key={id} src={imageList[0]} />
        ))}
        {/* {postList.map(({ id, imageList }) =>
          imageList.map((image) => <PostThumbnail key={id} src={image} />)
        )} */}
      </PostList>
    </div>
  );
};

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 20px;
`;
const PostThumbnail = styled.img`
  width: 100%;
  height: auto;
`;

export default UserName;
