import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateTeacherNameDto {
  @ApiProperty({ example: 'Adam Wolter', description: 'The name of the teacher' })
  @IsString()
  name: string;
}
