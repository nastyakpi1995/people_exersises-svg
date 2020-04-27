import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Body from '../../Body/Body';
import useFetch from '../../../hooks/useFetch';
import useFetchAll from '../../../hooks/useFetchAll';
import Exercises from '../../Exercises/Exercises';

const currentExercises = ['foot.json', 'hip.json', 'leg.json', 'neck.json'];

interface OwnProps {}
type Props = OwnProps;

const Layout: FunctionComponent<Props> = () => {
  const [chosenPart, setChosenPart] = useState('');
  const { data, error, isLoading } = useFetch(`${chosenPart}.json`);

  const {
    data: allData,
    error: allError,
    isLoading: allIsLoading,
  } = useFetchAll(currentExercises);

  const exercises = chosenPart === '' ? allData : data;
  const loading = isLoading || allIsLoading;
  console.log(loading, 'loading');
  return (
    <Container>
      <LeftContainer>
        <WrapperBody>
          <Body onSetChosenPart={setChosenPart} chosenPart={chosenPart} />
        </WrapperBody>
        <Button text="Reset" onHandleClick={setChosenPart.bind(null, '')} />
      </LeftContainer>
      <Exercises
        chosenPart={chosenPart}
        list={exercises || []}
        loading={loading}
      />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  overflow: auto;
  height: max-content;

  @media (min-widht: 800px) {
    grid-template-columns: 50% 50%;
  }
`;

const LeftContainer = styled.div`
  // position: relative;
  flex-direction: column;
  background: #c4c4c4;
  height: fit-content;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 40px;
  align-items: center;

  @media (min-width: 601px) {
    width: 576px;
  }

  @media (min-width: 1101px) {
    height: 100%;
  }
`;

const WrapperBody = styled.div`
  width: fill-available;
  display: flex;
  // position: absolute;
  // top: 50%;
  // transform: translateY(-50%);

  & svg {
    overflow: hidden;
    box-sizing: border-box;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    margin: 40px;
  }

  @media (min-width: 1101px) {
    margin: 0;
  }
`;

export default Layout;
