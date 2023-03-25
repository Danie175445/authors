import React,{useState} from "react"
import { Link,useNavigate } from "react-router-dom"
import axios from 'axios'

const CreateAuthor = () =>{
    const [name,setName] = useState("")
    const [error,setError] = useState([])
    const navigate = useNavigate()
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/author',{name})
        .then(res => {
            console.log(res)
            console.log(res.data)
            navigate('/')
        })
        .catch(err =>{
            console.log(err)
            setError(err.response.data.errors)
        })
    }
return(
    <div>
        <h1>Favorite Author</h1>
        <Link to={'/'}>Home</Link>
        <p>{name}</p>
        <p>Add a new author:</p>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label><br />
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            {error.name?
                <p>{error.name.message}</p>
                : null
            }
            <br />
            <button ><Link to={'/'}>Cancel</Link></button><input type="submit" value="Submit" />
        </form>
    </div>
)

}
export default CreateAuthor