import { Controller, Get } from '@nestjs/common';
import { CoursesUsesCases } from '../use-cases/courses/courses-use-cases';

@Controller('courses')
export class CoursesController {

    constructor(private coursesUseCases: CoursesUsesCases){}

    @Get()
    async getFinallyResponse(){
        
        return await this.coursesUseCases.returnStringPlusLoveSql()

    }

}
