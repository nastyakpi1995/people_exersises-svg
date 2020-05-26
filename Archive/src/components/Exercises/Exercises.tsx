import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import Exercise from './Exercise/Exercise';
import Header from './Header/Header';
import Modal from '../ui/Modal/Modal';
import Spinner from '../ui/Spinner/Spinner';
import Pagination from '../ui/Pagination/Pagination';
import { ExerciseI } from '../../typings/interfaces';

interface OwnProps {
  list: ExerciseI[];
  chosenPart: string;
  loading: boolean;
}
type Props = OwnProps;

const limit = 6;

const Exercises: FunctionComponent<Props> = ({
  list = [],
  chosenPart,
  loading,
}) => {
  const [chosenExercise, setChosenExercise] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedExercises, setDisplayedExercises] = useState<
    ExerciseI[] | []
  >([]);

  const totalAmount = list?.length;
  const maxPage = totalAmount ? Math.ceil(totalAmount / limit) : 0;
  const clickedExercise = list?.find((ex) => ex.id === chosenExercise);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setDisplayedExercises(() => {
      const page = currentPage * limit;
      const exercises = list.slice(page, page + limit);
      return exercises;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setDisplayedExercises(() => {
      const page = (currentPage - 1) * limit;
      const exercises = list.slice(page - limit, page);
      return exercises;
    });
  };

  return (
    <>
      <RightScreen>
        <Content>
          {loading && <Spinner />}
          <Header
            amount={totalAmount}
            areExercisesFound={!!totalAmount}
            chosenPart={chosenPart}
            loading={loading}
          />
          <List>
            {(displayedExercises.length ? displayedExercises : list)?.map(
              (ex: ExerciseI, index: number) => {
                if (index >= limit && !displayedExercises.length) return;

                return (
                  <Exercise
                    key={ex.id}
                    ex={ex}
                    onHandleChooseExercise={setChosenExercise}
                    inModal={false}
                  />
                );
              }
            )}
          </List>
        </Content>
        {!loading &&
          (displayedExercises.length
            ? !!displayedExercises.length
            : !!list.length) && (
            <Pagination
              page={currentPage}
              maxPage={maxPage}
              onHandleNextPage={handleNextPage}
              onHandlePrevPage={handlePrevPage}
            />
          )}
      </RightScreen>
      {clickedExercise && (
        <Modal
          show={!!chosenExercise}
          onHandleModalClose={setChosenExercise.bind(null, 0)}
        >
          <Exercise
            ex={clickedExercise}
            inModal
            onHandleModalClose={setChosenExercise.bind(null, 0)}
          />
        </Modal>
      )}
    </>
  );
};

const RightScreen = styled.div`
  height: 80%;

  @media (min-width: 1101px) {
    width: 100%;
  }
`;

const Content = styled.div`
  min-width: fit-content;
  position: relative;
  padding: 0 16px;
  height: auto;
`;

const List = styled.div`
  display: grid;
  width: inherit;
  grid-template-columns: 1fr;
  grid-gap: 21px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100vh;

  @media (min-height: 801px) {
    height: 80vh;
  }

  @media (min-height: 601px) {
    height: auto;
  }

  @media (min-width: 601px) {
    grid-template-columns: repeat(2, 1fr);
    width: initial;
  }
`;

export default Exercises;
