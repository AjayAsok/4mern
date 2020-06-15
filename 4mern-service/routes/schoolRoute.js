import { addStudent, getStudent, getStudentByID, updateStudent, deleteStudent } from "../controllers/studentController";

const route = (app) => {
    app.route('/students')
        .post(addStudent)
        .get(getStudent)

    app.route('/students/:studentId')
        .get(getStudentByID)
        .put(updateStudent)
        .delete(deleteStudent)
}

export default route