
const T=({n,r,d,y,dd})=>
{
    const[dat,setDat]=useState('Helo');

    return (
        <>
        <table border='3'>
            <tr>
                <td> Name: </td><td>{n}</td>
            </tr>
            <tr>
                <td> Roll No: </td><td>{r}</td>
            </tr>
            <tr>
                <td> Department: </td><td>{d}</td>
            </tr>
            <tr>
                <td> Year: </td><td>{y}</td>
            </tr>
            <tr>
                <td> Date of Birth: </td><td>{dd}</td>
            </tr>
            <button onClick={answe}>Submit</button>
            </table>
        </>
    )
}
export default T;