export interface IGenericRepository<T> {

    findAll(): Promise<T>

}
