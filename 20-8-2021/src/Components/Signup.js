import React, { Component } from 'react'
import { PersonalDetails } from './PersonalDetails';
import  UserDetails  from './UserDetails';
import Confirmation from './Confirmation';
import Qualification from './Qualification';
import Success from './Success';


export default class Signup extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        hobbies: '',
        qualification: '',
        step: 1
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

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, hobbies, qualification } = this.state;
        const values = { firstname, lastname, email, hobbies, qualification }
        switch (step) {
            case 1:
                return (
                    <PersonalDetails
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
            case 5:
                return (
                    <Success 
                    />
                    // never forget the default case, otherwise VS code would be mad!
                )
            default:
                return(<></>)
        
        }
       
    }
}
