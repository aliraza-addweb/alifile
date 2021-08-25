// import React, { useState } from 'react';
// import Hobby from './Hobby';
// import Qualification from './Qualification';

// export default function AddTodo1({addTodo,display}) {

//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');

//     const [show, setShow] = useState();


//     // const dis = () => {
//     //     this.display1=true;
//     // }

//     const submit = (e) => {
//         // {display = "print"}
//         e.preventDefault();
//         if(!title || !desc){
//             alert('Titleor descroption can not be blank');
//         }
//         addTodo(title,desc);
//         display = 'print';
//         console.log("function todo",display);
        
//     }

//     return (
//         <div className='container my-3'>
//             <h3 className='text-center'>Step:1 Personal Information</h3>
//             <form onSubmit={submit}>
//   <div className="mb-3">
//     <label htmlFor="title" className="form-label">Name:</label>
//     <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="desc" className="form-label">Phone Number:</label>
//     <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
//   </div>
//   <button type="submit"  onClick={()=> setShow(!show)} className="btn btn-sm btn-success">Next</button>
//   {show? <Hobby/> : null}
// </form>
//     </div>
//    )
   
// }
