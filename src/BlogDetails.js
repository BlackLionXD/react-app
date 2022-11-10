import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import BlogList from "./BlogList";
const BlogDetails = () => {
    const {blogId} = useParams();
    const {data: blog, isLoding,errorMessage}= useFetch('http://localhost:8000/blogs/'+blogId);
    return (  
        <div className="blog-details">
            <h2>blog details-{blogId} </h2>
            { errorMessage && <div>{errorMessage}</div>}
            { isLoding && <div>Loading ...</div>}
            { blog && 

        <article>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
           </article>
           }
      
        </div>
    );
}
 
export default BlogDetails;