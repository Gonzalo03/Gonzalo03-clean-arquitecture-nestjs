import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Courses {

    @PrimaryGeneratedColumn({name: 'course_id'})
    id: number

    @Column({length: 45})
    code: string

    @Column({length: 45})
    name: string

}