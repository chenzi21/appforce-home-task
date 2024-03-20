import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'varchar', length: 64 })
    first_name: string;

    @Column({ type: 'varchar', length: 64 })
    last_name: string;

    @Column({ type: 'varchar', length: 256, })
    email: string;

    @Column({ type: 'varchar', length: 64, nullable: true })
    title: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    image: string;

    @Column({ type: "uuid" })
    department_id: string;
}
