import { useState } from "react";
import {TodoInput} from "./TodoInput";
import {TodoItem} from "./TodoItem";
import {nanoid} from "nanoid"

function Todo(){
    const [todosList,setTodosList] = useState([]);

    const getData = (todo)=>{
        const payload = {
            title: todo,
            status: false,
            id: nanoid(5),
        };
        setTodosList([...todosList,payload])
    }
    const handleStatus = (id) =>{
        console.log("id",id);
        setTodosList(
            todosList.map((e)=> (e.id === id ? { ...e,status: !e.status}:e))        )
    };
    return (
        <div>
            <TodoInput getData={getData}/>
            { todosList.map((e)=>(
                <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
            ))}
        </div>
    );
}

export{Todo}