const { Router } = require('express');
const router = Router();
const fs = require('fs');

const heroesJSON = fs.readFileSync(__dirname + '\\sample.json', 'UTF-8');

const heroes = JSON.parse(heroesJSON);

router.get('/', (req, res) => {
    res.json(heroes);
});

router.post('/', (req, res) => {
    const { name, description, background, logo } = req.body;
    if( name && description && background && logo ) {
        const id = heroes.length + 1;
        const newHero = {...req.body, id};
        heroes.push(newHero);
        res.json(heroes);
    } else {
        res.status(500).json({ error: "There was an error."});
    }
});

module.exports = router;