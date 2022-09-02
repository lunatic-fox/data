const fs = require('fs');
const path = require('path');

/** @param {{query: { t : string? }}} req */
const buildTable = async req => {
  const { t } = req.query;

  if (!t) {
    const res = {
      t: fs.readdirSync(path.join(__dirname, `../res`))
        .map(e => e.replace(/(.+)\..+/, '$1'))
    };
    return Promise.resolve(JSON.stringify(res, null, 2));
  }

  const uri = path.join(__dirname, `../res/${t}.json`);

  if (fs.existsSync(uri))
    return Promise.resolve(fs.readFileSync(uri, 'utf8'));
  return Promise.reject(JSON.stringify({}));    
};

module.exports = buildTable;
