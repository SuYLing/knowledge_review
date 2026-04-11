import { User } from 'src/modules/auth/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  title: string
  @Column({ type: 'text' })
  content: string
  @ManyToOne(
    () => User,
    ({ id, email, name }) => ({
      id,
      email,
      name,
    }),
  )
  author: User
  @CreateDateColumn()
  createAt: Date
  @UpdateDateColumn()
  updateAt: Date
}
