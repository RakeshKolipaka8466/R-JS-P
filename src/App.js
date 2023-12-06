//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button,Summary, Input} from './components/button';
import JSXEg, { FragmentEg, MultipleElements } from './components/jsx';
import Home from './home';
import Counter from './counter';

function App(){
  const  [heading,setHeading] = useState("this is the react");
  const [description,setDescription]=useState("react is powerful");
  const [theme,setTheme]=useState("light"); 

  const changeHeading=()=>{
    setHeading(`This is the new Heading ${Math.random()*100}`);
    setDescription(`This is new Description ${Math.random()*10}`);
  };
const toggleTheme=()=>{
  if(theme==="light"){
    setTheme("dark");
  }else{
    setTheme("light");
  }
};

  console.log("heading",heading);
  return (
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
      <button onClick={changeHeading}>Change Heading</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className={`box-cont bg-${theme}`}>Hey Toggled successfully</div>
      <Home />
      <Counter />
       <Button />
      <Button />
      <Summary />
      <Input />
      <JSXEg />
      <MultipleElements />
      <FragmentEg />  
      
      </div>
  );
}
export default App;
