import express from "express";
import BaseController from "../controllers/basesController.js";


/* Código responsável para listar as rotas, com os métodos get 
   get, post, put e delete*/

const router = express.Router();

router 
    .get("/bases", BaseController.listarBases)
    .get("/bases/:id", BaseController.listarBasesPorId)
    .post("/bases", BaseController.cadastrarBases)
    .put("/bases/:id", BaseController.atualizarBase)
    .delete("/bases/:id", BaseController.excluirBase)



export default router;