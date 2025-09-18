import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Group } from '../groups/groups.model';

@Table({ tableName: 'students' })
export class Student extends Model<Student> {
    @Column({ primaryKey: true, autoIncrement: true })

    @Column
    age: number;

    @Column
    email: string;

    @Column
    phone: string;

    @Column
    address: string;

    @HasMany(() => Group)
    groups: Group[];
}