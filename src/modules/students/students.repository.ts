import { Injectable } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./student.entity";
import { UpdateStudentDto } from "./dto/update-student.dto";

@Injectable()
export class StudentsRepository {
    private Students: Student[];

    constructor() {
        this.initializeStudents();
    }

    private initializeStudents() {
        this.Students = [
            { id: 1, name: 'Ion Slutu', age: 20, email: 'ion@gmail.com', phone: "123456789", address: 'Strada Alpina 51' },
            { id: 2, name: 'Maria Popescu', age: 22, email: 'maria@gmail.com', phone: "987654321", address: 'Strada Pelenesti 3/2' }
        ];
    }

    getAllStudents() {
        return this.Students;
    }

    getStudentById(id: string) {
        return this.Students.find(student => student.id === parseInt(id));
    }

    createStudent(name: string, age: number, email: string, phone: string, address: string) {
        const newStudent = {
            id: this.Students.length + 1,
            name,
            age,
            email,
            phone,
            address
        };
        this.Students.push(newStudent);
        return newStudent;
    }
    updateStudent(id: string, updateStudentDto: UpdateStudentDto) {
        const studentIndex = this.Students.findIndex(student => student.id === parseInt(id));
        if (studentIndex === -1) {
            return null;
        }
        const updatedStudent = { ...this.Students[studentIndex], ...updateStudentDto };
        this.Students[studentIndex] = updatedStudent;
        return this.Students[studentIndex];
    }
    deleteStudent(id: string) {
        const studentIndex = this.Students.findIndex(student => student.id === parseInt(id));
        if (studentIndex === -1) {
            return null;
        }
        const deletedStudent = this.Students.splice(studentIndex, 1);
        return deletedStudent[0];
    }
}
