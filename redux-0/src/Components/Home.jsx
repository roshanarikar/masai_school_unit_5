import {  addTodo, setTodo} from '../Redux/actionCreator'
import { useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export const Home = ()=>{
    const [text, setText] = useState("")
    const todos = useSelector((store)=> store.todo)
    const dispatch = useDispatch()
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        const a = await fetch("http://localhost:3001/todos")
        const b = await a.json()
        dispatch(addTodo(b))
    }

    async function postData(){
        console.log(text)
        const a = await fetch("http://localhost:3001/todos",{
            method : "POST",
            body : JSON.stringify({
                task : text,
                status : false
            }),
            headers : {
                'content-type' : "application/json"
            }

        })
        const b = await a.json()
        getData()
    }
    return (
        <>
        <h2>HOME</h2>
        <input/>
        <br /><br />
        <button onClick={postData}>Add Task</button>
        <ol>
            {todos?.map(todo=><li key={todo.id}><Link to={`todo/${todo.id}`}>{todo.task}</Link></li>)}
        </ol>
        </>
    )
}