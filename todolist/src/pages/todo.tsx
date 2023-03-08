import styles from '@/styles/todo.module.scss';
import { useState } from 'react';

type TodoItemType = {
    no: number,
    todo: number | string
}

function Todo() {

    const [inputValue, setInputValue] = useState<string | number>('');
    const [todoList, setTodoList] = useState<TodoItemType[]>([]);
    const [count, setCount] = useState<number>(0);

    const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addItem();
          }
    }

    const addItem = () => {
        if(inputValue == ''){
            return;
        }
        
        setTodoList([
            ...todoList,
            {
                no: count,
                todo: inputValue
            }
        ]);
        setCount(todoList.length + 1);
        setInputValue("");
    }

    const removeItem = (no:number) => {
        const newTodoList = todoList.filter((item) => item.no !== no);
        setTodoList(newTodoList);
    }

    const editItem = (no:number) => {
        const targetItem = todoList.find((item) => item.no === no);
        alert(targetItem?.todo);
    }

    return (
        <div className={styles.wrap}>
           <h1 style={{ fontWeight: '700', fontSize: '18px' }}>Todo List</h1>

            <div className={styles.input}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder="할일을 적어보자고"
                    onChange={valueChange}
                    onKeyUp={handleKeyDown}
                />
                <button className={styles.add} onClick={addItem}>
                    추가
                </button>
            </div>

            <ul className={styles.list}>
                {todoList.map((item)=> {
                    return(
                        <li className={styles.item} key={item.no}>
                            {item.todo}
                            <button type="button" onClick={()=> {
                                editItem(item.no)
                            }}>
                                수정
                            </button>
                            <button type="button" onClick={()=> {
                                removeItem(item.no)
                            }}>
                                삭제
                            </button>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Todo;