




import express from 'express'

import {getAllCharacters, getAllMovies, authLoggin, authRegister} from '../controller'

const router = express.Router()

// authentication
router.post('/auth/login', authLoggin)
router.post('/auth/register', authRegister)

//character search
router.get('/characters', getAllCharacters)
// router.get('/characters?name=nombre', controller.getAllCharactersByName)
// router.get('/characters?age=edad', controller.getAllCharactersByAge)
// router.get('/characters?movies=idMovie', controller.getAllCharactersById)

// // character actions
// router.post('/characters:id', controller.createCharacter)
// router.put('/characters:id', controller.updateCharacter)
// router.delete('/characters:id', controller.deleteCharacter)


// // movies search
router.get('/movies', getAllMovies)
// router.get('/movies?name=nombre', controller.getAllMoviesByName)
// router.get('/movies?genre=idGenero', controller.getAllMoviesByGenre)
// router.get('/movies?order= ASC | DESC', controller.getAllMoviesByOrder)

// // movies actions
// router.post('/movies:id', controller.createMovie)
// router.put('/movies:id', controller.updateMovie)
// router.delete('/movies:id', controller.deleteMovie)

export default router;

