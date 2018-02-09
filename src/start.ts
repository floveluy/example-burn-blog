import { Burn } from 'burnjs';
const cors = require('@koa/cors');

const app = new Burn;
app.use(cors());

app.run(7001);