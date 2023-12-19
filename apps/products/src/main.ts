/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import axios from 'axios';
import express from 'express';
import * as path from 'path';
import { connectTodb } from '@express-microservice/utils';
const app = express();
connectTodb();
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3333/api');
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3334;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
