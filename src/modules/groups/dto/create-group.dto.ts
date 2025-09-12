import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({ example: 'IT11Z', description: 'The name of the group' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'A group for IT students',
    description: 'The description of the group',
  })
  @IsString()
  description: string;
}
