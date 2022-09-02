const buildTable = require('../src/buildTable');

module.exports = async (req, res) => {
  buildTable(req)
    .then(data => {
      res.setHeader('Content-Type', 'text/plain;charset=utf8');
      res.end(data);
    })
    .catch(err => {
      res.setHeader('Content-Type', 'text/plain;charset=utf8');
      res.end(err);
    });
};