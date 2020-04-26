/* eslint-disable @typescript-eslint/no-empty-interface */
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

  return (
    <Container>
      <WrapperImg>
        <WrapperBody>
          <Body onSetChosenPart={setChosenPart} chosenPart={chosenPart} />
        </WrapperBody>
        <Button text="Reset" onHandleClick={setChosenPart.bind(null, '')} />
      </WrapperImg>
      <Exercises
        chosenPart={chosenPart}
        list={exercises || []}
        loading={loading}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const WrapperImg = styled.div`
  flex-direction: column;
  background: #c4c4c4;
  width: 576px;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 40px;
  align-items: center;
`;

const WrapperBody = styled.div`
  width: fill-available;
  display: flex;

  & svg {
    overflow: hidden;
    box-sizing: border-box;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
  }
`;

export default Layout;
