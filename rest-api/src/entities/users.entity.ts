import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity('m_user')
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  name: string;
}
