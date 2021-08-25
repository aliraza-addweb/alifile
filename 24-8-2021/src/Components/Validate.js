import React from 'react'

export const validate = ({ prevStep, nextStep, handleChange, values}) => {
    return (
            <div className='wrapper'>
              <div className='form-wrapper'>
                <h2>validation form</h2>
                <form onSubmit={this.handleSubmit} noValidate>
                  <div className='fullName'>
                    <label htmlFor="fullName">Full Name</label>
                    <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                    
                  </div>
                  <div className='email'>
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' onChange={this.handleChange} noValidate />
                    
                  </div>
                  <div className='password'>
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' onChange={this.handleChange} noValidate />
                    
                  </div>
                  <div className='submit'>
                    <button onClick={ nextStep }>submit</button>
                  </div>
                </form>
              </div>
            </div>
          )
}
export default validate
