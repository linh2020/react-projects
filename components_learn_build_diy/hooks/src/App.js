import "./App.css";
import UseMemo from "./components/hooks-demo/useMemo-demo/demo-1/UseMemo";
import UseMemo2 from "./components/hooks-demo/useMemo-demo/demo-2/UseMemo2";

function App() {
  return (
    <div className="App" style={{ height: "1000px" }}>
      <h1>Hooks</h1>
      {/* useState() */}

      {/* useMemo() */}
      <UseMemo />
      <UseMemo2 />

      {/*  */}
    </div>
  );
}

export default App;
