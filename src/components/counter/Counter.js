import React, { useMemo, useReducer } from 'react';
import './Counter.css';

const initialState = {countA:0,countB:0,countC:0,countD:0};






const reducer = (state,action)=>{
    switch(action.type){
        case 'start':
            return {countA:state.countA + 1,countB:state.countB+1,countC:state.countC+1,countD:state.countD+1};
        default:
            return state;
    }
}



const Counter = () => {
    const [state,dispatch] = useReducer(reducer,initialState);

    useMemo(()=>{
        setInterval(()=>{
            dispatch({type:'start'});
        },1);
    },[])

    return ( 
      
          <div className="counter-group">
            <div className="counter">
                <p>{state.countA}</p>
            </div>
            <div className="counter">
               <p> {state.countB}</p>
            </div>
            <div className="counter">
                <p>{state.countC}</p>
            </div>
            <div className="counter">
                <p>{state.countD}</p>
            </div>
        </div> 
   
        
    );
}
 
export default Counter;