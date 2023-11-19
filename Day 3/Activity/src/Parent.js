import Tableforprops from './Components/Tableforprops'; 
const Parent=()=>
{
    var name="R.Kruthagnya";
    var roll="727722eucs093";
    var dept="BE CSE";
    var year="Second";
    var dob="21/12/2004";
    return(
        <>
        <Tableforprops n={name} r={roll} d={dept} y={year} dd={dob}/>
        </>
    )
}
export default Parent;