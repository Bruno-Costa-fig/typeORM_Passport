import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { JogoTime } from "./JOgoTime";

@Entity()
export class Jogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "datetime" })
  data: Date;

  @OneToMany(() => JogoTime, jogoTime => jogoTime.jogo)
  jogosTime: JogoTime[];
}
