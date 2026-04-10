import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: number
  @Column()
  title?: string
  @Column({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  createAt?: string
}
