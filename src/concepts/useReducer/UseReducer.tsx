//HOOKS DEF: In React, hooks are special functions that allow developers to use state and other React features within
//  functional components without needing to write class components.

//Definition: This hook gives us an easy way to organize our state management.

//This hook is like useState but with additions features, you can think of this as a superset of useState,

//Syntax: const [state, dispatch] = useReducer(reducer, initialArg, init?)

//Reducer: A reducer is simply a function, a pure function that takes the previous state as the first parameter and 
// action as the second parameter, and returns a new state based on the act passed.

//initialArg: The value from which the initial state is calculated.

//optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. 
// Otherwise, the initial state is set to the result of calling init(initialArg).


//useReducer returns an array with exactly two items:

//The current state of this state variable, initially set to the initial state you provided.
//The dispatch function that lets you change it in response to interaction.

import { useReducer } from "react";

interface IState {
   name:string,
   age: number
}

interface IIncrementAgeAction{
   type: 'incremented_age'
}

interface IChangeNameAction{
    type: 'changed_name',
    userName: string 
}

type Action = IIncrementAgeAction | IChangeNameAction

function reducer(state:IState, action:Action) {
    switch(action.type){
        case 'incremented_age': {
            return {
                name:state.name,
                age: state.age + 1
            };
        }
        case 'changed_name':{
            return {
                name: action.userName,
                age:state.age
            }
        }
    }
}

const initialState:IState = {name:'Anix', age:24};

export default function UseReducerForm(){

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleButtonClick(){
        dispatch({ type:'incremented_age'});
    }

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement >){
        dispatch({
            type: 'changed_name',
            userName: e.target.value
        })
    }

    return(
        <>
        <input
          value={state.name}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>
          Increment age
        </button>
        <p>Hello, {state.name}. You are {state.age}.</p>
      </>
    )
}



