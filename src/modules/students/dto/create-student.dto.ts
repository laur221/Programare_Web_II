import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({
    example: 'Mihail Smirnov',
    description: 'The name of the student',
  })
  @IsString()
  name: string;

  @ApiProperty({ example: 22, description: 'The age of the student' })
  @IsNumber()
  age: number;

  @ApiProperty({
    example: 'mihail.smirnov@gmail.com',
    description: 'The email of the student',
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: '+373 60 123 456',
    description: 'The phone number of the student',
  })
  @IsNumber()
  phone: string;

  @ApiProperty({
    example: 'Mircea cel Batrin',
    description: 'The address of the student',
  })
  @IsString()
  address: string;

  @ApiProperty({
    example: 1,
    description: 'The ID of the group the student belongs to',
  })
  @IsNumber()
  groupId: number;
}
