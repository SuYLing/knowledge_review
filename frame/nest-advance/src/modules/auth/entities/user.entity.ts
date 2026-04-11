import { Post } from 'src/modules/posts/entities/post.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export const UserRole = {
  ADMIN: 'admin',
  USER: 'user',
} as const

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number
  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string
  @Column()
  password: string
  @Column()
  name: string
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole
  @OneToMany(() => Post, (post) => post.author, { onDelete: 'CASCADE' })
  posts: Post[]
  @CreateDateColumn()
  createAt: Date
  @UpdateDateColumn()
  updateAt: Date
}
