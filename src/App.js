import React, {useState} from "react";
import './App.css';
import Calculator from "./components/calculator/calculator";
import TodoList from "./components/todolist/TodoList";


function App() {
    const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div>
        <div className='header'>
            <h3 className='title'>Треня JS</h3>
            <div className='btnBlock'>
                <button className='btnNav'
                        onClick={() => setActiveComponent('calculator')}>
                    Калькулятор
                </button>
                <button className='btnNav'
                        onClick={() => setActiveComponent('todo')}>
                    Список задач
                </button>
                <button className='btnNav'></button>
                <button className='btnNav'></button>
            </div>
        </div>
        <div>
            {activeComponent === 'calculator' && <Calculator />}
            {activeComponent === 'todo' && <TodoList />}
        </div>
    </div>
  );
}

export default App;
