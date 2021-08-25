import React from 'react'

export const Qualification = ({ prevStep, nextStep, handleChange, values, error }) => {
    return (
        <div>
            <h1 style= {{ textAlign: 'center'}}>Qualification</h1><br></br>
            <div>
            <label>Qualification:
                <input
                    type="text"
                    placeholder="qualification"
                    value={values.qualification}
                    onChange={handleChange('qualification')}
                />
            </label>
            {(error !== "") ? <><br/><label style={{ color: 'red' }}>{error}</label></> : null}
            </div>
            <button onClick={ prevStep }>Previous</button>
            <button onClick={ nextStep }>Next</button>
        </div>
    )
}
export default Qualification