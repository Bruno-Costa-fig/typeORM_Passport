import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Time } from "./Time";
import { Jogo } from "./Jogo";

@Entity()
export class JogoTime {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Jogo, jogo => jogo.jogosTime)
  jogo: Jogo;

  @ManyToOne(() => Time, time => time.jogosTime)
  time: Time;
}
