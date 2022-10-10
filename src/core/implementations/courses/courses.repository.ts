import { TypeormGenericRepository } from "../../abstract/typeorm-generic-repository";
import { Courses } from "../../entities/courses/courses.entity";
import { Repository } from 'typeorm';

export class CoursesRepository extends TypeormGenericRepository<Courses>{

    private _repository: Repository<Courses>

    constructor(repository: Repository<Courses>){
        super()
        this._repository = repository
    }

    async getEspecificQuery(): Promise<string>{

        return this._repository.createQueryBuilder().select().getSql()

    }

}