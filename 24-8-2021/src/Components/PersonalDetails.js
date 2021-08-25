import React from 'react'

export const PersonalDetails = ({  nextStep, handleChange, values, error }) => {
      
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Personal Details</h1><br/>
            <div>
                <label htmlfor="firstnameerr">FirstName:</label>
                <input
                    type="text"
                    placeholder="firstname"
                    value={values.firstname}
                    onChange={handleChange('firstname')}
                />
            </div>
            <div>
            <label>LastName:
                <input
                    type="text"
                    placeholder="lastname"
                    value={values.lastname}
                    onChange={handleChange('lastname')}
                />
            </label>
            </div>
            <div>
            <label>Email:
                <input
                    type="text"
                    placeholder="email address"
                    value={values.email}
                    onChange={handleChange('email')}
                />
            </label>
            {(error !== "") ? <><br/><label style={{ color: 'red' }}>{error}</label></> : null}
            </div>
            <button onClick={ nextStep }>Next</button>
        </div>
    )
}
export default PersonalDetails