import {
  Column,
  CreateDateColumn,
  Entity,
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
  @Column()
  authorName: string
  @CreateDateColumn()
  createAt: Date
  @UpdateDateColumn()
  updateAt: Date
}
