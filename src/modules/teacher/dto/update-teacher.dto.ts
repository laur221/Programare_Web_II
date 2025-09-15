import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateTeacherDto {
  @ApiProperty({ example: 'Adam Walter', description: 'The name of the teacher' })
  @IsString()
  name: string;

  @ApiProperty({ example: 30, description: 'The age of the teacher' })
  @IsNumber()
  age: number;

  @ApiProperty({ example: 3, description: 'The work age of the teacher' })
  @IsNumber()
  work_age: number;

  @ApiProperty({ example: 1, description: 'The ID of the group the teacher belongs to' })
  @IsNumber()
  groupId: number;
}
