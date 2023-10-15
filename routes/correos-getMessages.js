const express = require('express');
const router = express.Router();
const { obtenerCorreos } = require('./func/tempmail'); 

router.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');  
  const correoCompleto = req.query.mail;
  try {
    if (!correoCompleto) {
      const formattedError = {status: false, message: 'You must provide an email'};
      const formattedResults = JSON.stringify(formattedError, null, 2);
      return res.send(formattedResults);
    }
    const correos = await obtenerCorreos(correoCompleto);
    const formattedResponse = {status: true, correos: correos.correos};
    const formattedResults2 = JSON.stringify(formattedResponse, null, 2);
    res.send(formattedResults2);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting emails' });
  }
});

module.exports = router;
