
const deleteMovie = (req, res) => {
    res.status(200)
    res.json(require('../../mock/movies'))
}

export default deleteMovie;