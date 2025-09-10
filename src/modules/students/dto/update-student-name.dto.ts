import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateStudentNameDto {

    @ApiProperty({example: 'Mihail Smirnov', description: 'The name of the student'})
    @IsString()
    name: string;
}
