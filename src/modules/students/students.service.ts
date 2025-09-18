import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { group } from 'console';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) { }
  getAllStudents() {
    return this.studentsRepository.find({
      relations: ['group'],
      select: {
        id: true,
        name: true,
        age: true,
        email: true,
        phone: true,
        address: true,
        group: {
          name: true,
        }
      }
    });
  }

  async getStudentById(id: string) {
    const student = await this.studentsRepository.findOne({
      where: { id: parseInt(id) },
      relations: ['group'],
      select: {
        id: true,
        name: true,
        age: true,
        email: true,
        phone: true,
        address: true,
        group: {
          name: true,
        }
      }
    });
    if (!student) {
      throw new NotFoundException(`Student with ID = ${id} not found.`);
    }
    return student;
  }

  async createStudent(createStudentDto: any) {
    try {
      const newStudent = this.studentsRepository.create(createStudentDto);
      return await this.studentsRepository.save(newStudent);
    }
    catch (error) {
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new NotFoundException(`Group does not exist`);
      }
    }
  }

  async updateStudent(id: string, updateStudentDto: any) {
    try {
      const student = await this.getStudentById(id);
      return await this.studentsRepository.update(id, updateStudentDto);
    }
    catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new NotFoundException(`Group does not exist`);
      }
    }
  }

  async partiallyUpdateStudent(id: string, updateStudentDto: any) {
    try {
      const student = await this.getStudentById(id);
      return await this.studentsRepository.update(id, updateStudentDto);
    }
    catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new NotFoundException(`Group does not exist`);
      }
    }
  }

  async deleteStudent(id: string) {
    const result = await this.studentsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return { message: `Student deleted successfully` };
  }

  async updateStudentName(id: string, name: string) {
    const student = await this.getStudentById(id);
    student.name = name;
    return await this.studentsRepository.save(student);
  }
}