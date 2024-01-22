import { MigrationInterface, QueryRunner } from "typeorm";

export class Inicio1705956023167 implements MigrationInterface {
    name = 'Inicio1705956023167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`t001_encues_satis_ilforno\` (\`c001_filaid\` int NOT NULL AUTO_INCREMENT, \`c001_id\` varchar(255) NOT NULL, \`c001_punto_venta\` varchar(255) NOT NULL, \`c001_calificacion_producto\` int NOT NULL, \`c001_calificacion_servicio\` int NOT NULL, \`c001_calificacion_nps\` int NOT NULL, \`c001_mejora\` varchar(255) NULL, \`c001_nota\` text NULL, \`c001_nombre\` varchar(255) NULL, \`c001_apellido\` varchar(255) NULL, \`c001_cedula\` bigint NULL, \`c001_celular\` bigint NULL, \`c001_email\` varchar(255) NULL, \`c001_fecha\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`c001_filaid\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`t001_encues_satis_ilforno\``);
    }

}
