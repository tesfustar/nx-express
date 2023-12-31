/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import express from 'express';
import * as path from 'path';
import { connectTodb } from '@express-microservice/utils';
import { UserModel } from '@express-microservice/models';
const app = express();
connectTodb();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', async (req, res) => {
  const response = await UserModel.find();
  res.send(response);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
