





const deleteCharacter = (req, res) => {
    res.status(200)
    res.json(require('../../mock/characters'))
}

export default deleteCharacter;