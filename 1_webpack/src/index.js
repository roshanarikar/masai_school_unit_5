import {Sum} from "./calc";
import "./index.css"

console.log(Sum(50,69));



const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.innerText = "HELLO WORLD";

h1.setAttribute("class","redtext")
root.appendChild(h1);