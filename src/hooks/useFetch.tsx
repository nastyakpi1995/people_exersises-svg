import React, { useEffect, useReducer } from 'react';

type fetchState = {
  error: any;
  data: any;
  isLoading: boolean;
};

type fetchActions = {
  type: string;
  payload: any;
};

const initialState = {
  error: null,
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
  const [{ data, error, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const res = await fetch(url);
          const fetchedData = await res.json();
          dispatch({ type: 'data', payload: fetchedData.data });
          dispatch({ type: 'isLoading', payload: false });
        } catch (e) {
          dispatch({ type: 'error', payload: e });
          dispatch({ type: 'isLoading', payload: false });
        }
      })();
    }, 1500);
  }, [url]);
  return { data, error, isLoading };
};
