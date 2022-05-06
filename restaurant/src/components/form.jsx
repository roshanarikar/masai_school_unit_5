import { useState } from "react";


export const Form = () => {
const [formData,setForm] = useState({
    name:"",
    accepts_card:"",
    votes:"",
    reviews:"",
    cost:"",
    ratings:"",
    image:""
})
const handleChange=(el)=>{
    
    setForm({
        ...formData,
        [el.target.id]:el.target.value
    })
}
const addForm=(e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/restaurant", {
        method: "Post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    console.log(formData)
}

  return (
    <form> 
      <input onChange={handleChange} id="name" type="text" placeholder="Enter Name"/>
      <select onChange={handleChange} name="" id="accepts_card">
          <option value="">Choose one</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
      </select>
      <input onChange={handleChange} id="votes" type="number"  placeholder="Total votes"/>
      <input onChange={handleChange} id="reviews" type="number" placeholder="Total reviews"/>
      <input onChange={handleChange} id="cost" type="number" placeholder="Cost for one"/>
      <input onChange={handleChange} id="ratings" type="number" placeholder="Ratings"/>
      <input onChange={handleChange} id="image" type="text" placeholder="Image url"/>
      <input onClick={addForm} id="" type="submit" name="" />
    </form>
  );
};