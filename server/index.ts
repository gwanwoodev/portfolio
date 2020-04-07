import express from "express"
import next from 'next'
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
import api from "./api";

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev:false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: false}));
  server.use('/api', api);
  server.use(express.static("uploads"));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if(err) throw err;
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    )
  });

  mongoose.Promise = global.Promise;

  const db = mongoose.connection;
  db.on('error', console.error);
  db.once("open", () => {
    console.log('mongodb://localhost/portfolio');
  });

  mongoose.connect("mongodb://localhost/portfolio",{useNewUrlParser:true, useUnifiedTopology:true});

})
