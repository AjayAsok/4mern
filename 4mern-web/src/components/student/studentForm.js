import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Student from './student';

function StudentForm(props) {// extends React.Component {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [regNumber, setRegNumber] = useState(0)


    useEffect(() => {
    }, [firstName])
    useEffect(() => {
    }, [lastName])
    useEffect(() => {
    }, [regNumber])


    function addStudent(event) {
        event.preventDefault();
        console.log(lastName)
        axios.post('http://127.0.0.1:3100/students', {
            firstName: firstName,
            lastName: lastName,
            regNumber: regNumber
        })
            .then((response) => {
                props.getStudent()
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function editStudent(event) {
        event.preventDefault();
        let url = 'http://127.0.0.1:3100/students/' + props.student._id
        axios.put(url, {
            firstName: firstName,
            lastName: lastName,
            regNumber: regNumber
        })
            .then((response) => {
                props.getStudent()
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (<div className="row">
        <h4 className="center">{props.editStatus ? `Edit Details of ` + props.student.firstName : `Add Student`}</h4>
        <form className="col s12">
            {/* onSubmit={props.editStatus ? editStudent : addStudent}> */}
            <div className="row">
                <div className="input-field col s4">
                    <input id="firstName" type="text"
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field col s4">
                    <input id="lastName" type="text"
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }} />
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="input-field col s4">
                    <input id="regNumber" type="text"
                        onChange={(e) => {
                            setRegNumber(e.target.value)
                        }} />
                    <label htmlFor="regNumber">Register Number</label>
                </div>
                <>
                    {props.editStatus
                        ?
                        <button className="btn waves-effect waves-light" type="submit"
                            onClick={editStudent}>
                            Edit Student</button>
                        :
                        <button className="btn waves-effect waves-light" type="submit" name="action"
                            onClick={addStudent}>
                            Add Student</button>
                    }
                </>
                <button className="btn waves-effect waves-light" onClick={() => {
                    props.setaddStatus(false)
                    props.setEditStaus(false)
                }}>Close</button>
            </div>

        </form>
    </div>
    );
}


export default StudentForm;