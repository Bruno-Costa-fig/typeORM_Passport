import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tecnico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}