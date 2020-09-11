import {MigrationInterface, QueryRunner} from "typeorm";

export class third1599834589711 implements MigrationInterface {
    name = 'third1599834589711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(70)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
