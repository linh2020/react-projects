import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useTable } from "react-table";

import tw from "twin.macro";

const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
`;

const TableHead = tw.thead`
    p-2
`;

const TableRow = tw.tr`
    border
    border-green-500
`;

const TableHeader = tw.th`
    border
    border-green-500
    p-2
`;

const TableBody = tw.tbody`
    
`;

const TableData = tw.td`
    border
    border-green-500
    p-5
`;

const Button = tw.button`
    pl-4
    pr-4
    pt-2
    pb-2
    text-black
    rounded-md
    bg-green-300
    hover:bg-green-200
    transition-colors
`;

export function Products(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    if (response) {
      const products = response.data;
      console.log("Products: ", products);
      setProducts(products);
    }
  };

  //   const data = useMemo(
  //     () => [
  //       {
  //         id: 1,
  //         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //         price: 109.95,
  //         description:
  //           "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //         category: "men's clothing",
  //         image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //         rating: {
  //           rate: 3.9,
  //           count: 120,
  //         },
  //       },
  //       {
  //         id: 1,
  //         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //         price: 109.95,
  //         description:
  //           "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //         category: "men's clothing",
  //         image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //         rating: {
  //           rate: 3.9,
  //           count: 120,
  //         },
  //       },
  //       {
  //         id: 1,
  //         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //         price: 109.95,
  //         description:
  //           "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //         category: "men's clothing",
  //         image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //         rating: {
  //           rate: 3.9,
  //           count: 120,
  //         },
  //       },
  //     ],
  //     []
  //   );

  //   const columns = useMemo(
  //     () => [
  //       {
  //         Header: "Id",
  //         accessor: "id",
  //       },
  //       {
  //         Header: "Title",
  //         accessor: "title",
  //       },
  //       {
  //         Header: "Price",
  //         accessor: "price",
  //       },
  //     ],
  //     []
  //   );

  const tmpData = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  const productsData = useMemo(() => [...products], [products]);
  console.log("productsData: ", productsData);

  const productsColumns = useMemo(
    () =>
      products[0]
        ? Object.keys(products[0])
            .filter((key) => key !== "rating")
            .map((key) => ({ Header: key, accessor: key }))
        : [],
    [products]
  );

  console.log("productsColumns: ", productsColumns);

  const tableInstance = useTable({
    columns: productsColumns,
    data: productsData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeader {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableHeader>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell, index) => (
                <TableData {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </TableData>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
