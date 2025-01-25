//Definition: A debounce function is called after a specific amount of time passes since its last call.

import React from "react";

//For example: helps in search bar to search only after user stops typing

const DebounceSearchBarComponent = () => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("api call...");
  };


  function debounce(fn:(e:React.ChangeEvent<HTMLInputElement>)=>void, delay:number){
    let timer:ReturnType<typeof setTimeout>;
    return function(e:React.ChangeEvent<HTMLInputElement>){
        clearTimeout(timer);
        timer = setTimeout(()=> fn(e),  delay);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p> Search </p>
        <input type="text" onChange={debounce(handleChange, 5000)} />
      </header>
    </div>
  );
};

export default DebounceSearchBarComponent;
