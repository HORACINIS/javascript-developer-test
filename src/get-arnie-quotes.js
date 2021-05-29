const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {

  const results = [];

  urls.forEach(async url => {
    let result;
    const data = await httpGet(url)

    if (data.status === 200) result = { 'Arnie Quote': JSON.parse(data.body).message };
    if (data.status !== 200) result = { 'FAILURE': JSON.parse(data.body).message };

    results.push(result);
  });

  return new Promise((resolve) => {
    setTimeout(() => resolve(results), 200);
  });
};

module.exports = {
  getArnieQuotes,
};
