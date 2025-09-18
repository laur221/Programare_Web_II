
import { Column, Model, Table, HasMany } from 'sequelize-typescript';


@Table ({ tableName: 'groups' })
export class Group extends Model {
    @Column
    name: string;

    @Column
    description: string;
    
}
