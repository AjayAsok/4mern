import React from 'react';

const Student = (props) => {
    return (
        <div className="col s12 m7">
            <h2 className="header">{props.student.firstName} {props.student.lastName} </h2>
            <div className="card horizontal">
                <div className="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6" />
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
                </div>
            </div>
        </div>
    );
}

export default Student