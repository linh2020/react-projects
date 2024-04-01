import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import { useMemo } from "react";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";

import "./table.css";
import { CheckBox } from "./CheckBox";

export const RowSelection = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(() => {
    return { Filter: ColumnFilter };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    { columns, data, defaultColumn, initialState: { pageIndex: 0 } },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <CheckBox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { pageIndex, globalFilter, pageSize } = state;
  const firstPageRows = rows.slice(0, 10);

  return (
    <>
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.canFilter ? column.render("Filter") : null}
                  </span>
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination-btn">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        {/* Go to page */}
        <span>
          | Go to page
          <input
            className="goToPage-btn"
            type="text"
            value={pageIndex + 1}
            // defaultValue={pageIndex + 1}
            onChange={(e) => {
              gotoPage(e.target.value ? Number(e.target.value - 1) : 0);
            }}
          />
        </span>

        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            window.scrollTo(0, 0);
          }}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            gotoPage(0);
          }}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>

        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>

        <button
          onClick={() => {
            gotoPage(pageCount - 1); // can use pageOptions.length - 1
          }}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>

      {/* Show raw data */}
      <pre className="shown-raw-data">
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
};
