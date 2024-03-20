import "./App.css";
import ToDoList_UseState from "./components/state_examples/UseState_ex/To-do_List/ToDoList_UseState";
import ToDoList_useReducer from "./components/state_examples/useReducer_ex/To-do_List/ToDoList_useReducer";

// import { ToDoList_useReducer } from "./components/state_examples/useReducer_ex/To-do_List/ToDoList_useReducer";

function App() {
  return (
    <div className="App">
      {/*  */}

      {/* https://react.dev/learn/extracting-state-logic-into-a-reducer?fbclid=IwAR30XfkCFMIpTcmB-4zNxXxUYJyrilNXN0WRoU0dacBot13PmSqITZrZqQI */}
      {/* <ToDoList_UseState /> */}

      <ToDoList_useReducer />

      {/*  */}
    </div>
  );
}

export default App;
