import { Controller, Get, Post, Param, Put, Delete, Patch, Body } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherNameDto } from './dto/update-teacher-name.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('Teachers')
export class TeachersController {
  constructor(private TeachersService: TeachersService) { }

  @Get()
  getAllTeachers() {
    return this.TeachersService.getAllTeachers();
  }

  @Get(':id')
  getTeacherById(@Param('id') id: string) {
    return this.TeachersService.getTeacherById(id);
  }

  @Post('')
  createTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    return this.TeachersService.createTeacher(createTeacherDto);
  }

  @Put(':id')
  updateTeacher(
    @Param('id') id: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.TeachersService.updateTeacher(id, updateTeacherDto);
  }

  @Patch(':id')
  partiallyUpdateTeacher(
    @Param('id') id: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return this.TeachersService.partiallyUpdateTeacher(id, updateTeacherDto);
  }

  @Patch(':id/update-name')
  updateTeacherName(
    @Param('id') id: string,
    @Body() updateTeacherNameDto: UpdateTeacherNameDto,
  ) {
    return this.TeachersService.updateTeacherName(
      id,
      updateTeacherNameDto.name,
    );
  }

  @Delete(':id')
  deleteTeacher(@Param('id') id: string) {
    return this.TeachersService.deleteTeacher(id);
  }
}
