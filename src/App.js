import './App.css';
import TodoList from './component/TodoList';
import TodoPostInput from './component/TodoPostInput';
import Provider from "./context/AppProvider";


function App() {
  return (
    <Provider>
      <div className="App">
        <h1>Todo List</h1>
        <TodoPostInput/>
        <TodoList/>     
      </div>
    </Provider>
    
  );
}

export default App;
