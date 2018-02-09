"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const burnjs_1 = require("burnjs");
const cors = require('@koa/cors');
const app = new burnjs_1.Burn;
app.use(cors());
app.run(7001);
