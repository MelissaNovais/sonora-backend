const router = require('express').Router();
const podcastJson = require('./podcasts');
const episodesJson = require('./episodes');

router.get('/podcasts', (req, res) =>{
	res.send({
		podcasts: podcastJson
	})
});

router.get('/podcast/:id', (req, res) =>{
	res.send({
		podcast: podcastJson.filter(pod => pod.id == req.params.id)
	})
});

router.get('/episodes', (req, res) =>{
	res.send({
		episodes: episodesJson
	})
});

router.get('/episode/:id', (req, res) =>{
	res.send({
		episode: episodesJson.filter(ep => ep.id == req.params.id)
	})
});


module.exports = router;