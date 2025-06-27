import { useState } from "react";

const TodoList =()=>
{
    const [state , setState] = useState("");
    const [list , setList]  = useState([]);
    function HandleClick()
    {
setList(([...list,state]));
    }

    return (
        <div>

<input type="text" onChange={(e)=>setState(e.target.value)}></input>
<button onClick={HandleClick}>add</button>
<div>
    {list.map((item,index)=>(
        <div>{item}</div>
    ))}
</div>
        </div>
    )
}
export default TodoList;