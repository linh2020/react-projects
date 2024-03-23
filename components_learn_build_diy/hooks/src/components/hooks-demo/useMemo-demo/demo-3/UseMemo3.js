import React, { useState, useMemo } from "react";

function expensiveFunction(number) {
  console.log("time start");
  const start = new Date();

  while (new Date() - start < 3000);

  console.log("end ", new Date() - start, "ms");

  return number * number;
}

export default function UseMemo3() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);

  const number = useMemo(() => {
    return expensiveFunction(num);
  }, [num]);

  //   console.log(count);

  return (
    <div>
      <h2>UseMemo3</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setNum(Math.random())}>Increase</button>

      <p>Number: {number}</p>
      <p>Random Number: {num}</p>
    </div>
  );
}
