import { useState } from 'react';
import Color from './Component/Color';
import './App.css';


function App() {
//declaring a variable named data and assigning it an array of objects
  let data = [
    {
      color: "red",
      value: "#f00",
    },
    {
      color: "green",
      value: "#0f0",
    },
    {
      color: "blue",
      value: "#00f",
    },
    {
      color: "cyan",
      value: "#0ff",
    },
    {
      color: "magenta",
      value: "#f0f",
    },
    {
      color: "yellow",
      value: "#ff0",
    },
    {
      color: "black",
      value: "#000",
    },
  ];

  //using the useState hook in a React functional component to declare a state variable named clickedIndex and also and updates with setClickedIndex
  const [clickedIndex, setClickedIndex] = useState(null);
 
//This parameter "index" in handleClick represents the index of an item that has been clicked and The purpose of this function is to update the clickedIndex state (setClickedIndex)
  function handleClick(index) {
    setClickedIndex(index) 
  }

  //this return allows the color component be seen on the screen
  return (
    <div className="App">
      {/* rendering the Color component and passing three props to it. Thesse props are passed in from Color */}
      <Color data={data} onClickProp={handleClick} clickedBox={clickedIndex} />
    </div>
  );
};

export default App;