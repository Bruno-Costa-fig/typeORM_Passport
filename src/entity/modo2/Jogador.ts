import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Time } from "./Time";

@Entity()
export class Jogador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Time, time => time.jogadores)
  time: Time;
}
