import { useState } from "react";



const Create = () => {
    const [title,setTitle]= useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Ibro')

    const handleSubmit = (e)=> {
        // console.log("click event works");
        e.preventDefault();

        const blog= {title, content, author}
        console.log(blog)
        fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(()=>{
                console.log('new blog added')
            }).catch(error =>{
                console.log(error)
            })

    }
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
            <button onClick={handleSubmit}>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;