import { useState } from 'react';

export default function UseStatusTest() {
  const [status, setStatus] = useState('inativo');

  console.log('hook!!!!!!!!!!!!!!');

  function handleTest(param: number) {
    console.log('handleTest', param);
    if (param === 1) {
      setStatus('ativo');
    } else {
      setStatus('inativo');
    }
  }

  return {
    status,
    handleTest
  };
}