import { useState } from 'react';
import { TodoItem } from "../components";

type TodoItemType = {
    no: number,
    todo: number | string,
}

const Todo = () => {

    const [inputValue, setInputValue] = useState<string | number>('');
    const [todoList, setTodoList] = useState<TodoItemType[]>([]);
    const [count, setCount] = useState<number>(1);

    const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInputValue(inputValue)
    }

    //추가
    const addItem = () => {
        setTodoList([
            ...todoList,
            {
                no: count,
                todo: inputValue,
            }
        ]);

        setCount(count + 1);
        setInputValue('');
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                placeholder="할일 적어보ㅏ"
                onChange={valueChange}
            />

                <button onClick={addItem}>
                    추가
                </button>
            {/* <ul>
                <TodoItem />
            </ul> */}
            <ul>
                {todoList.map((item) => {
                    return (
                        <TodoItem key={item.no}>
                            {item.no}. {item.todo}
                        </TodoItem>
                        {/* <li key={item.no}>
                            {item.no}. {item.todo}
                            <button type="button" onClick={() => {removeItem(item.no)}}>
                                삭제
                            </button>
                        </li> */}

                    )
                })}
            </ul>
        </div>
    )
}

export default Todo;