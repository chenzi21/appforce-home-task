import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Departments {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'varchar', length: 64 })
    name: string;

    @Column({ type: 'varchar', length: 64, nullable: true })
    description: string;
}
