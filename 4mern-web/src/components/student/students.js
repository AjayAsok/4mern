import React from 'react';

const Students = (props) => {
    return (<div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Students</h4></li>
            {props.students.map((item) => (
                <a href="#!" className="collection-item" key={item._id}
                    onClick={props.updateCurrentStudent.bind(this, item)}>{item.firstName}</a>
            ))}
        </ul>
    </div>);
}

export default Students