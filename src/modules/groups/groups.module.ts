import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { Group } from './group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  exports: [TypeOrmModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
