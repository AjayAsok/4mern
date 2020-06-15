import mongoose from "mongoose";
import { StudentSchema } from "../models/studentModel";

const Student = mongoose.model('Student', StudentSchema)

export const addStudent = (req, res) => {
    let stud = new Student(req.body)

    stud.save((err, Student) => {
        if (err) {
            res.send(err)
        }
        res.json(Student)
    })
}

export const getStudent = (req, res) => {

    Student.find({}, (err, Student) => {
        if (err) {
            res.send(err)
        }
        res.json(Student)
    })
}

export const getStudentByID = (req, res) => {

    Student.findById(req.params.studentId, (err, Student) => {
        if (err) {
            res.send(err)
        }
        res.json(Student)
    })
}

export const updateStudent = (req, res) => {

    Student.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, (err, Student) => {
        if (err) {
            res.send(err)
        }
        res.json(Student)
    })
}

export const deleteStudent = (req, res) => {

    Student.remove({ _id: req.params.studentId }, (err, Student) => {
        if (err) {
            res.send(err)
        }
        res.json({ message: req.params.studentId + " deleted successfully" })
    })
}