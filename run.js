function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

exports.run = (req, res) => {
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.status(200).send(getRandomInt(100) > 70);
};
