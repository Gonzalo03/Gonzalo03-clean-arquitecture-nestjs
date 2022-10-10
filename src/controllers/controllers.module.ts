import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesUseCasesModule } from '../use-cases/courses/courses-use-cases.module';
import { AppController } from './app.controller';

@Module({
  imports: [CoursesUseCasesModule],
  controllers: [CoursesController, AppController]
})
export class ControllersModule {}
