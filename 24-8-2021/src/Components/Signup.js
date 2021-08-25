import React, { Component } from 'react'
import  PersonalDetails  from './PersonalDetails';
import  UserDetails  from './UserDetails';
import Confirmation from './Confirmation';
import Qualification from './Qualification';
//import Success from './Success';


export default class Signup extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        hobbies: '',
        qualification: '',
        error: '',
        step: 1
    }
    regexAlphabets = /[^A-Za-z]/ig; 
    regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    isEmpty = (value, field) => {
        if (value === "") {
            this.setState({ error: `Please enter ${field}` })
            return true
        }
        return false
    }

    
    validatePersonalDetail = (step) => {
        if(this.isEmpty(this.state.firstname, 'first name')) {
            return
        }else if(this.regexAlphabets.test(this.state.firstname)) {
            this.setState({ error: "First name should have only alphabets."})
            return
        }if(this.isEmpty(this.state.lastname, 'last name')) {
            return  
        }else if(this.regexAlphabets.test(this.state.lastname)) {
            this.setState({ error: "Last name should have only alphabets."})
            return
        }
        if(this.isEmpty(this.state.email, 'email')) {
            return  
        }else if(!this.regexEmail.test(this.state.email)) {
            this.setState({ error: "enter a valid email id."})
            return
        }
        else {
            this.setState({ step: step + 1, error: "" });
        }
    }
    validateUserDetails = (step) => {
        if(this.isEmpty(this.state.hobbies, 'hobbies')) {
            return      
        }else if(this.regexAlphabets.test(this.state.hobbies)) {
            this.setState({ error: "hobbies should have only alphabets."})
            return
        }
        else {
            this.setState({ step: step + 1, error: "" });
        }
    }
    
    validateQualification = (step) =>
    {
        if(this.isEmpty(this.state.qualification, 'qualification')) {
            return      
        }else if(this.regexAlphabets.test(this.state.qualification)) {
            this.setState({ error: "qualification should have only alphabets."})
            return
        }
        else {
            this.setState({ step: step + 1, error: "" });
        }
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    nextStep = () => {
        const { step } = this.state;
        switch (step) {
            case 1: 
                this.validatePersonalDetail(step)       
                break;
            case 2:
                this.validateUserDetails(step)
                break;
            case 3:
                this.validateQualification(step)
                break;
            default:
                break;
        }
        //this.setState({ step: step + 1 });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, email, hobbies, qualification, error } = this.state;
        const values = { firstname, lastname, email, hobbies, qualification }
        const {errors} = this.state;
        switch (step) {
            case 1:
                return (
                    <PersonalDetails
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    error={error}
                    />
                )
            case 2:
                return (
                    <UserDetails
                    prevStep={ this.prevStep }
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values } 
                    error={error}
                    />
                )
            case 3:
                return(
                    <Qualification
                    prevStep={ this.prevStep }   
                    nextStep={ this.nextStep }
                    handleChange={ this.handleChange }
                    values={ values }
                    error={error}
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
                return(<></>)
        
        }
       
    }
}
