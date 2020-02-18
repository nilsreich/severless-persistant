let count=0;
module.exports = (res, req) => {
  count = count + 1;
  if (req.query === 'reset){ count =0 }
  res.status(200).send(`Hello ${count}!`)
}
