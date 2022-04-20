import styled from "styled-components";


const Button = styled.button`
   background-color: green;
   padding: 20px;
   margin : 10px;
   border-radius: 10px;
   background: ${(props)=> (props.theme === "light" ? "yellow" : "green")};
   color: ${(props)=> (props.theme === "light" ? "green": "yellow")};

   &:hover{
      box-shadow: yellow 0 3px 8px;
   }
`;

export {Button};