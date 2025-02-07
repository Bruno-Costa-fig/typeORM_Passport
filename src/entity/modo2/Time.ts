import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Jogador } from "./Jogador";
import { Tecnico } from "./Tecnico";
import { JogoTime } from "./JOgoTime";

@Entity()
export class Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToOne(() => Tecnico)
  @JoinColumn()
  tecnico: Tecnico;

  @OneToMany(() => Jogador, jogador => jogador.time)
  jogadores: Jogador[];

  @OneToMany(() => JogoTime, jogoTime => jogoTime.time)
  jogosTime: JogoTime[];
}
