import "./App.css";
import ToDoList_UseState from "./components/state_examples/UseState_ex/To-do_List/ToDoList_UseState";

function App() {
  return (
    <div className="App">
      {/*  */}

      {/* https://react.dev/learn/extracting-state-logic-into-a-reducer?fbclid=IwAR30XfkCFMIpTcmB-4zNxXxUYJyrilNXN0WRoU0dacBot13PmSqITZrZqQI */}
      <ToDoList_UseState />

      {/*  */}
    </div>
  );
}

export default App;
