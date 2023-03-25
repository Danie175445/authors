import React,{useState,useEffect} from "react"
import { Link,useNavigate,useParams } from "react-router-dom"
import axios from 'axios'

const EditAuthor = ({props}) =>{
    const {id} = useParams()
    const [name,setName] = useState("")
    const [error,setError] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res =>{
                console.log(res.data)
                setName(res.data.name)
            })
            .catch(err => console.log(err))
    },[])
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`,{name})
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
        <p>Edit author:</p>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label><br />
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
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
export default EditAuthor