import { Injectable, Inject } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from './teacher.entity';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Group } from '../groups/group.entity';
import { CreateGroupDto } from '../groups/dto/create-group.dto';
import { GroupsRepository } from '../groups/groups.repository';

@Injectable()
export class TeachersRepository {
    private Teachers: Teacher[];
    private Groups: Group[];

    constructor(@Inject(GroupsRepository) private groupsRepository: GroupsRepository,) {
        this.initializeTeachers();
    }

    private initializeTeachers() {
        this.Teachers  = [
            { id: 1, name: 'Andrian Marescu', age: 44, work_age: 5, groupId: 1, },
            { id: 2, name: 'Maria Popescu', age: 22, work_age: 2, groupId: 2, },
        ];
        this.loadGroups();
    }

    private loadGroups() {
        try {
            this.Groups = this.groupsRepository.getAllGroups();
        } catch (error) {
            this.Groups = [];
        }
    }
    getAllTeachers() {
        return this.Teachers.map((teacher) => ({
            ...teacher,
            groupName: this.Groups
                ? this.Groups.find((group) => group.id === teacher.groupId)?.name : null,
        }));
    }

    getTeacherById(id: string) {
        return this.Teachers.find((teacher) => teacher.id === parseInt(id));
    }

    createTeacher(name: string, age: number, work_age: number, groupId: number,) {
        const newTeacher = {
            id: this.Teachers.length + 1,
            name,
            age,
            work_age,
            groupId,
        };
        const groupExists = this.Groups.some((group) => group.id === groupId);
        if (!groupExists) {
            return null;
        }
        this.Teachers.push(newTeacher);
        return newTeacher;
    }
    updateTeacher(id: string, updateTeacherDto: UpdateTeacherDto) {
        const teacherIndex = this.Teachers.findIndex(
            (teacher) => teacher.id === parseInt(id),
        );
        if (teacherIndex === -1) {
            return null;
        }
        const groupIndex = this.Groups.findIndex(
            (group) => group.id === parseInt(updateTeacherDto.groupId.toString()),
        );
        if (groupIndex === -1) {
            return null;
        }

        const updatedTeacher = {
            ...this.Teachers[teacherIndex],
            ...updateTeacherDto,
        };
        this.Teachers[teacherIndex] = updatedTeacher;
        return this.Teachers[teacherIndex];
    }
    deleteTeacher(id: string) {
        const teacherIndex = this.Teachers.findIndex(
            (teacher) => teacher.id === parseInt(id),
        );
        if (teacherIndex === -1) {
            return null;
        }
        const deletedTeacher = this.Teachers.splice(teacherIndex, 1);
        return deletedTeacher[0];
    }
}
