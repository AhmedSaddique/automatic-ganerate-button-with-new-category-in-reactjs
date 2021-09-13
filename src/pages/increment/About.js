import Navbar from "../../Navbar";
import {useState ,useReducer} from 'react';

function About(){

    function reducer(state , action){
        if(action.type==="INCR"){
           state=state+1 ;
        }
       if(state>0 && action.type==="DECR"){
           state=state-1 ;
        }
        return state;
    }
 let initialNum=11;
   let [state, dispatch]= useReducer(reducer , initialNum);

   
    let [num, setNum] = useState(initialNum);
    return(<>
    <Navbar/>
<div>
    <h1 className="text-center mt-5">{num}</h1>
</div>

    <div className="text-center mt-5 mb-5">
     <button className="btn btn-outline-primary w-25 mt-5 ms-5 me-5" onClick={()=>num>0 ?setNum(num-1):setNum(0)} >Decriment</button>
     <button className="btn btn-outline-secondary w-25 mt-5 ms-5 me-5"onClick={()=>  setNum(num+1)} >increment</button>

        </div>

        <div>
            <h1 className="text-center">useReducer</h1>
    <h1 className="text-center mt-5">{state}</h1>
</div>

    <div className="text-center mt-5">
     <button className="btn btn-outline-primary w-25 mt-5 ms-5 me-5"  onClick={()=> dispatch({type:"DECR"})}>Decriment</button>
     <button className="btn btn-outline-secondary w-25 mt-5 ms-5 me-5"  onClick={()=> dispatch({type:"INCR"})}>increment</button>

        </div>
   </> );
}
export default About;