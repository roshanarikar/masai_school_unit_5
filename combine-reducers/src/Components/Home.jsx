import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { addTodo } from "../Redux/Todo/action"


export const Home = ()=>{

    const [ text, setState ] = useState("")
    const configUrl = "http://localhost:3001/todos"
    const dispatch = useDispatch()
    const todos = useSelector((store)=>store.todo)

    useEffect(()=> getData(),[])

    async function getData(){
        const a1 = await fetch(configUrl)
        const a2 = await a1.json()
        dispatch(addTodo(a2))
    }
    
    async function postData(){
        const todoObj = {
            task : text,
            status : false
        }
        const arg = {
            method : "POST",
            body : JSON.stringify(todoObj),
            headers : { "content-type" : "application/json" }
        }
        const a1 = await fetch(configUrl ,arg)
        const a2 = await a1.json()
        getData()
    }

    async function updateData(todo){
        const todoObj = {
            task : todo.text,
            status : todo.status?false:true
        }
        const arg = {
            method : "PATCH",
            body : JSON.stringify(todoObj),
            headers : { "content-type" : "application/json" }
        }
        const a1 = await fetch(configUrl+`/${todo.id}` ,arg)
        const a2 = await a1.json()
        getData()
    }

    async function deleteData(id){
        const arg = {
            method : "DELETE",
            headers : { "content-type" : "application/json" }
        }
        const a1 = await fetch(configUrl+`/${id}`,arg)
        const a2 = await a1.json()
        getData()
    }
    return (
        <>
            { localStorage.getItem('user')?"":<Navigate to='/login'></Navigate>}
            <h2>Home</h2>
            <h4>Todos</h4>
            <br />
            <input onChange={(e)=>setState(e.target.value)} type="text"/>
            <button onClick={postData}>Add Todo</button>
            <br /><br />
            <table style={{ 
                border : "1px solid black",
            }}>
                <thead>
                    <tr>
                        <th style={{ border : "1px solid black"}}>Todo</th>
                        <th style={{ border : "1px solid black"}}>Status</th>
                        <th style={{ border : "1px solid black"}}>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    { todos.map((todo, index)=><tr>
                        <td style={{ border : "1px solid black"}}>{ todo.task}</td>
                        <td style={{ border : "1px solid black"}}><button onClick={()=>updateData(todo)}>{ todo.status? "Executed":"Pending"}</button></td>
                        <td style={{ border : "1px solid black"}}><button onClick={()=>deleteData(todo.id)}>Remove</button></td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}