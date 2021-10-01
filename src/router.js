const { response } = require('express');
const express = require('express');
const router = express.Router();
const { getPairsOfPlayers } = require('./controller');

router.get('/', async (req, resp = response, next) => {
  try {
    await getPairsOfPlayers(req, resp, next);
  } catch (error) {
    resp.status(500).json({ error });
  }
});

module.exports = router;
