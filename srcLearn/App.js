import {useState, useEffect} from 'react';
import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: Doe</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {
  const name = ''
  const isNameShowing = true;

  const[counter,setCounter] = useState(0);

  useEffect(()=>{
    alert('New number is: '+ counter)
  },[counter])

  return (
    <div className="App">
      <div>
        <button onClick={()=>setCounter((prevCount)=>prevCount +1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
      </div>
      <Person name={'John'} age={30}/>
      <Person name='Jane' age={30-5}/>
      <h2>Hello, {isNameShowing ?(
          <>
            {name}
          </>
        ) : (
          <>
            Someone else
          </>
        )}
      </h2>
    </div>
  );
}

export default App;
