import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsRepository } from './students.repository';
import { GroupsRepository } from '../groups/groups.repository';

@Injectable()
export class StudentsService {
  constructor(
    private StudentsRepository: StudentsRepository,
    private GroupsRepository: GroupsRepository,
  ) {}

  getAllStudents() {
    return this.StudentsRepository.getAllStudents();
  }

  getStudentById(id: string) {
    const Student = this.StudentsRepository.getStudentById(id);
    if (!Student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    return Student;
  }

  createStudent(createStudentDto: CreateStudentDto) {
    if (!this.GroupsRepository.getGroupById(createStudentDto.groupId.toString())) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    const newStudent = this.StudentsRepository.createStudent(
      createStudentDto.name,
      createStudentDto.age,
      createStudentDto.email,
      createStudentDto.phone,
      createStudentDto.address,
      createStudentDto.groupId,
    );
    if (!newStudent) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    return newStudent;

  }

  updateStudent(id: string, updateStudentDto: CreateStudentDto) {
    const Student = this.getStudentById(id);
    const Group = this.GroupsRepository.getGroupById(
      updateStudentDto.groupId.toString(),
    );
    if (!Student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    } else if (!Group) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    return this.StudentsRepository.updateStudent(id, updateStudentDto);
  }

  partiallyUpdateStudent(id: string, updateStudentDto: CreateStudentDto) {
    const Student = this.getStudentById(id);
    if (!Student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    return this.StudentsRepository.updateStudent(id, updateStudentDto);
  }

  deleteStudent(id: string) {
    this.getStudentById(id);
    return this.StudentsRepository.deleteStudent(id);
  }

  updateStudentName(id: string, name: string) {
    const Student = this.getStudentById(id);
    if (!Student) {
      throw new HttpException('Student not found', HttpStatus.NOT_FOUND);
    }
    Student.name = name;
    return this.StudentsRepository.updateStudent(id, Student);
  }
}
