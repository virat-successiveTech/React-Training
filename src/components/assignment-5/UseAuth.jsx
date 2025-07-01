"use client"
import WithAuth from "./WithAuth";

function TryComp ({name , email , authDetails})
{
    return (
        <div style={{margin:'auto',width:'200px'}}>
        <div>{name}</div>
        <div>{email}</div>
        <div style={{margin:"auto",width:"500px"}}>
            <button onClick={authDetails} >Submit</button>
        </div>
        </div>
    )
}
const Authfunction = WithAuth(TryComp);
export default Authfunction;