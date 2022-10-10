import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICoursesRepository } from '../../core/implementations/courses/courses-repository.interface';
import { Courses } from '../../core/entities/courses/courses.entity';
import { Repository } from 'typeorm';
import { CoursesRepository } from 'src/core/implementations/courses/courses.repository';
import { ICoursesServices } from './courses-services.class';

@Injectable()
export class CoursesService implements ICoursesServices {

    courses: ICoursesRepository

    constructor(@InjectRepository(Courses) private readonly coursesRepository: Repository<Courses>){
        this.courses  = new CoursesRepository(coursesRepository)

    }

    

}
