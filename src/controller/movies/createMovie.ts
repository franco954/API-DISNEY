



const createMovie = (req, res) => {
    res.status(200)
    res.json(require('../../mock/movies'))
}

export default createMovie;