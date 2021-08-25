import React from 'react'

export default function Footer() {
    let footerstyle = {
        position: 'relative',
        top: '10vh',
        width: '100%'
    }
    return (
        <div className='bg-dark text-light my-3 py-3' style={footerstyle}>
            <p className='text-center'> CopyRight &copy; 2021 Mytodoslist.com  </p> 
        </div>
    )
}
