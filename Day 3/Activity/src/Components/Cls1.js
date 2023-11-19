import {React,useState} from'react';
const T=()=>
{
    const [da,setda]=useState(false);
    const handleShow=()=>{
        setda(!da);
    }
    return(
        <>
          <p>{da?'Hi!How are you!':''}</p>
          <button onClick={handleShow}>{da?'Hide Component':'Show Component'}</button>
        </>
    )
}
export default T;