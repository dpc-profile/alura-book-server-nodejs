const { Router } = require("express")
const { getTodosLivrosController, 
        getLivroPorIdController, 
        postLivroController, 
        patchLivroController, 
        deleteLivroController } = require("../controllers/livro")

const router = Router()

//Requisição de consulta
router.get("/", getTodosLivrosController)
router.get("/:id", getLivroPorIdController)

//Requisição de gravação
router.post("/", postLivroController)

//Requisição de alteração
router.patch("/:id", patchLivroController)

//Requisição de remoção
router.delete("/:id", deleteLivroController)

//Permite que o arquivo seja usado através de import(require).
module.exports = router