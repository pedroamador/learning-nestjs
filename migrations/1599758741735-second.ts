import {MigrationInterface, QueryRunner} from "typeorm";

export class second1599758741735 implements MigrationInterface {
    name = 'second1599758741735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`);
    }

}
