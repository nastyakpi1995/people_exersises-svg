import React, { useEffect, useReducer } from 'react';
import { ExerciseI } from '../typings/interfaces';

type fetchState = {
  data: ExerciseI[] | [] | null;
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

export default (url: string) => {
  const [{ data, isLoading }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'isLoading', payload: true });
    setTimeout(() => {
      (async () => {
        try {
          const res = await fetch(url);
          const fetchedData = await res.json();
          dispatch({ type: 'data', payload: fetchedData.data });
          dispatch({ type: 'isLoading', payload: false });
        } catch (e) {
          console.log(e);
          dispatch({ type: 'isLoading', payload: false });
          dispatch({ type: 'data', payload: [] });
        }
      })();
    }, 1500);
  }, [url]);

  return { data, isLoading };
};
