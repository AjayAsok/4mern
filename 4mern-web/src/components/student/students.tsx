import React, { useEffect } from 'react';
import { IStudent } from '../App';
import Student from './student';
import { getStudentFromService } from "../App";
// import { getStudent } from '../../services/student.service'

// // const Students = (props: any) => {
// //     return (<div>
// //         <ul className="collection with-header">
// //             <li className="collection-header"><h4>Students</h4></li>
// //             {props.students.map((item: any) => (
// //                 <a href="#!" className="collection-item" key={item._id}>{item.firstName}</a>
// //                 // onClick={props.updateCurrentStudent.bind(this, item)}>{item.firstName}
// //             ))}
// //         </ul>
// //     </div>);
// // }


// const Students: React.FC = (props: any) => {
//     getStudent();
//     const [students, setStudent] = React.useState<Array<any>>([]);
//     console.log(props)
//     // const addStudent = React.useCallback(async () => {
//     //   const newStudent = await getStudentFromService();
//     //   setStudent(x => [...x, newStudent]);
//     // }, []);

//     // const deleteStudent = React.useCallback(async id => {
//     //   setStudent(currValue => currValue.filter(x => x.id !== id));
//     // }, []);

//     return (
//         <React.Fragment>
//             {/* <button onClick={addStudent}>Add Student</button>
//         {students.map(x => (
//           <Student key={x.id} {...x} onClick={() => deleteStudent(x.id)} />
//         ))} */}

//             <ul className="collection with-header">
//                 <li className="collection-header"><h4>Students</h4></li>
//                 {props.students.map((item: any) => (
//                     <a href="#!" className="collection-item" key={item._id}>{item.firstName}</a>
//                     // onClick={props.updateCurrentStudent.bind(this, item)}>{item.firstName}
//                 ))}
//             </ul>
//         </React.Fragment>
//     );
// };

const Students: React.FC = () => {
    const [students, setStudent] = React.useState<Array<IStudent>>([]);
    const [selectedStudent, setSelectedStudent] = React.useState<IStudent>();


    useEffect(() => {
        getStudent()
    }, [])

    const getStudent = React.useCallback(async () => {
        const newStudent = await getStudentFromService();
        setStudent(newStudent);
    }, []);

    const addStudent = React.useCallback(async () => {
        const newStudent = await getStudentFromService();
        setStudent(newStudent);
    }, []);

    const deleteStudent = React.useCallback(async id => {
        setStudent(currValue => currValue.filter(x => x._id !== id));
    }, []);

    return (
        <React.Fragment>
            <div className="col s3">
                <button onClick={addStudent}>Add Student</button>
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Students</h4></li>
                    {students.map(x => (
                        <a href="#!" className="collection-item" key={x._id}
                            onClick={() => setSelectedStudent(x)}
                        >{x.firstName}</a>

                    ))}
                </ul>
            </div>
            <div className="col s6">
                <Student key={selectedStudent ? selectedStudent._id : ""} children={selectedStudent}
                /></div>
        </React.Fragment>
    );
};

export default Students