import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Group } from "../groups/group.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    groupId: number;

    @ManyToOne(() => Group, (group) => group.students)
    @JoinColumn({ name: 'groupId' })
    group: Group;
}   