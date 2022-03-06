//server.js
import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors';
let app = express();
let api_url = 'https://api.spacexdata.com/v4/';

app.use(cors());
app.get('/', async function (req, res) {
  const apiResponse = await fetch(
    api_url + 'launches/upcoming'
  )
  const apiResponseJson = await apiResponse.json()
  res.send(apiResponseJson)

})
app.use('/upcoming', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
app.get('/upcoming', async function(req, res) {
  const url_params = 'launches/upcoming';
  const fetch_response = await fetch(api_url + url_params);
  const json = await fetch_response.json();

  res.send(json);
});

app.use('/crew/:id', (req, res, next) => {
  console.log('CREW Request Type:', req.method)
  next()
})
app.get('/crew/:id', async function(req, res) {
  const id = req.params.id;
  const url_params = `crew/${id}`;
  const fetch_response = await fetch(api_url + url_params);
  const json = await fetch_response.json();

  res.send(json);
});

app.use('/rockets/:id', (req, res, next) => {
  console.log('ROCKETS Request Type:', req.method)
  next()
})
app.get('/rockets/:id', async function(req, res) {
  const id = req.params.id;
  const url_params = `rockets/${id}`;
  const fetch_response = await fetch(api_url + url_params);
  const json = await fetch_response.json();

  res.send(json);
});

// Get crew names (if there are any - most launches are unmanned)
// https://api.spacexdata.com/v4/crew/{{id}}

// Get rocket
// https://api.spacexdata.com/v4/rockets/{{id}}


let server = app.listen(8080, function() {
  console.log("Backend Application listening at http://localhost:8080")
})

// pro tip - look


