import React, { useState, useEffect } from 'react';
import axios from "axios"

import './App.css';

import Student from "./student/student";
import Students from "./student/students";
import StudentForm from "./student/studentForm";


function App() {

  const [currentStudent, updateCurrentStudent] = useState({})
  const [students, setStudents] = useState([])

  function deleteStudent(id) {
    console.log(id)

    axios.delete('/students/' + id)
      .then((response) => {
        console.log(response);
        getStudent();
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getStudent()
  }, [])

  function getStudent() {
    const config = { headers: { "Access-Control-Allow-Origin": "*" } }
    const url = "/students"
    axios.get(url, config)
      .then((Response) => {
        setStudents(Response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
  }, [currentStudent])

  useEffect(() => {
    console.log("Change")
  }, [students])

  return (
    <div className="container-fluid">
      <div className="row">
        <nav>
          <div className="nav-wrapper purple darken-3">
            <a href="!" className="brand-logo">School</a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className='col s3'><Students students={students}
          updateCurrentStudent={updateCurrentStudent} /></div>
        <div className='col s9'><Student student={currentStudent} deleteStudent={deleteStudent}
        /></div>
      </div>
      <div className="row">
        <div className='col s12'><StudentForm setStudents={setStudents} getStudent={getStudent} /></div>
      </div>
    </div>
  );
}


export default App
