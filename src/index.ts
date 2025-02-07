import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express"
import {AppDataSource} from "./data-source"
import cors from "cors"

const app = express()

import { Time } from "./entity/modo2/Time";
import { Jogador } from "./entity/modo2/Jogador";
import { Jogo } from "./entity/modo2/Jogo";
import { JogoTime } from "./entity/modo2/JOgoTime";
import { Tecnico } from "./entity/modo2/Tecnico";

const tecnicoRepository = AppDataSource.getRepository(Tecnico)

let tecnico = new Tecnico()
tecnico.nome = "Tite"
tecnicoRepository.save(tecnico)

app.use(cors())
app.use(express.json())

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        console.log("O servidor está rodando em http://localhost:3000")
    })
}).catch(error => console.log(error))

