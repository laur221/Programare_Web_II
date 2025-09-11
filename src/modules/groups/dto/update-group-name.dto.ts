import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateGroupNameDto {

    @ApiProperty({example: 'IT21Z', description: 'The name of the group'})
    @IsString()
    name: string;
}
