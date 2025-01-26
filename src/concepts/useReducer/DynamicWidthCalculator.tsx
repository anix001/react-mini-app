import { useReducer } from 'react'

const throttleHandler = (fn:(e:Event)=> void, delay:number) =>{
    let run = false;
    return function(e:Event){
      if(!run){
        fn(e);
        run = true;
        setTimeout(()=> run = false, delay)
      }
    }
  }

interface IWindowResizeAction {
   type: 'detect_window_resize'
}

type Action = IWindowResizeAction

type State = {
   currentWidth: number,
   isMedScreen: boolean,
   isSmallScreen: boolean,
   isLargeScreen: boolean
}

// Explicitly type the useReducer hook
const reducer = (state: State, action: Action): State => {
   if (action.type === "detect_window_resize") {
      const width = window.innerWidth; // Use `window.innerWidth` for the current viewport width
      return {
         currentWidth: width,
         isSmallScreen: width <= 640 ? true : false,
         isMedScreen: (width > 640 && width <= 990) ? true : false,
         isLargeScreen: width > 990 ? true : false
      }
   }
   return state;
}

const initialState: State = { currentWidth: window.innerWidth, isSmallScreen: false, isMedScreen: false, isLargeScreen: true }

const DynamicWidthCalculator = () => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const handleWindowResize = () => {
    //   console.log("Runs upon every window resize")
      dispatch({
         type: 'detect_window_resize'
      })
   };


    window.addEventListener('resize', throttleHandler(handleWindowResize, 5000));

   return (
      <div>Current Window size is {state.currentWidth}</div>
   )
}

export default DynamicWidthCalculator;
