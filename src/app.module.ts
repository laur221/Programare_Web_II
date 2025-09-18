import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { PostsModule } from './modules/posts/posts.module';
import { GroupsModule } from './modules/groups/groups.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Student } from './modules/students/student.entity';
import { Group } from './modules/groups/group.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '1234',
      database: 'pw2',
      entities: [Student, Group],
      synchronize: true,
    }),
    PostsModule,
    GroupsModule,
    StudentsModule,    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}}
