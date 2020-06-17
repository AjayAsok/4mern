import React from 'react';
import axios from 'axios'

class StudentForm extends React.Component {
    constructor(props) {
        super(props)
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.regNumber = React.createRef();
    }

    addStudent(event) {
        event.preventDefault();
        axios.post('/students', {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            regNumber: this.regNumber.current.value
        })
            .then((response) => {
                console.log(response);
                this.props.getStudent.bind(this)
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
                        <input id="firstName" ref={this.firstName} type="text" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="lastName" ref={this.lastName} type="text" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="regNumber" ref={this.regNumber} type="text" />
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