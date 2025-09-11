import { Injectable } from "@nestjs/common";
import { CreateGroupDto } from "./dto/create-group.dto";
import { Group } from "./group.entity";
import { UpdateGroupDto } from "./dto/update-group.dto";

@Injectable()
export class GroupsRepository {
    private groups: Group[];

    constructor() {
        this.initializeGroups();
    }

    private initializeGroups() {
        this.groups = [
            { id: 1, name: 'IT31Z', description: 'Tehnologii informationale anul 3' },
            { id: 2, name: 'IT21z', description: 'Tehnologii informationale anul 2' }
        ];
    }

    getAllGroups() {
        return this.groups;
    }

    getGroupById(id: string) {
        return this.groups.find(group => group.id === parseInt(id));
    }

    createGroup(name: string, description: string) {
        const newGroup = {
            id: this.groups.length + 1,
            name,
            description
        };
        this.groups.push(newGroup);
        return newGroup;
    }
    updateGroup(id: string, updateGroupDto: UpdateGroupDto) {
        const groupIndex = this.groups.findIndex(group => group.id === parseInt(id));
        if (groupIndex === -1) {
            return null;
        }
        const updatedGroup = { ...this.groups[groupIndex], ...updateGroupDto };
        this.groups[groupIndex] = updatedGroup;
        return this.groups[groupIndex];
    }
    deleteGroup(id: string) {
        const groupIndex = this.groups.findIndex(group => group.id === parseInt(id));
        if (groupIndex === -1) {
            return null;
        }
        const deletedGroup = this.groups.splice(groupIndex, 1);
        return deletedGroup[0];
    }
}
