import { useEffect,useState } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isLoding, setIsLoding]= useState(true);
    const [errorMessage,setErrorMessage]= useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res => {
          // console.log(res)
          if(!res.ok){
            throw Error("couldn't fetch the data");
          }
        return  res.json();
        })
        .then( data =>{
          console.log(data)
          setData(data);
          setErrorMessage(false);
          setIsLoding(false);
        }).catch(err =>{
          setIsLoding(false);
          setData(null);
          setErrorMessage(err.message)
        })
      },[url]);
      return { data, isLoding, errorMessage}
}
export default useFetch;