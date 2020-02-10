import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export default class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({length: 10000})
    body: string

    @Column()
    published: boolean

}
