import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
