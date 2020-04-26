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

const Exercises: FunctionComponent<Props> = ({
  list = [],
  chosenPart,
  loading,
}) => {
  const [chosenExercise, setChosenExercise] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [displayedExercises, setDisplayedExercises] = useState<
    ExerciseI[] | []
  >([]);
  const totalAmount = list?.length;
  const maxPage = totalAmount ? Math.ceil(totalAmount / limit) : 0;
  const clickedExercise = list?.find((ex) => ex.id === chosenExercise);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setDisplayedExercises((prevExercises: ExerciseI[]) => {
      const page = currentPage * limit;
      const exercises = list.slice(page, page + limit);
      return exercises;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setDisplayedExercises((prevExercises: ExerciseI[]) => {
      const page = (currentPage - 1) * limit;
      const exercises = list.slice(page - limit, page);
      return exercises;
    });
  };

  return (
    <>
      <Container>
        {loading && <Spinner />}
        <Header
          amount={totalAmount}
          areExercisesFound={!!totalAmount}
          chosenPart={chosenPart}
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
      </Container>
      <Pagination
        page={currentPage}
        maxPage={maxPage}
        onHandleNextPage={handleNextPage}
        onHandlePrevPage={handlePrevPage}
      />

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

const Container = styled.div`
  padding: 21px;
  max-height: 80vh;
  height: 80vh;
  overflow: hidden;
  position: relative;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  width: 904px;
  grid-gap: 21px;
  box-sizing: border-box;
`;

export default Exercises;
