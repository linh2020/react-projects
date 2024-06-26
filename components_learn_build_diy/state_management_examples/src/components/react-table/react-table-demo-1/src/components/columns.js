import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

// export const COLUMNS = [
//   {
//     Header: "Id",
//     Footer: "Id",
//     accessor: "id",
//   },
//   {
//     Header: "First Name",
//     Footer: "First Name",
//     accessor: "first_name",
//   },
//   {
//     Header: "Last Name",
//     Footer: "Last Name",
//     accessor: "last_name",
//   },
//   {
//     Header: "Date of Birth",
//     Footer: "Date of Birth",
//     accessor: "date_of_birth",
//   },
//   {
//     Header: "Country",
//     Footer: "Country",
//     accessor: "country",
//   },
//   {
//     Header: "Phone",
//     Footer: "Phone",
//     accessor: "phone",
//   },
// ];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    sticky: "left",
    // Filter: ColumnFilter,
    // disableFilters: true,
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
        // sticky: "left",
        // Filter: ColumnFilter,
        // disableFilters: true
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
        // sticky: "left",
        // Filter: ColumnFilter,
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
        // Filter: ColumnFilter,
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
        // Filter: ColumnFilter,
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
        // Filter: ColumnFilter,
      },
    ],
  },
];
