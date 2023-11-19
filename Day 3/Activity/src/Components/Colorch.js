import {useState} from 'react';

const Ans=()=>{
    const[dat,setDa]=useState(true);
    const ans=()=>
    {
        setDa(!dat);
    }
    return(
        <button onClick={ans} style={{backgroundColor: dat ? 'green':'red' }}>Submit</button>
    )
}
export default Ans;