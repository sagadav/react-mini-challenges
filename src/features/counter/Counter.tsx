import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <p>hello</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>t</button>
    </div>
  );
};

export default Counter;
