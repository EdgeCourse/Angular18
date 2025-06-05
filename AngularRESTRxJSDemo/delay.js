// delay.js
module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.url === '/forms') {
    res.status(500).jsonp({ error: 'Simulated server error on form save' });
  } else {
    setTimeout(next, 800); // Global delay
  }
};
