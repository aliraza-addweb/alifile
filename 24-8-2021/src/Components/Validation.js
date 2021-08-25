import React from 'react';
import  PersonalDetails  from './PersonalDetails';
import  UserDetails  from './UserDetails';
import Confirmation from './Confirmation';
import Qualification from './Qualification';
import Validate  from './Validate';
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
}
nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
}
handleChange = input => e => {
    this.setState({ [input]: e.target.value });
}
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
 
  render() {
  const { step } = this.state;
  const { firstname, lastname, email, hobbies, qualification } = this.state;
  const values = { firstname, lastname, email, hobbies, qualification }
    const {errors} = this.state;
    switch (step) {
        case 1:
            return (
                <Validate
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
                
                />
            )
        case 2:
            return (
                <UserDetails
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values } />
            )
        case 3:
            return(
                <Qualification
                prevStep={ this.prevStep }   
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
                />
            )
        case 4:
            return (
                <Confirmation 
                
                values={ values }
                />
            )
        
                // never forget the default case, otherwise VS code would be mad!
            
        default:
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
                    <button onClick={ this.nextStep }>submit</button>
                  </div>
                </form>
              </div>
            </div>
          )        
    
            }
    }};
