import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Time } from "./Time";

@Entity()
export class Jogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @ManyToMany(() => Time)
  @JoinTable({name: "jogo_times"})
  times: Time[];
}
