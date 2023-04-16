import styles from '@/styles/todo.module.scss';
import { useState } from 'react';
import { atom, useAtom } from 'jotai';

type TodoItemType = {
    no: number,
    todo: number | string,
    done: boolean
}
const inputValueAtom = atom<string | number>('');
const todoListAtom = atom<TodoItemType[]>([]);
const countAtom = atom<number>(1);
const editNoAtom = atom<number | null>(null);


export default function Todolist(){

    // const [inputValue, setInputValue] = useState<string | number>('');
    // const [todoList, setTodoList] = useState<TodoItemType[]>([]);
    // const [count, setCount] = useState<number>(1);
    // const [editNo, setEditNo] = useState<number | null>(null);
    const [inputValue, setInputValue] = useAtom(inputValueAtom);
    const [todoList, setTodoList] = useAtom(todoListAtom);
    const [count, setCount] = useAtom(countAtom);
    const [editNo, setEditNo] = useAtom(editNoAtom);

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addItem()
        }
    }

    const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInputValue(inputValue)
    }



    //todo 추가
    const addItem = () => {
        if(inputValue == '') {
            return;
        }

        if(editNo !== null) {
            const newTodoList = todoList.map((item) => {
                if(item.no === editNo) {
                    return (
                        {
                            ...item,
                            todo: inputValue
                        }
                    )
                }
                return item;
            });

            setTodoList(newTodoList);
            setInputValue('');
            setEditNo(null);

            return;
        }

        setTodoList([
            ...todoList,
            {
                no: count,
                todo: inputValue,
                done: false
            }
        ]);

        setCount(count + 1);
        setInputValue('');
        // console.log(todoList);

        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    //todo 삭제
    const removeItem = (no:number) => {
        const newTodoList = todoList.filter((item) => item.no !== no);

        setTodoList(newTodoList);
    }

    //todo 수정
    const editItem = (no:number) => {
        const targetItem = todoList.find((item) => item.no === no);

        setInputValue(targetItem?.todo || '');
        setEditNo(no);
    }

    //todo 완료
    const doneItem = (no:number) => {
        const newTodoList = todoList.map((item) => {
            if(item.no === no) {
                return (
                    {
                        ...item,
                        done: !item.done
                    }
                )
            }
            return item;
        });
        setTodoList(newTodoList);
    }

    //위치 이동 up
    const upMove = (no: number) => {

        const targetIndex = todoList.findIndex((item) => item.no === no);
        
        if(targetIndex === 0) {
            return;
        }

        const newTodoList = [...todoList];
        const currentItem = newTodoList[targetIndex];
        const newItemIndex = targetIndex - 1;

        newTodoList.splice(targetIndex, 1);

        newTodoList.splice(newItemIndex, 0, currentItem);

        setTodoList(newTodoList)
    };

    //위치 이동 down
    const upDown = (no: number) => {

        const targetIndex = todoList.findIndex((item) => item.no === no);
        const lastIndex = todoList.length -1;
        if(targetIndex == lastIndex) {
            return;
        }
        const newTodoList = [...todoList];
        const currentItem = newTodoList[targetIndex];
        const newItemIndex = targetIndex + 1;

        newTodoList.splice(targetIndex, 1);
        newTodoList.splice(newItemIndex, 0, currentItem);

        setTodoList(newTodoList)
    };
    

    return (
        <div className={styles.wrap}>
            <h1 style={{ fontWeight: '700', fontSize: '18px' }}>Todo List</h1>

            <div className={styles.input}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder="할일을 적어보자고"
                    onChange={valueChange}
                    onKeyUp={handleKeyUp}
                />
                <button className={styles.modify} onClick={addItem}>
                    {editNo !== null ? '수정' : '추가'}
                </button>
            </div>

            {todoList.length > 0 && 
                <ul className={styles.list}>
                    {todoList.map((item) => {
                        return (
                            <li className={styles.item} key={item.no}>
                                {item.no}. {item.todo}
                                <button type="button" onClick={() => {editItem(item.no)}}>
                                    수정
                                </button>
                                <button type="button" onClick={() => {removeItem(item.no)}}>
                                    삭제
                                </button>
                                <button type="button" onClick={() => {doneItem(item.no)}}>
                                    완료
                                </button>
                                <button type="button" onClick={() => {upMove(item.no)}}>
                                    ⬆️
                                </button>
                                <button type="button" onClick={() => {upDown(item.no)}}>
                                    ⬇️
                                </button>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}