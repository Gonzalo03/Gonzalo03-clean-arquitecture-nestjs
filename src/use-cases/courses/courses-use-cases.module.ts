import { Module } from '@nestjs/common';
import { CoursesUsesCases } from './courses-use-cases';
import { CoursesServiceModule } from '../../services/courses/courses-services.module';

@Module({
    imports: [CoursesServiceModule],
    providers: [CoursesUsesCases],
    exports: [CoursesUsesCases]

})
export class CoursesUseCasesModule {}
