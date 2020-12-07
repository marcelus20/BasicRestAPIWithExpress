const hello = {
  get: ({ params: { name } }, res) =>
    res.status(200).send(`Hello, ${name}. Received a GET HTTP method`),

  post: ({ params: { name } }, res) =>
    res.status(200).send(`Hello, ${name}. Received a POST HTTP method`),

  put: ({ params: { name } }, res) =>
    res.status(200).send(`Hello, ${name}. Received a PUT HTTP method`),

  delete: ({ params: { name } }, res) =>
    res.status(200).send(`Hello, ${name}. Received a DELETE HTTP method`),
};
module.exports = hello;
