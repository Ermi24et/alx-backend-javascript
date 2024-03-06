export default function handleResponseFromAPI(promise) {
  const succObj = {
    status: 200,
    body: 'success',
  };

  return promise.then(() => succObj)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
