import React,{useEffect,useState} from "react"
import { Link } from "react-router-dom"
import axios from "axios"


const FavoriteAuthors = () =>{
    const [allAuthors,setAllAuthors] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res =>{
                console.log(res)
                console.log(res.data)
                setAllAuthors(res.data)
            })
            .catch(err=> console.log(err))
    },[])
    const deleteHandler = (authorId) =>{
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
        .then(res =>{
            console.log(res)
            removefromdom(authorId)
        })
        .catch(err => console.log(err))
    }
    const removefromdom =(authorId)=>{
        setAllAuthors(allAuthors.filter(author=>author._id !== authorId))
    }
return(
    <div>
        <h1>Favorite Authors</h1>
        <Link to={'/create'}>Add an author</Link>
        <p>We have quotes by:</p>
        <table>
            <tbody>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                {allAuthors.map((oneauthor,index)=>{
                    return(
                        <tr key={index}>
                            <td>{oneauthor.name}</td>
                            <td><Link to={`/edit/${oneauthor._id}`}>Edit</Link><button onClick={(e)=>deleteHandler(oneauthor._id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)
}
export default FavoriteAuthors