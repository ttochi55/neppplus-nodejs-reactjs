import React from "react";
import styled, { css } from "styled-components";

// 요청 변수
// https://developers.naver.com/docs/serviceapi/search/movie/movie.md#영화
// display: 검색 결과 출력 건수를 지정한다. 최대 100까지 가능하다.
// start: 검색의 시작 위치를 지정할 수 있다. 최대 1000까지 가능하다.

// display: 한 페이지에 몇개씩 나오냐(10)
// start: 현재 페이지의 첫번째 아이템 순번
// 1page: 1
// 2page: 11
// 3page: 21

// total: 네이버 API가 보내주는 값. 마지막 페이지 결정
// 1 : 1
// 9 : 1
// 10 : 1
// 11 : 2
// 20 : 2
// 21 : 3
// 100 : 10
// 101 : 11

const Pagination = ({ total, nowPage, onChange }) => {
  const display = 10;
  const lastPage = Math.ceil(total / display);
  // const lastPage = Math.floor((total - 1) / display) + 1;

  // 1 ~ 10
  // 11 ~ 20
  // 91 ~ 100
  const startPage = Math.floor((nowPage - 1) / display) * display + 1;
  const endPage = startPage + 9 < lastPage ? startPage + 9 : lastPage;

  const pageList = [];

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  return (
    <List>
      {nowPage > 1 && (
        <BtnPage onClick={() => onChange(nowPage - 1)}>Previous</BtnPage>
      )}

      {pageList.map((page) => (
        <BtnPage
          active={nowPage === page}
          key={page}
          onClick={() => onChange(page)}
        >
          {page}
        </BtnPage>
      ))}

      {lastPage > nowPage && (
        <BtnPage onClick={() => onChange(nowPage + 1)}>Next</BtnPage>
      )}
    </List>
  );
};

const List = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
`;
const BtnPage = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #000;
      color: #fff;
    `}
`;

export default Pagination;
