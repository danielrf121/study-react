import React, { useEffect, useState } from 'react';

function Effect() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  
  console.log(`Entrou no component`);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    console.log(`Voce clicou ${count} vezes!`);
  }, [count]);

  // Posso ter varios effects
  useEffect(() => {
    console.log(`(2) - Voce clicou ${count2} vezes!`);
  }, [count2]);

  // Exemplo de função simples
  function counterTwo(param: number) {
    console.log('param', param);
    setCount2(param);
  }

  console.log(`Renderizou...`);

  return (
    <div>
      <h2>Efeito</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>(2) - You clicked {count2} times</p>
      <button onClick={() => counterTwo(count2 + 1)}>
        Click me 2
      </button>
    </div>
  );
}
  
export default Effect;