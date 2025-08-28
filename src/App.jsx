import { useRef, useEffect, useState} from 'react'
import Card from "./components/Card"
import Another from "./components/Another"
import Blog from './components/Blog';
import Contoller from './components/Contoller';


// function increment(){
//   console.log("Increment called");
// }
// It can be given as arrow function

// export default function App(){}
  function App() {
    // Arrow function
    // const increment = () => {

     // count++;  //normal modification but as we used 'useState' for this state variable So
    
    //  setCount(count + 1);   // Use setCount to modify the value 
    //   console.log("Count is :",count);    //it only change in the console not in the webpage
    // };

    // let count= 0;      //It is a state variable (it determines the state of the varaiable)
    // A react function called "useState" is used to make 'state variable'

    // const [count, setCount] = useState(0);   //useState is passed with a default value (here 0) and it returns 2 things -; 1)count, 2) A function that modifies the count
    
    // functions starting using the word 'use' are called 'hooks'
  // MAP
    // const blogs = [
    //   {title: "My Blog 1", content: "My blog 1 content"},
    //   {title: 'My Blog 2', content: "My blog 2 content"},
    //   {title: 'My Blog 3', content: "My blog 3 content"},
    //   {title: 'My Blog 4', content: "My blog 4 content"},
    //   {title: 'My Blog 5', content: "My blog 5 content"}
    // ];

    // EFFECT

    const data = {
      Kerala: "Trivandrum",
      Karnataka: "Bengaluru",
      TamilNadu: "Chennai"
    };
    const[selectedState, setSelectedState] = useState("Kerala");
    const[selectedStateCapital, setSelectedStateCapital] = useState("Trivandrum");

    const changeState = (e) => {     //e is an event ,In it target is the reason for the event to occur. e.target is the select so e.target.value is the state we are selecting
      // console.log(" e.target.value")
      setSelectedState(e.target.value);
      // setSelectedStateCapital(data[e.target.value]); //here we cannot access data.e.target.value   // THIS CAN BE REMOVED FROM HERE FOR 'useEffect' MOVE TO CONST CHANGECAPITAL
      // we have to give it as like accessing from a python dictionary 
    };
    // It can be done by using another method =>useEffect

    const changeCapital = () => {
      console.log("changeCapital called");            //HERE THE ABOVE CAPITAL SENTENCE REMOVE E. TARGET.VALUE => SELECTEDSTATE
      setSelectedStateCapital(data[selectedState]) 
    };
    useEffect(changeCapital, [selectedState]);   // 2 things -; 1) a function, 2) a dependency array  i.e, here when the selectedState changes the changeCapital also changes
      // When a value inside the 'selectedState' changes 'changeCapital' is called


      // Or can be given as an arrow function

      // useEffect( () =>{
      //   setSelectedStateCapital(data[selectedState]);
      // }, [selectedState]) ;
  // hook => useRef() =>special reference variable
  const facts = {
    0: "Zero is the first number",
    1: "1 is after zero"
  }
  const numberRef = useRef();
  const [fact, setFact] = useState();
  const[loading, setLoading] = useState(false);


  const getFact = async() => {

    const number = numberRef.current.value;
    setLoading(true)
    const response = await fetch(`http://numbersapi.com/${number}`);  //to fetch the api ,fetch is an asynchronous function,that returns a promise
    const text = await response.text();
    console.log(text);
    setLoading(false);
    setFact(text);
    // to wait we give await => to give await we should make the function async
    // setFact(facts[numberRef.current.value]);
  }

  if(loading) {
    return <div>Loading the data from server....</div>
  }


  const loadPosts = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.text();
    console.log(data);
  }


  return (
  <div>
    {/* <Card/>
    <Card/> */}
    {/* To give seperate titles for card*/}
    {/* <Card title="title 1" content="content 1"/>
    <Card title="title 2" content= "content 2"/> */}
    {/* to access this we use props  and the values we are passing is stored as a key value pair in the prop object*/}
     {/* <Another/> */}

     {/* <h1>{count}</h1>
     <button onClick={increment}>+</button> */}

    {/*MAP  */}

     {/* <h1>Blogs</h1>
     <hr/> */}
     {/* to write javaScript inside this html we use curly brace */}
     {/* {blogs.map(blog =>(
      <Blog title={blog.title} content = {blog.content}/>
     ))}  */}

  {/* EFFECT */}
  {/* to make change while selecting use onChange */}
      {/* <select onChange={changeState}> 
        <option value='Kerala'>Kerala</option>
        <option value= 'Karnataka'>Karnataka</option>
        <option value = 'TamilNadu'>TamilNadu</option>
      </select>
      <p>Selected state is :{selectedState}</p>
      <p>Capital of selected state:{selectedStateCapital}</p> */}


      {/* <input type="number" ref={numberRef} placeholder="Enter number"/>
      <button onClick={getFact}>Get Fact</button>
      <p>{fact}</p> */}

      {/* <button onClick={loadPosts}>Load</button> */}

  </div>
  )
}
// HTML can be written inside JavaScript => JSX
// to use this file outside export
export default App


// Data provided to the front end are called API (An external service is used to fetch data)
// JSON => JavaScript Object Notation
// format of representing the data which is provided by the api =>JSON
// key should be string in the objects
// https://jsonplaceholder.typicode.com/posts