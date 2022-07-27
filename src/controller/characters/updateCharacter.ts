





const updateCharacter = (req, res) => {
    res.status(200)
    res.json(require('../../mock/characters'))
}

export default updateCharacter;