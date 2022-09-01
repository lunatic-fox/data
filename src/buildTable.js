const fs = require('fs');
const path = require('path');

/** @param {{query: { t : string}}} req */
const buildTable = async req => {
  const { t } = req.query;
  const uri = path.join(__dirname, `../res/${t}.json`);

  if (fs.existsSync(uri))
    return Promise.resolve(fs.readFileSync(uri, 'utf8'));
  return Promise.reject('Data not found!');    
};

module.exports = buildTable;