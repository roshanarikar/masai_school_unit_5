export const Navbar = ()=>{

    return (
        <>
        <div>
            <a href="/">Home</a>
            <a href="/login">{localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).email.split('@')[0]:"Profile"}</a>
        </div>
        </>
    )
}