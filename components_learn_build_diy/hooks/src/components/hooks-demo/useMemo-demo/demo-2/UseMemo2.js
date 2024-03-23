import React, { useState, useMemo } from "react";

export default function UseMemo2() {
  const [chars, setChar] = useState([]);
  const [count, setCount] = useState(0);

  const handleInsert = () => {
    setChar([...chars, Math.round(Math.random())]);
  };

  let res = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    result += count;
    return result;
  }, [count]);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  console.log(chars);
  console.log(res);

  return (
    <div>
      <button onClick={handleInsert}>Insert</button> Chars: {chars}
      <br />
      <button onClick={handleAdd}>Total</button> Total: {res}
      <p>Total: {count}</p>
    </div>
  );
}
