// import React from 'react'
import styled from "styled-components"



export  const Heading =styled.h1`
      margin-left: 30px;
      color:#0000ff;
      `;

 export const Button = styled.button`
        width:200px;
        height:40px;
        margin:40px;
        border:2px solid #0000ff;
        background-color: #00eeff;
        cursor: pointer;

 `;
 export  const Div =styled.div`
        display:flex;
        justify-content:space-around;
        height:100vh;
        background-color:${(props)=>props.theme==="dark" ? "#000023" : "#fff9f9" };
      
 `;

export const Rectangularbtn = styled.button`
       position: absolute;
        width: 87px;
        height: 45px;
        left: 494px;
        top: 28px;

        background: #C4C4C4;
        border-radius: 20px;

`;
export const Round =styled.button`
       
       position: absolute;
        width: 47px;
        height: 47px;
        left: 534px;
        top: 27px;
       border-radius: 30px;
        background: #29CB97;
        cursor: pointer;
       
        
      
      
      &:active{
        position: absolute;
       width: 47px;
       height: 47px;
       left: 493px;
       top: 27px;

       background: #2991CB;
      }

      &:focus{
       position:absolute;
       width: 47px;
       height: 47px;
       left: 493px;
       top: 27px;

       background: #2991CB; 
      }
`;
