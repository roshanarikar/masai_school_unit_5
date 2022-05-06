import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Status } from "./Status";

export const Navbar = () => {
  const [token, setToken] = useState("Login");
  const { auth, toggleAuth, logout } = useContext(AuthContext);

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const loginReq = async () => {
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify({
          email: details.email,
          password: details.password,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      let data = await res.json();
      if (data.token) {
        toggleAuth(true);
        setToken(data.token);
      } else {
        setToken("Logged out");
        toggleAuth(false);
      }
      console.log("data", data);
    } catch (e) {
      console.log("e", e);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDetails({ ...details, [id]: value });
  };
  return (
    <div>
      <input type="email" id="email" placeholder="enter email here" onChange={(e) => handleChange(e)}
        required
      />
      <br></br>
      <input
        type="text" id="password" placeholder="enter password here" onChange={(e) => handleChange(e)}
        required
      />
<br/>
      <button id="button"
        onClick={() => {
          if (auth) {
            logout(auth);
          } else {
            loginReq();
          }
        }}
      >
        {auth ? "Logout" : "Login"}
      </button>
      <br />
      {auth ? <Status token={token} /> : <Status token={"Login"} />}
    </div>
  );
};
