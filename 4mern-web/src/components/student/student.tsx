import React from 'react';
import { IStudent } from '../App';

// export interface IStudent {
//     student: {
//         firstName: string,
//         lastName: string,
//         regNumber: number,
//         isEligible: boolean
//     }
// }
// const Student = (props: any) => {
//     let isEmpty = Object.keys(props.student).length === 0
//     return (
//         <>
//             <div className="col s12 m7">
//                 {isEmpty ? <div><h4>Please select a student from the left menu</h4></div> : <div>
//                     <h2 className="header">{props.student.firstName} {props.student.lastName} </h2>
//                     <div className="card horizontal">
//                         <div className="card-image">
//                             <img src="" alt={props.student.firstName} />
//                         </div>
//                         <div className="card-stacked">
//                             <div className="card-content">
//                                 <p>RegisterNumber : {props.student.regNumber}</p>
//                             </div>
//                             <div className="card-action">
//                                 Eligibility: {
//                                     props.student.isEligible ? `Eligible` : `Not Eligible`
//                                 }
//                             </div>
//                             {/* <button className='btn btn-danger waves-effect waves-light m7' onClick={() => props.setEditStaus(true)}>Edit</button>
//                             <button className='btn btn-danger waves-effect waves-light m7' onClick={props.deleteStudent.bind(this, props.student._id)}>Delete Student</button> */}
//                         </div>
//                     </div>
//                 </div>}
//             </div>
//         </>
//     );
// }

const Student: React.FC<IStudent> = ({ firstName, onClick }) => {
    console.log(firstName)
    return (
        <div
            style={{ display: "flex", justifyContent: "space-between", margin: 8 }}
        >
            <h5>{firstName}</h5>
            <button onClick={onClick}>delete</button>
        </div>
    );
};

export default Student