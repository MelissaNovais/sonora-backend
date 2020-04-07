const router = require('express').Router();
const podcastJson = require('./podcasts');
const episodesJson = require('./episodes');

router.get('/podcasts', (req, res) =>{
	res.send({
		podcasts: podcastJson
	})
});

router.get('/podcast/:ID', (req, res) =>{
	res.send({
		podcast: podcastJson[0]
	})
});

router.get('/episodes', (req, res) =>{
	res.send({
		episodes: episodesJson
	})
});

router.get('/episode/:ID', (req, res) =>{
	res.send({
		episode: episodesJson[0]
	})
});


module.exports = router;