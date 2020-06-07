import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity('t_response_history')
export class ResponseHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 16 })
  name: string;
}
