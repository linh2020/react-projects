import React, { useState, useMemo } from "react";

export default function UseMemo2() {
  const [chars, setChar] = useState([]);
  let [total, setTotal] = useState(Math.random());

  const handleInsert = () => {
    setChar([...chars, Math.round(Math.random())]);
  };

  const res = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [total]);

  const handleAdd = () => {
    total += res;
    setTotal(total);
  };

  console.log(chars);
  console.log(res);

  return (
    <div>
      <button onClick={handleInsert}>Insert</button> Chars: {chars}
      <br />
      <button onClick={handleAdd}>Total</button> Total: {total}
    </div>
  );
}
