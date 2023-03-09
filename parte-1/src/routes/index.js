
/**
 * Código responsável por exportar as rotas
 */


import express from "express";
import bases from "./basesRoutes.js";


const routes = (app) => {
    app.route('/').get((request,response) =>{ 
        response.status(200).send({title:"Bem vindo ao cadastro de bases secretas "})
    })

    app.use( 
        express.json(), 
        bases
    )

}

export default routes;