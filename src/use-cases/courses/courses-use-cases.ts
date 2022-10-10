import { ICoursesServices } from '../../services/courses/courses-services.class';
import { ICoursesUseCases } from './courses-use-cases.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesUsesCases implements ICoursesUseCases {

    constructor(private readonly coursesService: ICoursesServices){}

    async returnStringPlusLoveSql(){
        return await this.coursesService.courses.getEspecificQuery() + 'Love SQL :D'

    }
}