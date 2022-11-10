import { useState } from "react";



const Create = () => {
    const [title,setTitle]= useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Ibro')
    return ( 
        
    <div className="create">
            <h2>create new blog</h2>
            <form>
                <label>Blog Title</label>
                <input type="text"
                required
                value= {title}
                onChange = {(e)=>{
                    setTitle(e.target.value)
                }}
                />
                {title}

                <label>Blog Content</label>
                <textarea
                required
                onChange={(e)=> {
                    setContent(e.target.value);
                }}
                ></textarea>
                {content}
                <label>Blog Author</label>
                <select
                  onChange = {(e)=>{
                    setAuthor(e.target.value)
                }}
                >
                    <option value="Ibro" >Ibro</option>
                    <option value="Heyru">Heyru</option>

                </select>
                {author}
            <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;