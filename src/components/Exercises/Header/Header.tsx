/* eslint-disable react/jsx-one-expression-per-line */ import React, {
  FunctionComponent,
} from 'react';
import styled from 'styled-components';

interface OwnProps {
  areExercisesFound: boolean;
  amount: number;
  chosenPart: string;
}
type Props = OwnProps;
const Header: FunctionComponent<Props> = ({
  amount,
  areExercisesFound,
  chosenPart,
}) => {
  if (!areExercisesFound) {
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
