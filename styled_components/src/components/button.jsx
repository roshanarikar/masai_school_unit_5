 import styled from "styled-components";


 const Button = styled.button`
    min-width:200px;
   font-size:20px;
   padding:9px 9px;
   margin-left:50px;
   margin-top:50px;
   cursor:pointer;
   background-color:${props=>
   props.text==="primary" ? "blue" : "white"
};
   border:${props=>
    props.text==="default" ? "1px solid grey" : "none"
};
    border:${props=>
    props.text==="dashed" ? "4px dotted grey" : ""
};
color:${props=>
    props.text==="link" ? "blue" : "black"
};
color:${props=>
    props.text==="primary" ? "white" : ""
};
`;
 
 export { Button };