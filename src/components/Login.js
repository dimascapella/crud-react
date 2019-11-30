import React, { Component } from 'react';
import login from './UserFunction';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const User = {
      email: this.state.email,
      password: this.state.password
    }

    login(User).then(res => {
      if (res) {
        this.props.history.push('/profile')
      }
    })
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <form onSubmit={this.onSubmit}>
              <h1>Sign In</h1>
              <div className="form-group mt-3">
                <label>Email</label>
                <input type="text" className="form-control" value={this.state.email} onChange={event => this.onChange('email', event.target.value)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={event => this.onChange('password', event.target.value)} />
              </div>
              <button className="btn btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
