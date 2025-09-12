import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { TeachersRepository } from './teachers.repository';
import { GroupsRepository } from '../groups/groups.repository';

@Injectable()
export class TeachersService {
  constructor(
    private TeachersRepository: TeachersRepository,
    private GroupsRepository: GroupsRepository,
  ) {}

  getAllTeachers() {
    return this.TeachersRepository.getAllTeachers();
  }

  getTeacherById(id: string) {
    const Teacher = this.TeachersRepository.getTeacherById(id);
    if (!Teacher) {
      throw new HttpException('Teacher not found', HttpStatus.NOT_FOUND);
    }
    return Teacher;
  }

  createTeacher(createTeacherDto: CreateTeacherDto) {
    if (!this.GroupsRepository.getGroupById(createTeacherDto.groupId.toString())) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    const newTeacher = this.TeachersRepository.createTeacher(
      createTeacherDto.name,
      createTeacherDto.age,
      createTeacherDto.work_age,
      createTeacherDto.groupId,
    );
    if (!newTeacher) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    return newTeacher;

  }

  updateTeacher(id: string, updateTeacherDto: CreateTeacherDto) {
    const Teacher = this.getTeacherById(id);
    const Group = this.GroupsRepository.getGroupById(
      updateTeacherDto.groupId.toString(),
    );
    if (!Teacher) {
      throw new HttpException('Teacher not found', HttpStatus.NOT_FOUND);
    } else if (!Group) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    return this.TeachersRepository.updateTeacher(id, updateTeacherDto);
  }

  partiallyUpdateTeacher(id: string, updateTeacherDto: CreateTeacherDto) {
    const Teacher = this.getTeacherById(id);
    if (!Teacher) {
      throw new HttpException('Teacher not found', HttpStatus.NOT_FOUND);
    }
    return this.TeachersRepository.updateTeacher(id, updateTeacherDto);
  }

  deleteTeacher(id: string) {
    this.getTeacherById(id);
    return this.TeachersRepository.deleteTeacher(id);
  }

  updateTeacherName(id: string, name: string) {
    const Teacher = this.getTeacherById(id);
    if (!Teacher) {
      throw new HttpException('Teacher not found', HttpStatus.NOT_FOUND);
    }
    Teacher.name = name;
    return this.TeachersRepository.updateTeacher(id, Teacher);
  }
}
