import React from 'react'
import Card from 'react-bootstrap/Card'
import { Component } from "react";
import { Next } from 'react-bootstrap/esm/PageItem';
import {} from 'react-router-dom'
import {} from 'react-dom'

 export default class Footer extends Component {
  render() {
    return (
      <>
        
        {/* <div className="container">

          <style>{'body { background-color: lightblue; }'}</style>

          <div className="card">
            <div className="card-body">
              <form onSubmit={this.onFormSubmit}>
                <div className="form-group mb-3">
                <input type="radio" value="Hobbie" name="gender" /> Ask for Personal information
                  <br></br><label><strong>Name</strong></label>
                  <input type="text" className="form-control" value={this.state.name} onChange={this.eventName} />
                </div>
                <div className="form-group mb-3">
                  <label><strong>Email</strong></label>
                  <input type="email" className="form-control" value={this.state.email} onChange={this.eventEmail} />
                </div>
                <div className="form-group mb-3">
                  <label><strong>Contact</strong></label>
                  <input type="text" className="form-control" value={this.state.contact} onChange={this.eventContact} />
                </div>
                <div className="form-group mb-3">
                  <label><strong>Message</strong></label>
                  <textarea className="form-control" value={this.state.message} onChange={this.eventMessage} />
                </div>
                <button onClick={Next}>Next</button>
                <div className="form-group mb-3">
                <input type="radio" value="Hobbie" name="gender" /> Ask for hobbies
                <br></br><label><strong>Hobbies</strong></label>
                <input type="text" className="form-control" value={this.state.hobbies} onChange={this.eventHobbies} />
                </div>
                <div className="form-group mb-3">
                <input type="radio" value="Male" name="gender" /> Ask for qualification
                <br></br><label><strong>Qualification</strong></label>
                <input type="text" className="form-control" value={this.state.qualification} onChange={this.eventQualification} />
                </div>
                <div className="d-grid mt-3">
                  <button type="submit" className="btn btn-primary btn-block" onClick={this.handleRefresh}>Submit</button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="container" className="container">
        <table>
          <tbody>
            <tr>
              <th>name</th>
              <th>email<br></br></th>
              <th>contact<br></br></th>
              <th>message<br></br></th>
              <th>hobbies<br></br></th>
              <th>qualification<br></br></th>
            </tr>
           
             
                <tr>
                  <td>{this.state.name}</td>
                  <td>{this.state.email}<br></br></td>
                  <td>{this.state.contact}<br></br></td>
                  <td>{this.state.message}<br></br></td>
                  <td>{this.state.hobbies}<br></br></td>
                  <td>{this.state.qualification}<br></br></td>
                </tr>
             
            
          </tbody>
        </table>
      </div> */}
      
        <Card className="text-center">

          <Card.Header>Featured of my website</Card.Header>
          <Card.Body>
            <Card.Title>Slide show</Card.Title>
            <Card.Title>Contact form</Card.Title>
            <Card.Text>
              Thanks you for supporting us.
            </Card.Text>

          </Card.Body>
          <Card.Footer className="text-muted">My website</Card.Footer>
        </Card>
        <div className="bg-black text-light py-3">
          <p className="text-center">
            copyright &copy; website.com
          </p>
        </div>
      </>
    )
    }}