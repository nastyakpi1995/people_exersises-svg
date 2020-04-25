import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface OwnProps {
  page: number;
  maxPage: number;
  onHandleNextPage: Function;
  onHandlePrevPage: Function;
}
type Props = OwnProps;

const Pagination: FunctionComponent<Props> = ({
  page,
  maxPage,
  onHandleNextPage,
  onHandlePrevPage,
}) => {
  const minPage = 1;

  return (
    <CompontentPagination>
      <Back
        onClick={() => onHandlePrevPage()}
        disabled={page === minPage && true}
      />
      <p>Page {page}</p>
      <Next
        onClick={() => onHandleNextPage()}
        disabled={page === maxPage && true}
      />
    </CompontentPagination>
  );
};

const CompontentPagination = styled.div`
  width: 230px;
  height: 64px;
  grid-column-start: 2;
  grid-row-start: 2;
  background: #ebe9e7;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 23px auto;
  color: green;
`;

const Arrow = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: #ebe9e7;
  color: #0000ff;
  border-radius: 10px;
  margin: 0 10px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  &[disabled] {
    color: gray;
  }

  &:hover:not([disabled]) {
    background: #aab2bb;
    color: white;
    transition: all 0.9s;
  }
`;

const Back = styled(Arrow)<any>`
  &:after {
    content: '<';
  }
`;

const Next = styled(Arrow)<any>`
  &:after {
    content: '>';
  }
`;

export default Pagination;
