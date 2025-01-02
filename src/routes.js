const express = require('express');
const router = express.Router();
const db = require('./db');

// Get IP Address by Domain
router.get('/resolve', async (req, res) => {
  const domain = req.query.domain;

  if (!domain) {
    return res.status(400).send({ error: 'Domain name is required' });
  }

  try {
    const [result] = await db.query('SELECT ip_address FROM domains WHERE domain_name = ?', [domain]);
    console.log(result)
    if (result.length > 0) {
      res.send({ domain, ip: result[0].ip_address });
    } else {
      res.status(404).send({ error: 'Domain not found' });
    }
  } catch (error) {
    console.error('SQL Query Error:', error);  // Log full error
    res.status(500).send({ error: 'Database error', details: error.message });
  }
});


module.exports = router;
