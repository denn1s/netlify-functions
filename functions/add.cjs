module.exports.handler = async (event) => {
  // event.body
  // event.queryStringParameters
  const { a, b } = event.queryStringParameters

  const sum = parseInt(a, 10) + parseInt(b, 10)

  return {
    statusCode: 200,
    body: JSON.stringify({ sum }),
    headers: {
      'Content-Type': 'application/json'
    },
  }
}