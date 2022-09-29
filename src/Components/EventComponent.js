import {useState} from "react";


export default function EventComponent()
{

    const [msg, setMsg] = useState('');

    function DatabaseClick(e)
    {
        switch(e.target.value)
        {
            // console.log(`X poision : ${e.clientX} \n Value = ${e.target.value}`); 
                case "Insert":
                setMsg("Record Inserted");
                break;
                case "Update":
                setMsg("Record Updated");
                break;
                case "Delete":
                setMsg("Record Deleted");
                break;

        }
        
        
    }
    return  (
        <div className="container-fluid">
            <div className="mt-3">
                <button value = "Insert" onClick = {DatabaseClick}>Insert</button>
                <button value = "Update" onClick = {DatabaseClick}>Update</button>
                <button value ="Delete" onClick = {DatabaseClick}>Delete</button>
                <h2>{msg}</h2>
            </div>
        </div>
    )
}