import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

  constructor(props) {
    super(props);

    this.onChangeNama = this.onChangeNama.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nama: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/todos/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          nama: response.data.nama,
          email: response.data.email,
          password: response.data.password
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeNama(e) {
    this.setState({
      nama: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newTodo = {
      nama: this.state.nama,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:8000/todos/update/' + this.props.match.params.id, newTodo)
      .then(res => console.log(res.data));

    this.props.history.push('/data');
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
                <input type="text" className="form-control" value={this.state.nama} onChange={this.onChangeNama} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
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