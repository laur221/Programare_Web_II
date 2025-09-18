import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}
  getAllStudents() {
    return this.studentsRepository.find();
  }

  getStudentById(id: string) {
    return this.studentsRepository.findOneBy({ id: parseInt(id) });
  }

  createStudent(createStudentDto: any) {
    const newStudent = this.studentsRepository.create(createStudentDto);
    return this.studentsRepository.save(newStudent);
  }

  updateStudent(id: string, updateStudentDto: any) {
    return this.studentsRepository.update(id, updateStudentDto);
  }

  partiallyUpdateStudent(id: string, updateStudentDto: any) {
    return this.studentsRepository.update(id, updateStudentDto);
  }

  deleteStudent(id: string) {
    return this.studentsRepository.delete(id);
  }

  async updateStudentName(id: string, name: string) {
    const student = await this.getStudentById(id);
    if (student) {
      student.name = name;
      return this.studentsRepository.save(student);
    }
    return null;
  }
}