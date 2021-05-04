import React from 'react';
import { useSelector } from 'react-redux';

function ReduxTwo() {
  const courses = useSelector((state: any) => state.data); // recebendo todo o state global da aplicacao

  return (
    <div>
      <h2>Redux Dois</h2>
      <ul>
        {courses.map((item: any) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default ReduxTwo;