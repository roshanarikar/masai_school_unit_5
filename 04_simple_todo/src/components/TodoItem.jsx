export const TodoItem = ({todo,handleStatus})=>{
    return (
        <div>
            <div>id:{todo.id}</div>
            {todo.title} - {todo.status ? "Done" : "Not Done"} 
            <button onClick={()=> handleStatus(todo.id)}>Toggle</button>
        </div>
    )
}