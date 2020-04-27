import React, { useEffect, useReducer } from 'react';
import { ExerciseI } from '../typings/interfaces';

type fetchState = {
  data: ExerciseI[] | null;
  isLoading: boolean;
};

type fetchActions = {
  type: string;
  payload: ExerciseI[] | [] | null | boolean;
};

const initialState = {
  data: null,
  isLoading: true,
};

function reducer(state: fetchState, action: fetchActions) {
  return {
    ...state,
    [action.type]: action.payload,
  };
}

export default (urls: string[]) => {
  const [{ data, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    setTimeout(() => {
      try {
        let allExercises: ExerciseI[] = [];
        Promise.all(urls.map((u) => fetch(u)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((datas) => {
            allExercises = datas.map((el) => el.data);
            if (allExercises) {
              dispatch({ type: 'data', payload: allExercises.flat() });
              dispatch({ type: 'isLoading', payload: false });
            }
          });
      } catch (e) {
        console.log(e);
        dispatch({ type: 'isLoading', payload: false });
      }
    }, 3500);
  }, [urls]);
  return { data, isLoading };
};
