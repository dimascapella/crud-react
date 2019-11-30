import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      nama: '',
      email: '',
      password: ''
    }
  }

  onChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const newTodo = {
      nama: this.state.nama,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:8000/todos/add', newTodo)
      .then(res => console.log(res.data));

    this.setState({
      nama: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.nama} onChange={event => this.onChange('nama', event.target.value)} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" value={this.state.email} onChange={event => this.onChange('email', event.target.value)} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={event => this.onChange('password', event.target.value)} />
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    )
  }
}
