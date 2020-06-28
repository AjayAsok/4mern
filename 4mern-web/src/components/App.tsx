// import React, { useState, useEffect } from 'react';
// import axios from "axios"

// import './App.css';

// import Student from "./student/student";
// import Students from "./student/students";
// import StudentForm from "./student/studentForm";




// const [currentStudent, updateCurrentStudent] = useState({})
// const [students, setStudents] = useState([])
// const [addStatus, setaddStatus] = useState(false)
// const [editStatus, setEditStaus] = useState(false)

// useEffect(() => {
//   getStudent()
// }, [])

// useEffect(() => {
//   if (editStatus) setaddStatus(false)
// }, [editStatus])

// useEffect(() => {
// }, [currentStudent])

// useEffect(() => {
// }, [students])

// useEffect(() => {
//   if (addStatus) setEditStaus(false)
// }, [addStatus])

// const getStudent = async (): Promise<any> => {
//   const url = "http://127.0.0.1:3100/students"
//   return new Promise(resolve => {
//     fetch(url, { method: 'GET' }).then((response) => {
//       return response.json()
//     }).then((responseData) => {
//       setStudents(responseData)
//     })
//       .catch((err) => {
//         console.error(err)
//       })
//   })
// };

// function deleteStudent(id: string) {
//   axios.delete('http://127.0.0.1:3100/students/' + id)
//     .then((response) => {
//       console.log(response);
//       getStudent();
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }





// export default function App() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <nav>
//           <div className="nav-wrapper purple darken-3">
//             <a href="!" className="brand-logo">School</a>
//           </div>
//         </nav>
//       </div>
//       <div className="row">
//         <button className="btn waves-effect waves-light" disabled={addStatus} onClick={() => setaddStatus(true)}>Add Student</button>
//       </div>
//       <div className="row">
//         <div className='col s3'><Students /></div>
//         <div className='col s9'><Student student={currentStudent} setEditStaus={setEditStaus}
//           deleteStudent={deleteStudent} editStatus={editStatus} />
//         </div>
//       </div>
//       <div className="row">
//         <div className='col s12'>{addStatus || editStatus ? <StudentForm setStudents={setStudents} getStudent={getStudent}
//           setaddStatus={setaddStatus} setEditStaus={setEditStaus}
//           student={currentStudent} editStatus={editStatus} /> : null}</div>
//       </div>
//     </div>
//   );
// }





import * as React from "react";
import Students from "./student/students";
// import "../components/App.css";

export interface IStudent {
  created_date: string
  firstName: string
  isEligible: boolean
  lastName: string
  regNumber: number
  _id: string
  onClick?: () => void;
}

export const getStudentFromService = async (): Promise<IStudent[]> => {

  const url = "http://127.0.0.1:3100/students"
  return new Promise(resolve => {
    fetch(url, { method: 'GET' }).then((response) => {
      return response.json()
    }).then((responseData) => {
      resolve(responseData)
    })
      .catch((err) => {
        console.error(err)
      })
  })
};



export default function App() {
  return (
    <div className="App">
      <Students />
    </div>
  );
}


