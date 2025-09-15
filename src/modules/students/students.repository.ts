import { Injectable, Inject } from '@nestjs/common';
import { Student } from './student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Group } from '../groups/group.entity';
import { GroupsRepository } from '../groups/groups.repository';

@Injectable()
export class StudentsRepository {
    private Students: Student[];
    private Groups: { [key: number]: Group };

    constructor(@Inject(GroupsRepository) private groupsRepository: GroupsRepository,) {
        this.initializeStudents();
    }
    private initializeStudents() {
        this.Students = [
            { id: 1, name: 'Ion Slutu', age: 20, email: 'ion@gmail.com', phone: '123456789', address: 'Strada Alpina 51', groupId: 1, },
            { id: 2, name: 'Maria Popescu', age: 22, email: 'maria@gmail.com', phone: '987654321', address: 'Strada Pelenesti 3/2', groupId: 2, },
        ];
        this.loadGroups();
    }

    private loadGroups() {
        try {
            const groupsArray: Group[] = this.groupsRepository.getAllGroups();
            this.Groups = groupsArray.reduce<{ [key: number]: Group }>((acc, group) => {
                acc[group.id] = group;
                return acc;
            }, {});
        } catch (error) {
            this.Groups = {};
        }
    }

    getAllStudents() {
        return this.Students.map((student) => ({
            ...student,
            groupName: this.Groups ? this.Groups[student.groupId]?.name : null,
        }));
    }

    getStudentById(id: string) {
        return this.Students.find((student) => student.id === parseInt(id));
    }

    createStudent(name: string, age: number, email: string, phone: string, address: string, groupId: number,) {
        const newStudent = {
            id: this.Students.length + 1,
            name,
            age,
            email,
            phone,
            address,
            groupId,
        };
        const groupExists = this.Groups[groupId] !== undefined;
        if (!groupExists) {
            return null;
        }
        this.Students.push(newStudent);
        return newStudent;
    }
    updateStudent(id: string, updateStudentDto: UpdateStudentDto) {
        const studentIndex = this.Students.findIndex(
            (student) => student.id === parseInt(id),
        );
        if (studentIndex === -1) {
            return null;
        }
        const groupExists = this.Groups[parseInt(updateStudentDto.groupId.toString())] !== undefined;
        if (!groupExists) {
            return null;
        }

        const updatedStudent = {
            ...this.Students[studentIndex],
            ...updateStudentDto,
        };
        this.Students[studentIndex] = updatedStudent;
        return this.Students[studentIndex];
    }
    deleteStudent(id: string) {
        const studentIndex = this.Students.findIndex(
            (student) => student.id === parseInt(id),
        );
        if (studentIndex === -1) {
            return null;
        }
        const deletedStudent = this.Students.splice(studentIndex, 1);
        return deletedStudent[0];
    }
}
