import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('photos')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 500})
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column({name: 'is_published'})
  isPublished: boolean;

  @CreateDateColumn({name: 'created_at', precision: 0, default: () => 'NOW()'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', precision: 0, default: () => 'NOW()'})
  updatedAt: Date;
}
