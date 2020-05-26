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
  const { data, isLoading } = useFetch(`${chosenPart}.json`);

  const { data: allData, isLoading: allIsLoading } = useFetchAll(
    currentExercises
  );

  const exercises = chosenPart === '' ? allData : data;
  const loading = isLoading || allIsLoading;

  return (
    <Container>
      <LeftContainer>
        <SvgWrapper>
          <Body onSetChosenPart={setChosenPart} chosenPart={chosenPart} />
        </SvgWrapper>
        <Button text="Reset" onHandleClick={setChosenPart.bind(null, '')} />
      </LeftContainer>
      <RigthContainer>
        <Exercises
          chosenPart={chosenPart}
          list={exercises || []}
          loading={loading}
        />
      </RigthContainer>
    </Container>
  );
};

const RigthContainer = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  overflow: auto;

  @media (min-width: 900px) {
    grid-template-columns: 35% 65%;
  }
`;

const LeftContainer = styled.div`
  flex-direction: column;
  background: #c4c4c4;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 40px;
  align-items: center;

  @media (min-width: 900px) {
    height: initial;
    display: flex;
    justify-content: center;
  }
`;

const SvgWrapper = styled.div`
  width: fill-available;
  display: flex;

  & svg {
    overflow: hidden;
    box-sizing: border-box;
    object-fit: cover;
    width: 100%;
    position: relative;
    display: block;
    margin: 40px;
  }

  @media (min-width: 1101px) {
    margin: 0;
  }
`;

export default Layout;
