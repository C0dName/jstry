import React, {useState} from "react";
import './App.css';
import Calculator from "./components/calculator/calculator";
import TodoList from "./components/todolist/TodoList";
import Sorting from "./components/sorting/Sorting";


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
                <button className='btnNav'
                        onClick={() => setActiveComponent('sorting')}>
                    Сортировка
                </button>
                <button className='btnNav'></button>
            </div>
        </div>
        <div>
            {activeComponent === 'calculator' && <Calculator />}
            {activeComponent === 'todo' && <TodoList />}
            {activeComponent === 'sorting' && <Sorting />}
        </div>
    </div>
  );
}

export default App;
