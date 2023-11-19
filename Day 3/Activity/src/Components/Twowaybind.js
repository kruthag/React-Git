import {toast,Toaster} from 'reacy-hot-toast';
import {useState} from 'react';
const Form=()=>
{
    const  [da,setDa]=useState({
        name:'Eg.Ram',
        phno:''
    })
    const hancha=(e)=>
    {
        setDa({...da,[e.target.id]:e.target.value});
    }
    const hans=(e)=>
    {
         e.preventDefault();
         console.log(da);
         toast('Successfully completed');
    }
    return (
        <>
        <form className='Classf' onSubmit={hans}>
            <label style={({backgroumdColor:'blue'})}>First Name:</label>
            <br/>
            <input type='txt' placeholder="Name" id='name' onChange={hancha} value={da.name}></input>
            <br/>
            <label for='lname' >Phone Number:</label>
            <br/>
            <input type='txt'placeholder="Phone number" id ='phno' onChange={hancha}></input>

            <button>Register</button>
        </form>
        
        <Toaster
              position="top-center"
              reverseOrder={false}
        />
        </>
    )
}
export default Form;
