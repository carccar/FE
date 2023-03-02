import { useState } from "react";
import "./css/Todo.css";
import TodoList from "../components/TodoList";

type TodoItemType = {
  no: number;
  text: string | number;
};

const Todo = () => {
  const [inputValue, setInputValue] = useState<string | number>("");
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [count, setCount] = useState<number>(0);

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const addItem = () => {
    if(inputValue == '') {
        return
    }

    setTodoList([
      ...todoList,
      {
        no: count,
        text: inputValue,
      },
    ]);
    setCount(todoList.length + 1);
    setInputValue("");
    
  };

  const removeItem = (no:number) => {
    const newTodoList = todoList.filter((item) => item.no !== no);
    setTodoList(newTodoList);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className="todo">
      <div className="todo-input-wrap">
        <input
          type="text"
          value={inputValue}
          placeholder="할일을 적장"
          className="todo-input"
          onChange={valueChange}
          onKeyUp={handleKeyDown}
        />
        <button type="button" onClick={addItem}>
          추가
        </button>
      </div>

      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;