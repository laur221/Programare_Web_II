import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentNameDto } from './dto/update-student-name.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('Students')
export class StudentsController {
  constructor(private StudentsService: StudentsService) { }

  @Get()
  getAllStudents() {
    return this.StudentsService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.StudentsService.getStudentById(id);
  }

  @Post('')
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.StudentsService.createStudent(createStudentDto);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.StudentsService.updateStudent(id, updateStudentDto);
  }

  @Patch(':id')
  partiallyUpdateStudent(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.StudentsService.partiallyUpdateStudent(id, updateStudentDto);
  }

  @Patch(':id/update-name')
  updateStudentName(
    @Param('id') id: string,
    @Body() updateStudentNameDto: UpdateStudentNameDto,
  ) {
    return this.StudentsService.updateStudentName(
      id,
      updateStudentNameDto.name,
    );
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.StudentsService.deleteStudent(id);
  }
}
