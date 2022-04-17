export const TodoItem = ({todo,handleStatus})=>{
    return (
        <div>
           
            {todo.title} - {todo.status ? "Done" : "Not Done"} 
            <button onClick={()=> handleStatus(todo.id)}>Toggle</button>
        </div>
    )
}