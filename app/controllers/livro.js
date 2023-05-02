const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } = require("../services/livro")


function getTodosLivrosController(request, response) {
    try {
        const livros = getTodosLivros()
        response.send(livros)
    } catch (error){
        response.status(500)
        response.send({error})
    }
    
}

function getLivroPorIdController(req, res) {
    try {
        const id = req.params.id
        if (idValido(id)){
            const livro = getLivroPorId(id)
            res.send(livro) 
        }

        res.status(404)
        res.send("Id Inválido")
        
    } catch (error) {
        res.status(500)
        res.send({error})
    }
}

function postLivroController(req, res) {
    try {
        const livroNovo = req.body
        
        if(nomeValido(livroNovo.nome)){
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        }

        res.status(404)
        res.send("Nome do livro é obrigatório")
        
    } catch (error) {
        console.log(error)
        res.status(500)
        res.send({error})
    }
}

function patchLivroController(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        if (idValido(id)){
            const livros = modificaLivro(id, body)
            res.send(livros)
        }

        res.status(404)
        res.send("Id Inválido")

    } catch (error) {
        res.status(500)
        res.send({error})
    }
}

function deleteLivroController(req, res) {
    try {
        const id = req.params.id
        if (idValido(id)){
            const idDeletado = deletaLivroPorId(req.params.id)
            res.send({idDeletado})
        }

        res.status(404)
        res.send("Id Inválido")
        
    } catch (error) {
        res.status(500)
        res.send({error})
    }
}

function idValido(id){
    return Number(id)
}

function nomeValido(nome){
    if(nome){
        return true
    }

    return false
}

module.exports = {
    getLivroPorIdController,
    getTodosLivrosController,
    postLivroController,
    patchLivroController,
    deleteLivroController
}