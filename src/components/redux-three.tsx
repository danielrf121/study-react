import React from 'react';
import { useDispatch } from 'react-redux';

function ReduxThree() {
  const dispatch = useDispatch();

  const updateData = [
    'JAVA',
    'PHP',
    'JAVASCRIPT'
  ];

  function updateCourse() {
    dispatch({
      type: 'UPDATE_ALL_COURSE',
      updateData: updateData
    });
  }

  return (
    <div>
      <h2>Redux Tres</h2>
      <button onClick={() => updateCourse()}>
        Alterar tudo
      </button>
    </div>
  );
}

export default ReduxThree;