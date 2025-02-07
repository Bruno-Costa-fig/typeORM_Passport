import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogador } from "./Jogador";
import { Jogo } from "./Jogo";

@Entity()
export class Time {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToMany(() => Jogador, jogador => jogador.time)
    jogadores: Jogador[]

    @ManyToMany(() => Jogo)
    @JoinTable({name: "jogo_times"})
    jogos: Jogo[] //navigation property | virtual
}