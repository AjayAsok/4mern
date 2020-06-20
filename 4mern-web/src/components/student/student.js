import React from 'react';

const Student = (props) => {
    let isEmpty = Object.keys(props.student).length === 0
    return (
        <>
            <div className="col s12 m7">
                {isEmpty ? <div><h4>Please select a student from the left menu</h4></div> : <div>
                    <h2 className="header">{props.student.firstName} {props.student.lastName} </h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="" alt={props.student.firstName} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>RegisterNumber : {props.student.regNumber}</p>
                            </div>
                            <div className="card-action">
                                Eligibility: {
                                    props.student.isEligible ? `Eligible` : `Not Eligible`
                                }
                            </div>
                            <button className='btn btn-danger waves-effect waves-light m7' onClick={() => props.setEditStaus(true)}>Edit</button>
                            <button className='btn btn-danger waves-effect waves-light m7' onClick={props.deleteStudent.bind(this, props.student._id)}>Delete Student</button>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    );
}

export default Student