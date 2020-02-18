let count=0;
module.exports = (req, res) => {
  let { name = count} = req.query
  count = name +1;
  res.status(200).send(`Hello ${name}!`)
}
