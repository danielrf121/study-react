import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Redux() {
  const courses = useSelector((state: any) => state.data); // recebendo todo o state global da aplicacao
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({
      type: 'ADD_COURSE',
      title: 'MongoDB'
    });
  }

  return (
    <div>
      <h2>Redux</h2>
      <ul>
        {courses.map((item: any) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <button onClick={() => addCourse()}>
        Add new
      </button>
    </div>
  );
}

export default Redux;