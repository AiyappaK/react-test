import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };

    this.change=this.change.bind(this);
  }


  submit(evt){
    evt.preventDefault();
  }


  change(evt){
    evt.preventDefault();
    this.setState({
        username: this.target.name,
    });
  }

  render() {
    return (
      <div>

          <h1> user is {this.state.username}</h1>
        <form onSubmit={this.submit}>
          <input type="text" name="uname" value="" onChange={this.change}/>

          <input type="password" name="password" value="" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
