import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [PostsModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
