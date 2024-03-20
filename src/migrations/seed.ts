import { MigrationInterface, QueryRunner } from "typeorm"

export class Seed1710965576268 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DO $$
            DECLARE
                department_uuid uuid;
            BEGIN
                INSERT INTO departments(name) VALUES('Engineering') RETURNING id INTO department_uuid;
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('chen', 'zadik', 'chenzg12345@gmail.com', department_uuid);
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('yossi', 'zadik', 'yossi.zadik@gmail.com', department_uuid);
                
                INSERT INTO departments(name) VALUES('HR') RETURNING id INTO department_uuid;
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('chen1', 'zadik', 'chenzg12345@gmail.com', department_uuid);
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('yossi1', 'zadik', 'yossi.zadik@gmail.com', department_uuid);
                
                INSERT INTO departments(name) VALUES('Data') RETURNING id INTO department_uuid;
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('chen2', 'zadik', 'chenzg12345@gmail.com', department_uuid);
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('yossi2', 'zadik', 'yossi.zadik@gmail.com', department_uuid);
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('john', 'doe', 'john.doe@gmail.com', department_uuid);
                
                INSERT INTO departments(name, description) VALUES('Managment', 'managing stuff') RETURNING id INTO department_uuid;
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('chen3', 'zadik', 'chenzg12345@gmail.com', department_uuid);
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('yossi3', 'zadik', 'yossi.zadik@gmail.com', department_uuid);
                INSERT INTO users(first_name, last_name, email, department_id) VALUES('john1', 'doe', 'john.doe@gmail.com', department_uuid);
            END $$;
        `)
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM users;
            DELETE FROM departments;
        `)
    }
}