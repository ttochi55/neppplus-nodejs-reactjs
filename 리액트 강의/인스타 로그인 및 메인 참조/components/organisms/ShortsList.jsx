import styled from "styled-components";

const ShortsList = ({ shortsList }) => {
  return (
    <ShortsContainer>
      {shortsList.map((shorts) => (
        <Shorts key={shorts.id}>
          <ProfileImage src={shorts.user.profileImage} />
          <Name>{shorts.user.name}</Name>
        </Shorts>
      ))}
    </ShortsContainer>
  );
};

const ShortsContainer = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin-bottom: 24px;
  margin-top: 0;
  padding: 16px 0;
  height: 120px;
  display: flex;
`;
const Shorts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  width: 74px;
`;
const ProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;
const Name = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-align: center;
  font-size: 12px;
  color: #262626;
`;
export default ShortsList;
