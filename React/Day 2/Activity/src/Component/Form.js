import {Award} from 'lucide-react'
const Form=()=>
{
    return (
        <>
        <form className='Classf'>
            <label style={({backgroumdColor:'blue'})}>First Name:</label>
            <br/>
            <input type='txt' placeholder="Name"></input>
            <br/>
            <label for='lname' >Phone Number:</label>
            <br/>
            <input type='txt'placeholder="Phone number"></input>
            <button><Award/>Register</button>
        </form>
        </>
    )
}
export default Form;
