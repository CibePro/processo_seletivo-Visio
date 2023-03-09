
/*
Função responsável por inicializar toda a aplicação, incluindo o express, banco de dados 
e as rotas
*/




import express from "express";
import db from "./config/dbConnect.js";
import bases_secretas from "./models/Base.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => { 
    console.log('conexão com o banco feita com sucesso ')
})


const app = express();

app.use(express.json())

routes(app);

















export default app;