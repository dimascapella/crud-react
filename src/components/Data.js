import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Data extends Component {

  componentDidMount() {
    axios.get('http://localhost:8000/todos/')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidUpdate() {
    axios.get('http://localhost:8000/todos/')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.todos.map(todo => {
                  return (
                    <tr>
                      <td>{todo.nama}</td>
                      <td>{todo.email}</td>
                      <td>{todo.password}</td>
                      <td>
                        <Link to={"/edit/" + todo._id} ><button className="btn btn-primary" >Edit</button></Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
