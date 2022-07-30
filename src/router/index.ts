




import express from 'express'
import {ensureAuthenticated} from '../middleware'

import {getAllCharacters, createCharacter, updateCharacter, deleteCharacter, getAllMovies, createMovie, deleteMovie, updateMovie, authLoggin, authRegister} from '../controller'

const router = express.Router()

// authentication
router.post('/auth/loggin', authLoggin)
router.post('/auth/register', authRegister)

//character search
router.get('/characters', ensureAuthenticated, getAllCharacters)
// router.get('/characters?name=nombre', controller.getAllCharactersByName)
// router.get('/characters?age=edad', controller.getAllCharactersByAge)
// router.get('/characters?movies=idMovie', controller.getAllCharactersById)

// // character actions
router.post('/characters:id', ensureAuthenticated, createCharacter)
router.put('/characters:id', ensureAuthenticated, updateCharacter)
router.delete('/characters:id', ensureAuthenticated, deleteCharacter)


// // movies search
router.get('/movies', ensureAuthenticated, getAllMovies)
// router.get('/movies?name=nombre', controller.getAllMoviesByName)
// router.get('/movies?genre=idGenero', controller.getAllMoviesByGenre)
// router.get('/movies?order= ASC | DESC', controller.getAllMoviesByOrder)

// // movies actions
router.post('/movies:id', ensureAuthenticated, createMovie)
router.put('/movies:id', ensureAuthenticated, updateMovie)
router.delete('/movies:id', ensureAuthenticated, deleteMovie)

export default router;

