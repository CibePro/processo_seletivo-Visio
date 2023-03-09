/**
 * Criação do banco de dados para o cadastro das bases secretas
 */


import mongoose from "mongoose";

const baseSchema = new mongoose.Schema( 

    {
        id: {type: String}, //chave primária
        title: {type: String, required: true, unique: true}, //título 
        name: {type: String, required: true}, //nome
        city: {type: String, required: true}, //cidade
        technology: {type: String, required: true} //tecnologia

    }
);

const bases_secretas = mongoose.model('bases_secretas', baseSchema);

export default bases_secretas;