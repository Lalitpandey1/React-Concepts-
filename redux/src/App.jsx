import "./App.css";
import AddTodos from "./component/AddTodos";
import Todos from "./component/Todos";

function App() {
  return (
    <>
      <h1 className="bg-red-400">Learn About Redux</h1>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;
