import {useState} from "react";
import TodoList from "./components/TodoList";
import './css/Todo.css';

const Todo = ()  => {
  
    const [value, setValue] = useState<string | number>('');

    const valueChange = (e:any) => {
        setValue(e.target.value);
    }

    const addList = () => {
        
    }

    return (
        <div className="todo">
            <div className="todo-input-wrap">
                <input 
                    type="text"
                    value={value}
                    placeholder="할일을 적장" className="todo-input"
                    onChange={valueChange}
                />
                <button type="button" onClick={addList}>
                    추가
                </button>
            </div>

           <TodoList />
        </div>
    )
}

export default Todo;
