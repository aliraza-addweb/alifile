import React, { useState } from 'react';


export default function DataItem({todo, onDelete}) {

    // const [finalTodos, SetFinalTodos] = useState();
    return (
        <div className='container'>
            {/* { !todo.title == null && !todo.desc == null && !todo.hobb == null && !todo.hdesc == null && !todo.qual == null && !todo.pers == null ? SetFinalTodos([...finalTodos, todo  ])
        : ''} */}

            <p>Name: {todo.title}</p>
            <p>PhoneNumber: {todo.desc}</p>
            <p>E-mail: {todo.mail}</p>
            <p>Hobbie: {todo.hobb}</p>
            <p>Hobiie-Description: {todo.hdesc}</p>
            <p>Qualification: {todo.qual}</p>
            <p>Percentage: {todo.perc}</p>
            <button className="btn btn-dark btn-lg" onClick={()=>{onDelete(todo)}}>Delete</button>
            
        </div>
    )
}
