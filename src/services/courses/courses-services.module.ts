import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from '../../core/entities/courses/courses.entity';
import { CoursesService } from './courses.service';
import { CoursesRepository } from '../../core/implementations/courses/courses.repository';
import { ICoursesServices } from './courses-services.class';

@Module({

    imports: [TypeOrmModule.forFeature([Courses])],
    providers: [{
        provide: ICoursesServices,
        useClass: CoursesService
    }, CoursesRepository],
    exports: [ICoursesServices]
})
export class CoursesServiceModule {}
