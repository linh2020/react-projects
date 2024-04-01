import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { ColumnOrder } from "./components/ColumnOrder";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { RowSelection } from "./components/RowSelection";
import { SortingTable } from "./components/SortingTable";

function App() {
  return (
    <div className="App">
      <h1>React Table</h1>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      <ColumnOrder />
    </div>
  );
}

export default App;
