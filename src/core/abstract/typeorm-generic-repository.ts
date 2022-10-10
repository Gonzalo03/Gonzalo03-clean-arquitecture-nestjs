import { IGenericRepository } from "./contract/generic-repository.interface";

export abstract class TypeormGenericRepository<T> implements IGenericRepository<T> {
    findAll(): Promise<T> {
        throw new Error("Method not implemented.");
    }

}
