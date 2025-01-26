import React, { useCallback, useState } from "react";

interface IProps{
    handleDoubleCount: ()=>void
}

const ChildComponent = React.memo(function ChildComponent(props:IProps){
    const {handleDoubleCount} = props;
  console.log("Child Component loaded");
  
  return <>
        <button onClick={handleDoubleCount}>Increase Count by 2 </button>
        <div>I am Child Component.</div>
        </>;
});

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const handleDoubleCount =useCallback(()=>{
    setCount((prev:number)=>prev+2);
    },[setCount]);

    function handleCount(){
        setCount(prev=>prev+1);
    }
  console.log("Parent component loaded");
  return (
    <> 
      <div>Count is: {count}</div>
      <div>I am parent component.</div>
      <button onClick={handleCount}>Increase Count </button>
      <ChildComponent handleDoubleCount={handleDoubleCount}/>
    </>
  );
};

export default ParentComponent;
