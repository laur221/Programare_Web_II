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
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupNameDto } from './dto/update-group-name.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('Groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Get()
  getAllGroups() {
    return this.groupsService.getAllGroups();
  }

  @Get(':id')
  getGroupById(@Param('id') id: string) {
    return this.groupsService.getGroupById(id);
  }

  @Post('')
  createGroup(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.createGroup(createGroupDto);
  }

  @Put(':id')
  updateGroup(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.updateGroup(id, updateGroupDto);
  }

  @Patch(':id')
  partiallyUpdateGroup(
    @Param('id') id: string,
    @Body() updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupsService.partiallyUpdateGroup(id, updateGroupDto);
  }

  @Patch(':id/update-name')
  updateGroupName(
    @Param('id') id: string,
    @Body() updateGroupNameDto: UpdateGroupNameDto,
  ) {
    return this.groupsService.updateGroupName(id, updateGroupNameDto.name);
  }

  @Delete(':id')
  deleteGroup(@Param('id') id: string) {
    return this.groupsService.deleteGroup(id);
  }
}
