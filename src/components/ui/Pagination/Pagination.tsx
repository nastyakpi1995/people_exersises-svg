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
    <ComponentPagination className="сomponent-pagination">
      <Back
        onClick={() => onHandlePrevPage()}
        disabled={page === minPage && true}
      />
      <p>
        Page {page} of {maxPage}
      </p>
      <Next
        onClick={() => onHandleNextPage()}
        disabled={page === maxPage && true}
      />
    </ComponentPagination>
  );
};

const ComponentPagination = styled.div`
  width: 230px;
  height: 64px;
  background: #ebe9e7;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  color: green;
  height: auto%;
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
  cursor: pointer;

  &[disabled] {
    color: gray;
  }

  &:hover:not([disabled]) {
    background: #aab2bb;
    color: white;
    transition: all 0.9s;
  }
`;

const Back = styled(Arrow)`
  &:after {
    content: '<';
  }
`;

const Next = styled(Arrow)`
  &:after {
    content: '>';
  }
`;

export default Pagination;
