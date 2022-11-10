import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
// import BlogList from "./BlogList";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
    const {blogId} = useParams();
    const {data: blog, isLoding,errorMessage}= useFetch('http://localhost:8000/blogs/'+blogId);
   
    const navigate = useNavigate();


    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/'+ blogId,{
            method: 'DELETE'
        }).then(()=>{
            // console.log('delete works')
            navigate('/')
        }).catch((error)=>{ console.log(error)})
   }
    return (  
        <div className="blog-details">
            <h1>blog details </h1>
            { errorMessage && <div>{errorMessage}</div>}
            { isLoding && <div>Loading ...</div>}
            { blog && 

            <article className="blog-article">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <button onClick={handleDelete}>Delete</button>
           </article>
           }
      
        </div>
    );
}
 
export default BlogDetails;