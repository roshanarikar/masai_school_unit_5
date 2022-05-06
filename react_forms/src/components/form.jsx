import {useState,useEffect} from 'react'
import axios from 'axios'

export const Forms =()=>{
    const [formData, setFormData] = useState({
        name :"",
        age:"",
        address:"",
        department:"",
        salary:"",
        marital_status:""
    });

    const[data,setData]=useState([]);
    const[page,setPage]=useState(1)

    useEffect(()=>{
        getData();
    },[page])

    const getData=()=>{
        axios.get(`http://localhost:3000/users?_limit=5&_page=${page}`).then(res=>{
            setData(res.data)
        });
    }

    const handleChange =(e)=>{
        const {id,value} =e.target;
        setFormData({
            ...formData,
            [id]:value,
        });
    }

    const handleCheckbox=(e)=>{
        const{id,value}=e.target;
        const checked=e.target.checked;
        if(checked){
            setFormData({
                ...formData,
                [id]:value
            });
        };
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        axios.post("http://localhost:3000/users",formData,{status:false}).then(()=>{
            alert("Employee Successfully registered");
            setFormData({
                name :"",
                age:"",
                address:"",
                department:"",
                salary:"",
                marital_status:""
            });
        })
        
    };
    
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <h3>Submit Details</h3>
            <input  
                id="name" 
                type="text" 
                value={formData.name}
                onChange={handleChange} 
                placeholder="Enter Name">
            </input>
            <input 
                id="age"
                type="number" 
                value={formData.age}
                onChange={handleChange} 
                placeholder="Enter Age">
            </input>
            <input 
                id="address"
                type="text" 
                value={formData.address}
                onChange={handleChange} 
                placeholder="Enter Address">
            </input>
            <select 
                id="department"
                value={formData.department}
                onChange={handleChange} >
                    <option value="biotechnology">Biotechnology</option>
                    <option value="it">IT</option>
                    <option value="peun">Peun</option>
            </select>
            <input
                id="salary"
                type="text" 
                value={formData.salary}
                onChange={handleChange} 
                placeholder="Enter Salary">
                </input>
            <input 
                id="marital_status"
                value="married"
                type="checkbox" 
                onChange={(e)=>{
                    handleCheckbox(e)
                }}>
            </input>
            <label>married or not</label>
            
            <input type="submit" value={"submit"}></input>
        </form>
        <div>{data.map(users=>
        <div key={users.id}>
           <p>{users.name}</p>
           <p>{users.age}</p>
           <p>{users.address}</p>
           <p>{users.department}</p>
           <p>{users.salary}</p>
           <p>{users.marital_status}</p>
        </div>
        )}
        </div>
        <button onClick={()=>{
            setPage(page-1)
        }}>Last</button>
        <button onClick={()=>{
            setPage(page+1)
        }}>Next</button>
        </div>
    )
        
}