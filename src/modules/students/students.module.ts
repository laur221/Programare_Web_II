import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { Student } from './student.entity';
import { GroupsModule } from '../groups/groups.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [GroupsModule, TypeOrmModule.forFeature([Student])],
  exports: [TypeOrmModule],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
