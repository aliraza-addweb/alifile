import React from 'react'

export const UserDetails = ({ prevStep, nextStep, handleChange, values, error }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center'}}>hobbies</h1><br></br>
            <div>
            <label>Hobbies:
                <input
                    type="text"
                    placeholder="hobbies"
                    value={values.hobbies}
                    onChange={handleChange('hobbies')}
                />
            </label>
            {(error !== "") ? <><br/><label style={{ color: 'red' }}>{error}</label></> : null}
            </div>
            <button onClick={ prevStep }>Previous</button>
            <button onClick={ nextStep }>Next</button>
            
        </div>
        
    )
}
export default UserDetails
