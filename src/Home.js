


import { useState, useEffect } from "react";


import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
const {data: blogs, isLoding,errorMessage}= useFetch('http://localhost:8000/blogs');


    return (
        <div className="content">
  { errorMessage && <div>{errorMessage}</div>}
  { isLoding && <div>Loading ...</div>}
   {blogs && <BlogList blogProps = {blogs} />}
 
      
       

        </div>

      );
}
 
export default Home;