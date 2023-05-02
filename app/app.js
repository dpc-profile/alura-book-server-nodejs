const express = require('express')
const rotaLivro = require("./routes/livro")

const app = express()
const port = 8000

//Permite que a API receba json
app.use(express.json())

//Quando acessar o localhost:8000/livros, vai redirecionar
//para a rota livros
app.use("/livros", rotaLivro)

app.listen(port, () => {
    console.log(`Escutando porta ${port}`)
})