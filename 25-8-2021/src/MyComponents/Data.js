import React from 'react'
import DataItem from './DataItem'

export default function Data(props) {
    return (
        <div className='container'>
            <h3 className='text-center'>All User-Data show here</h3>
            {props.todos.length===0? ' No Data Available for display' : 
            props.todos.map((todo)=>{
                return <DataItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
        }

        </div>
    )
}
