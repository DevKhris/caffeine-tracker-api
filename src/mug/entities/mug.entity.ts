import { MugType } from './../../mug-type/entities/mug-type.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity()
export class Mug extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @ManyToOne(() => MugType, (mugType) => mugType.mugs)
  mugType: MugType;

  @Field()
  @Column({ name: 'served_at' })
  servedAt: Date;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field()
  @DeleteDateColumn({ name: 'deleted_at' })
  deleteAt: Date;
}
