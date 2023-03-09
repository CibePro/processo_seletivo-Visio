/**
 * Código responsável pela conexão com o localhost
 */

import app from "./src/app.js";

const port = process.env.PORT || 3000;




app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})