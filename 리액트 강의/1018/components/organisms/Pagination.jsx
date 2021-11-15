import styled from "styled-components";

const Pagination = ({ total, display = 10, nowPage, handlePage }) => {
  // 전체 아이템 갯수에서 페이지당 아이템 갯수를 나누고
  // 소수점 올림을 하면 전체 페이지 갯수가 나온다.
  const lastPage = Math.ceil(total / display);

  // 빈 배열에 1부터 lastPage까지의 숫자를 담는다
  const pageList = [];
  //   [1,2,3,4,5~~ ,lastPage]
  for (let i = 1; i <= lastPage; i++) {
    pageList.push(i);
  }

  return (
    <>
      {pageList.map((i) => (
        <Button key={i} onClick={() => handlePage(i)}>
          {i}
        </Button>
      ))}
    </>
  );
};

const Button = styled.button``;

export default Pagination;
