function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

exports.run = (req, res) => {
  res.status(200).send(getRandomInt(100) > 70);
};
