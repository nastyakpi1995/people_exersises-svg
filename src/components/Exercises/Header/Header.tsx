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
    return <h1>loading</h1>;
  }

  if (!areExercisesFound && !loading) {
    return <h1>Sorry currently no exercises for {chosenPart}</h1>;
  }

  return <TopHeader> Found {amount} exercises </TopHeader>;
};

const TopHeader = styled.div`
  width: 340px;
  height: 42px;
  margin: 40px auto;
  font-size: 36px;
  line-height: 42px;
`;

export default Header;
