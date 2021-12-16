import './App.css';
import TodoList from './component/TodoList';
import TodoPostInput from './component/TodoPostInput';
import TodoProvider from "./context/TodoProvider";


function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoProvider>
        <TodoPostInput/>
        <TodoList/>  
      </TodoProvider>
    </div>
    
  );
}

export default App;
