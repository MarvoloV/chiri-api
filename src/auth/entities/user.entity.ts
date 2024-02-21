import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text', { unique: true })
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  full_name: string;

  @Column('boolean', { default: false })
  isActive: boolean;

  @Column('text')
  phone: string;

  @Column('text')
  token_verify: string;
}
