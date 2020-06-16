import React, { useState, useEffect } from 'react';
import axios from "axios"

import './App.css';

import Student from "./student/student";
import Students from "./student/students";
import StudentForm from "./student/studentForm";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      studentList: [],
      currentStudent: {}
    }
    this.updateCurrentStudent = this.updateCurrentStudent.bind(this)
  }

  componentDidMount() {
    const config = { headers: { "Access-Control-Allow-Origin": "*" } }
    const url = "/students"
    axios.get(url, config)
      .then((Response) => {
        this.setState({
          studentList: Response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  updateCurrentStudent(item) {
    this.setState({
      currentStudent: item
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper purple darken-3">
              <a href="#" className="brand-logo">School</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className='col s3'><Students students={this.state.studentList}
            updateCurrentStudent={this.updateCurrentStudent} /></div>
          <div className='col s9'><Student student={this.state.currentStudent} /></div>

        </div>
        <div className="row">
          <div className='col s12'><StudentForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
