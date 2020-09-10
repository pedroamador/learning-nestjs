import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly userId: string;

  @Column({
    unique: true,
  })
  readonly name: string;

  @Column({
    unique: false,
  })
  readonly lastName: string;

  constructor(userId: string, name: string, lastName: string) {
    this.userId = userId;
    this.name = name;
    this.lastName = lastName;
    console.log('Creo User Entity para ' + this.name + ' ' + this.lastName);
  }
}
