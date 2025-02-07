import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express"
import {AppDataSource} from "./data-source"
import cors from "cors"

import { Time } from "./entity/Time";
import { Jogador } from "./entity/Jogador";
import { Jogo } from "./entity/Jogo";

const app = express()


app.use(cors())
app.use(express.json())

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        console.log("O servidor está rodando em http://localhost:3000")
    })
}).catch(error => console.log(error))

