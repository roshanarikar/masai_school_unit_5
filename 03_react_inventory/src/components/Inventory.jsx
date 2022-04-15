import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens : 11,
  });
    // Create add and remove functions here that changes the
    // state.

     //Books
     const addBooks = ()=>{
       setInv(preState=>{
         return {...preState,books:inv.books++}
       })
     }

     const removeBooks =()=>{
       if(inv.books <=0){
         return
       }
       setInv(preState=>{
         return {...preState,books:inv.books++}
       })
     }
    //NoteBooks
    const addNotebooks = ()=>{
      setInv(preState=>{
        return {...preState,notebooks:inv.notebooks++}
      })
    }

    const removeNotebooks =()=>{
      if(inv.notebooks <=0){
        return
      }
      setInv(preState=>{
        return {...preState,notebooks:inv.notebooks++}
      })
    }
    //Pen
    const addPens = ()=>{
      setInv(preState=>{
        return {...preState,pens:inv.pens++}
      })
    }

    const removePens =()=>{
      if(inv.pens <=0){
        return
      }
      setInv(preState=>{
        return {...preState,pens:inv.pens++}
      })
    }
    //InkPen
    const addInkpen = ()=>{
      setInv(preState=>{
        return {...preState,inkpens:inv.inkpens++}
      })
    }

    const removeInkpen =()=>{
      if(inv.inkpens <=0){
        return
      }
      setInv(preState => {
        return {...preState,inkpens:inv.inkpens++}
      })
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books:</span>
        <button onClick={addBooks} className="circlularButton">+</button>
        <button onClick={removeBooks} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button onClick={addNotebooks} className="circlularButton">+</button>
        <button onClick={removeNotebooks} className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick={addPens} className="circlularButton">+</button>
        <button onClick={removePens} className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button onClick={addInkpen} className="circlularButton">+</button>
        <button onClick={removeInkpen} className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            
      total: {inv.books+inv.pens+inv.notebooks+inv.inkpens}
    </div>
  );
};
