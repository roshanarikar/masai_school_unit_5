import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams,Navigate } from "react-router-dom"
import { addTodo, changeStatus, deleteTodo } from "../Redux/actionCreator"

export const Todo = ()=>{
    const todos = useSelector((store)=>store.todo)
    const { id } = useParams()
    let todo 
    for(let i = 0;i<todos.length;i++)
    {
        if(todos[i].id == id)
            {
                todo = todos[i]
                break
            }
    }
    const dispatch = useDispatch()
    return (
        <>
            <h2>TODO</h2>
            { todo== undefined ? <Navigate to={'/'}/> : <table>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Status</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{todo.task}</td>
                        <td><button onClick={()=> dispatch(changeStatus(todo))}>{todo?.status?"Executed" : "Pending"}</button></td>
                        <td><button onClick={()=> dispatch(deleteTodo(todo?.id))}>Remove</button></td>
                    </tr>
                </tbody>
            </table>}
            
        </>
    )
}