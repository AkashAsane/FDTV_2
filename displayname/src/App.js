import React, { useEffect, useState } from 'react';
import './App.css';

function  Displayname() {
    const[name,setName]=useState("");
    const[lastname,setLastname]=useState("");
    const[getfirst,setgetfirst]=useState("");
    const[getlast,setgetlast]=useState("");
    const[issubmitted,setIssubmitted]=useState(false);


    const  handlesubmit=(event)=>{
        event.preventDefault();
         if(name.trim() !== "" && lastname.trim() !== "" )
         {
               setgetfirst(name);
               setgetlast(lastname);
               setIssubmitted(true);
         }
         else{
            setgetfirst("");
            setgetlast("");
            setIssubmitted(false);
         }
         
    }
         

    return (
        <div>
            <h2>Full Name Display</h2>
            <form onSubmit={handlesubmit}>
                <div>
                <label>First name :</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  
                />
                </div>
                <div>
                <label>Last name :</label>
                <input
                  type='text'
                  value={lastname}
                  onChange={(e)=>setLastname(e.target.value)}
                  
                />
                </div>
                <button type='submit'>Submit</button>
            </form>

            <div>
                {issubmitted && getfirst !== "" && getlast !== "" &&(
                    <div>Full Name: {getfirst} {getlast}</div>
                )
                }
                
            </div>
        </div>
    );
}

export default Displayname;
