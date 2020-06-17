import React from 'react';
import axios from 'axios'

class StudentForm extends React.Component {
    addStudent(event) {
        event.preventDefault();
        console.log(this.refs)
        axios.post('/students', {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            regNumber: this.refs.regNumber.value
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error)
            })
    }
    render() {
        return (<div className="row">
            <h4 className="center">Add Student</h4>
            <form className="col s12" onSubmit={this.addStudent.bind(this)}>
                <div className="row">
                    <div className="input-field col s4">
                        <input id="firstName" ref="firstName" type="text" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="lastName" ref="lastName" type="text" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="regNumber" ref="regNumber" type="text" />
                        <label htmlFor="regNumber">Register Number</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add Student</button>
                </div>

            </form>
        </div>
        );
    }
}

export default StudentForm;