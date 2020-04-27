import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface OwnProps {
  areExercisesFound: boolean;
  amount: number;
  chosenPart: string;
  loading: boolean;
}
type Props = OwnProps;

const Header: FunctionComponent<Props> = ({
  amount,
  areExercisesFound,
  chosenPart,
  loading,
}) => {
  if (loading) {
    return <TopHeader style={{ textAlign: 'center' }}>Loading...</TopHeader>;
  }

  if (!areExercisesFound && !loading) {
    return <TopHeader>Sorry currently no exercises for {chosenPart}</TopHeader>;
  }

  return <TopHeader> Found {amount} exercises </TopHeader>;
};

const TopHeader = styled.div`
  width: 340px;
  height: 42px;
  margin: 10px auto;
  font-size: 36px;
  line-height: 42px;
`;

export default Header;
