let count=0;
module.exports = (res) => {
  count = count + 1;
  res.status(200).send(`Hello ${count}!`)
}
