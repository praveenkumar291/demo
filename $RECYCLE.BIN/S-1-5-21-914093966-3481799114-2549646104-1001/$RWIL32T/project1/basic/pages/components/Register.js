import React, { Component } from "react";
// import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      emailid: "",
    };
  }
  UpdateState = (event) => {
    var value = event.target.value;
    var name = event.target.name;
    this.setState({ [name]: value });
  };
  formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <br></br>
          <input
            type="text"
            onChange={this.UpdateState}
            name="username"
            placeholder="username here"
          ></input>
          <br></br>
          <br></br>

          <input
            type="password"
            onChange={this.UpdateState}
            name="password"
            placeholder="password here"
          ></input>
          <br></br>
          <br></br>
          <input
            type="email"
            onChange={this.UpdateState}
            name="emailid"
            placeholder="email here"
          ></input>
          <br></br>
          <br></br>
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
