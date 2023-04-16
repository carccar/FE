import React from "react";
import { TodoItem } from "../components";

const Todo = () => {
    return (
        <div>
            <input type="text" value="할일을 적어보ㅏ" />
            <ul>
                <TodoItem />
            </ul>
        </div>
    )
}

export default Todo;