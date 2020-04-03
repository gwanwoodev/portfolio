import express from "express"
import next from 'next'
import * as bodyParser from "body-parser";
import session from "express-session";
import mongoose from "mongoose";
import passport from "passport";
import flash from "connect-flash";
import api from "./api";
import "./passport";

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(session({secret: 'gwanwooportfolio', resave: true, saveUninitialized: true}));
  server.use(flash());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(express.static("uploads"));

  server.use('/api', api);

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
  mongoose.set("useCreateIndex", true);

})
