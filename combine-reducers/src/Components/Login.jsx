import { useState } from "react"
import { Navigate } from 'react-router-dom'

export const Login = ()=>{

    const tempUser = {
        email : "",
        password : ""
    }
    const [ user, setUser] = useState(tempUser)
    function userHandler(e){
        const { name, value} = e.target
        setUser({ ...user,[name] : value})
    }

    async function loginUser(){
        if(localStorage.getItem("user"))
            return 
        const configUrl = `https://reqres.in`
        const arg = {
            method : "POST",
            body : JSON.stringify(user),
            headers : { "content-type" : "application/json"}
        }
        const a1 = await fetch(configUrl+`/api/register`, arg)
        const a2 = await a1.json()
        if(a2.error)
            return alert("Invalid Credentials")
        localStorage.setItem("user", JSON.stringify({...user, token : a2.token}))
        alert("Logged in successfully")
        location.href = "http://localhost:3000/"
    }
    function logOutUser(){
        if(!localStorage.getItem("user"))
            return
        localStorage.clear("user")
        alert("Logged out successfully")
        location.reload()
    }
    return (
        <>
            <div>
                <input name="email" onChange={userHandler}/>
                <br /><br />
                <input name="password" onChange={userHandler}/>

                <br /><br />
                <button onClick={loginUser}>Login</button>
                <br></br>
                <br></br>
                <button onClick={logOutUser}>Logout</button>
            </div>
        </>
    )
}