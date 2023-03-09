/**
 * Código responsável pela criação do CRUD da aplicação
 */

import bases_secretas from "../models/Base.js";


class BaseController { 

    static listarBases = (request, response ) =>{ 
        const city = request.query.city //constante usada para listar por cidade
        const title = request.query.title //constante usada para listar por título
        const technology = request.query.technology //constante usada para listar por tecnologia

        /**
         * Aqui a listagem pode ser feita de 4 maneiras, listar de maneira geral 
         * listar por cidade, listar por título e listar por tecnologia
         */
        bases_secretas
        .find(request.query,(err, bases_secretas)=>{ 
            response.status(200).json(bases_secretas)
    })
        .select('title city technology');

    

    }
    
    /**
     * Listagem por id facilita quando se usa o método put e delete, assim depois
     * de usar algum desses métodos podem ser consultados de maneira imediata
     */

    static listarBasesPorId = (request, response) =>{ 
        const id = request.params.id;
        

        bases_secretas.findById(id, (err, bases_secretas) =>{ 
            if(err){ 
                response.status(400).send({message: `${err.message}  - Id da base não localizado`})
            }
            else{
                response.status(200).send(bases_secretas);
            }
        })
    }

    static cadastrarBases = (request, response) =>{ 
        let base = new bases_secretas(request.body);

        base.save((err)=>{ 

           // console.log(err)


            if(err){ 
                if(err.code == 11000){
                    response.status(409).send({message: `${err.message}  - Título já cadastrado`})
                }
                else{ 
                    response.status(500).send({message: `${err.message} - falha ao cadastrar base.`})
                }
               
            } else {
                response.status(201).send(base.toJSON())
            }
        })

    }

    static atualizarBase = (request,response) =>{ 
        const id = request.params.id;

        bases_secretas.findByIdAndUpdate(id, {$set: request.body}, (err) =>{ 
            if(!err){ 
                response.status(200).send({message: 'Base atualizada com sucesso'})
            } else{ 
                response.status(500).send({message: err.message})
            }
        } )

    }

    static excluirBase = (request,response) =>{ 
        const id = request.params.id;

        bases_secretas.findByIdAndDelete(id,(err) =>{ 
            if(!err){
                response.status(200).send({message: 'Base excluida com sucesso'})
            }
            else{ 
                response.status(500),send({message: err.message})
            }
        })
    }

    

}

export default BaseController;