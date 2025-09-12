import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsRepository } from './groups.repository';

@Injectable()
export class GroupsService {
  constructor(private groupsRepository: GroupsRepository) {}

  getAllGroups() {
    return this.groupsRepository.getAllGroups();
  }

  getGroupById(id: string) {
    const group = this.groupsRepository.getGroupById(id);
    if (!group) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    return group;
  }

  createGroup(createGroupDto: CreateGroupDto) {
    return this.groupsRepository.createGroup(
      createGroupDto.name,
      createGroupDto.description,
    );
  }

  updateGroup(id: string, updateGroupDto: CreateGroupDto) {
    const group = this.getGroupById(id);
    if (!group) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    return this.groupsRepository.updateGroup(id, updateGroupDto);
  }

  partiallyUpdateGroup(id: string, updateGroupDto: CreateGroupDto) {
    const group = this.getGroupById(id);
    if (!group) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    return this.groupsRepository.updateGroup(id, updateGroupDto);
  }

  deleteGroup(id: string) {
    this.getGroupById(id);
    return this.groupsRepository.deleteGroup(id);
  }

  updateGroupName(id: string, name: string) {
    const group = this.getGroupById(id);
    if (!group) {
      throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }
    group.name = name;
    return this.groupsRepository.updateGroup(id, group);
  }
}
