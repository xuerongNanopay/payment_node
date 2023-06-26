console.log('Payment App start....')

// Iniitial Prerequisites.
import runBoot from "./boot"
await runBoot();

import config from 'config';
import express, { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";

import authRouter from "./routers/auth";

const httpServer = express();

// Using json as http payload
httpServer.use(bodyParser.json());

httpServer.use('/auth', authRouter);

// Default error handling
const errorHandler: ErrorRequestHandler = (err, req, resp, next) => {
  console.log(err);
  resp
    .status(err.statusCode || 500)
    .json({
      message: err.message || 'Internal Erro',
    });
}
httpServer.use(errorHandler);

//
const httpPort = config.get('SERVER.PORT') as number | 3030;
httpServer.listen(httpPort, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${httpPort}`);
});