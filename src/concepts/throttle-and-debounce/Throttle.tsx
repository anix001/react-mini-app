// Definition : A throttle function is a mechanism to limit the number of calls of another function in a specific interval, 
// any additional calls within the specified time interval will be ignored.

// For Example: Let's say we want to handle a scroll event but only allow the function to run once every 500ms(half second) even if the 
// user scrolls more frequently.

const ThrottledScrollComponent = ()=>{

  const throttleHandler = (fn:(e:MouseEvent)=> void, delay:number) =>{
    let run = false;
    return function(e:MouseEvent){
      if(!run){
        fn(e);
        run = true;
        setTimeout(()=> run = false, delay)
      }
    }
  }

   const handleMouseMove = (e:MouseEvent) =>{
    e.preventDefault();
    //everytime the mouse move this function will be invoked
    console.log("APi call to do some operation");
   }

   //event listener to track the movement of the mouse
  window.addEventListener('mousemove',throttleHandler(handleMouseMove, 1000));

   return(
    <div>Throttle Example</div>
   );
}

export default ThrottledScrollComponent;