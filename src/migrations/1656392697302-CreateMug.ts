import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMug1656392697302 implements MigrationInterface {
  private mugTable = new Table({
    name: 'mugs',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isUnique: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'type',
        type: 'STRING',
        isUnique: true,
      },
      {
        name: 'caffeine',
        type: 'DECIMAL',
        isNullable: true,
      },
      {
        name: 'served_at',
        type: 'timestamptz',
        isPrimary: false,
        isNullable: true,
        default: 'now()',
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.mugTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.mugTable);
  }
}
