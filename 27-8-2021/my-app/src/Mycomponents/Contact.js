import React, {Component} from 'react'

export default class Footer extends Component {
 
    DATA;
  
    constructor(props) {
      super(props);
  
      this.eventName = this.eventName.bind(this);
      this.eventEmail = this.eventEmail.bind(this);
      this.eventContact = this.eventContact.bind(this);
      this.eventMessage = this.eventMessage.bind(this);
      this.eventHobbies = this.eventHobbies.bind(this);
      this.eventQualification = this.eventQualification.bind(this);
  
      this.onFormSubmit = this.onFormSubmit.bind(this);
  
      this.state = {
        name: '',
        email: '',
        contact: '',
        message: '',
        hobbies: '',
        qualification: ''
      }
    }
  
    // Event handlers
    eventName(event) {
      this.setState({ name: event.target.value })
    }
  
    eventEmail(event) {
      this.setState({ email: event.target.value })
    }
  
    eventContact(event) {
      this.setState({ contact: event.target.value })
    }
  
    eventMessage(event) {
      this.setState({ message: event.target.value })
    }
    eventHobbies(event)
    {
      this.setState({ hobbies: event.target.value })
    }
    eventQualification(event)
    {
      this.setState({ qualification: event.target.value})
    }
  
    onFormSubmit(event) {
      event.preventDefault()
    }
  
  
    componentDidMount() {
      this.DATA = JSON.parse(localStorage.getItem('Footer'));
  
      if (localStorage.getItem('Footer')) {
        this.setState({
          name: this.DATA.name,
          email: this.DATA.email,
          contact: this.DATA.contact,
          message: this.DATA.message,
          hobbies: this.DATA.hobbies,
          qualification: this.DATA.qualification
        })
      } else {
        /*this.setState({
            name: '',
            email: '',
            contact: '',
            message: ''
        })*/
      }
    }
    
    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('Footer', JSON.stringify(nextState));
     
    }
  
    render() {
      return (
        <>
        
          <div className="container">
  
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
        </div>
        
        </>
      )
    }
  }
  