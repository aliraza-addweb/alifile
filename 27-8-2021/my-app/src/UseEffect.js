import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [countn, setContn] = useState(0);
   useEffect(() => {
       console.log("i am first one");
       if(countn > 1)
       {
           document.title = `chats (${countn})`
       }
       else{
           document.title = `chats`
       }
}, [countn]);
return(
    <div>
        <h1>{countn}</h1>
        <button className="btn" onClick={
            () =>setContn(countn + 1)
        }> Click Test</button>
    </div>
)
}
export default UseEffect;