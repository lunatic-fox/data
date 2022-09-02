const buildTable = require('../src/buildTable');

module.exports = async (req, res) => {
  buildTable(req)
    .then(data => {
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    })
    .catch(err => {
      res.setHeader('Content-Type', 'application/json');
      res.end(err);
    });
};