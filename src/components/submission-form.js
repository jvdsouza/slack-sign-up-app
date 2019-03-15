import React from "react"

export default class SubmissionForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    return (
    <div>
        <div>
          <div className='ma2'>First Name</div>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <div className='ma2'>Last name</div>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <div className='ma2'>Email*</div>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <p className='ma1'>* = Required</p>
        <button 
          className='ma3' 
          type="submit" 
          onSubmit={this.handleSubmit}>Submit</button>
    </div>
    )
  }
}