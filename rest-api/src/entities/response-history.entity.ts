import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class ResponseHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  name: string;
}
