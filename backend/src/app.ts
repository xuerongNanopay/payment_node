console.log('Payment App start....')

// import runBoot from "boot";
import runBoot from "./boot"
import config from 'config';

let a = await runBoot();

import express from "express";
import { BodyParser } from "body-parser";

const httpServer = express();

const httpPort = config.get('SERVER.PORT') as number | 3030;
httpServer.listen(httpPort, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${httpPort}`);
});