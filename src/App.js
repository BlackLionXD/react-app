
import './App.css'
export default function App(){
  const name= "Ibro";
  const age = 24;
  const google = 'http://www.google.com';

return(
 <div className="App">
  <h1>name: {name}</h1>
  <h2>age:{age}</h2>
  Go to <a href={google}>google</a>

 </div>

)
}
