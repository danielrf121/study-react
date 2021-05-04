import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>State</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
  
export default Count;