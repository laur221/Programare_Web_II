import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
  ) {}
  getAllGroups() {
    return this.groupsRepository.find();
  }

  getGroupById(id: string) {
    return this.groupsRepository.findOneBy({ id: parseInt(id) });
  }

  createGroup(createGroupDto: any) {
    const newGroup = this.groupsRepository.create(createGroupDto);
    return this.groupsRepository.save(newGroup);
  }

  updateGroup(id: string, updateGroupDto: any) {
    return this.groupsRepository.update(id, updateGroupDto);
  }

  partiallyUpdateGroup(id: string, updateGroupDto: any) {
    return this.groupsRepository.update(id, updateGroupDto);
  }

  deleteGroup(id: string) {
    return this.groupsRepository.delete(id);
  }

  async updateGroupName(id: string, name: string) {
    const group = await this.getGroupById(id);
    if (group) {
      group.name = name;
      return this.groupsRepository.save(group);
    }
    return null;
  }
}