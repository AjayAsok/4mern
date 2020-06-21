import React, { useState, useEffect } from 'react';
import axios from "axios"

import './App.css';

import Student from "./student/student";
import Students from "./student/students";
import StudentForm from "./student/studentForm";


function App() {

  const [currentStudent, updateCurrentStudent] = useState({})
  const [students, setStudents] = useState([])
  const [addStatus, setaddStatus] = useState(false)
  const [editStatus, setEditStaus] = useState(false)

  useEffect(() => {
    getStudent()
  }, [])

  useEffect(() => {
    if (editStatus) setaddStatus(false)
  }, [editStatus])
  useEffect(() => {
  }, [currentStudent])

  useEffect(() => {
  }, [students])

  useEffect(() => {
    if (addStatus) setEditStaus(false)
  }, [addStatus])

  function getStudent() {
    const config = { headers: { "Access-Control-Allow-Origin": "*" } }
    const url = "http://127.0.0.1:3100/students"
    axios.get(url, config)
      .then((Response) => {
        setStudents(Response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function deleteStudent(id) {
    axios.delete('http://127.0.0.1:3100/students/' + id)
      .then((response) => {
        console.log(response);
        getStudent();
      })
      .catch((error) => {
        console.error(error)
      })
  }


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
        <button className="btn waves-effect waves-light" disabled={addStatus} onClick={() => setaddStatus(true)}>Add Student</button>
      </div>
      <div className="row">
        <div className='col s3'><Students students={students}
          updateCurrentStudent={updateCurrentStudent} /></div>
        <div className='col s9'><Student student={currentStudent} setEditStaus={setEditStaus}
          deleteStudent={deleteStudent} editStatus={editStatus} />
        </div>
      </div>
      <div className="row">
        <div className='col s12'>{addStatus || editStatus ? <StudentForm setStudents={setStudents} getStudent={getStudent}
          setaddStatus={setaddStatus} setEditStaus={setEditStaus}
          student={currentStudent} editStatus={editStatus} /> : null}</div>
      </div>
    </div>
  );
}


export default App
