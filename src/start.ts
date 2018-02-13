import { Burn } from 'burnjs';
const cors = require('@koa/cors');

const app = new Burn;
app.use(cors());

app.run((port, ip) => {
    console.log(`服务器运行在:${ip}:${port}`)
}, 7001);