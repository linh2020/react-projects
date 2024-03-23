import "./App.css";
import UseMemo from "./components/hooks-demo/useMemo-demo/demo-1/UseMemo";
import UseMemo2 from "./components/hooks-demo/useMemo-demo/demo-2/UseMemo2";
import UseMemo3 from "./components/hooks-demo/useMemo-demo/demo-3/UseMemo3";

function App() {
  return (
    <div className="App" style={{ height: "1000px" }}>
      <h1>Hooks</h1>
      {/* useState() */}

      {/* useMemo() */}
      {/* <UseMemo /> */}
      <UseMemo2 />
      <UseMemo3 />

      {/*  */}
    </div>
  );
}

export default App;
