import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { PostsModule } from './modules/posts/posts.module';
import { GroupsModule } from './modules/groups/groups.module';
import { TeachersModule } from './modules/teacher/teachers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '1234',
      database: 'PW2',
      entities: [],
      synchronize: true,
    }),
    PostsModule,
    GroupsModule,
    StudentsModule,
    TeachersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
