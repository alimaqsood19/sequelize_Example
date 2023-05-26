require('dotenv').config()
const express = require('express');
const sequelize = require('./config/connection');
const app = express();
const PORT = 3001;
const Landscape = require('./models/landscape');
const seed = require('./seed');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// C R U D

//READ
app.get('/', (req, res) => {
    Landscape.findAll().then(results => {
        res.status(200).json(results);
    }).catch(err => res.status(500).json(err)) 
})

//CREATE
app.post('/', (req, res) => {
    Landscape.create({
        weeded: req.body.weeded,
        dogPeed: req.body.dogPeed,
        isGrassAlive: req.body.isGrassAlive,
        squareFootage: req.body.squareFootage
    }).then(results => {
        res.status(200).json(results);
    }).catch(err => res.status(500).json(err)) 
})

//UPDATE
app.put('/:id', (req, res) => {
    Landscape.update(
        {
            squareFootage: req.body.squareFootage,
        },
        {
            where: {
                landscape_id: req.params.id
            }
        }
    ).then(results => {
        res.status(200).json(results);
    }).catch(err => res.status(500).json(err)) 
})

//DELETE
app.delete('/:id', (req, res) => {
    Landscape.destroy({
        where: {
            landscape_id: req.params.id
        }
    }).then(results => {
        res.status(200).json(results);
    }).catch(err => res.status(500).json(err)) 
})

app.get('/seed', (req, res) => {
    Landscape.bulkCreate(seed()).then(res.send('Success!')).catch(err => res.json(err));
})

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on ${PORT}`);
    })
})