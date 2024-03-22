import React, { useState, useMemo, useRef } from "react";

export default function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name: name,
        price: +price,
      },
    ]);

    setName("");
    setPrice("");

    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((total, product) => {
      console.log("Re-calculating...");

      return total + product.price;
    }, 0);

    return result;
  }, [products]);

  //   console.log(products);
  //   console.log(total);

  return (
    <div>
      <h2>useMemo()</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
        ref={nameRef}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <p>Total: {total}</p>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
