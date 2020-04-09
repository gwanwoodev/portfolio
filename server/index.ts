import express from "express"
import next from 'next'
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";
import User from "../models/user";
import api from "./api";

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(express.static("uploads"));
  server.use(session({secret: 'gwanwoodev', resave: true, saveUninitialized: true}));
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(flash());

  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  server.use('/api', api);

  server.get("/admin", (req, res, next) => {
    console.log(req.session?.passport);
    if(req.user) {
      next();
    }else {
      res.redirect("/login");
    }
  });

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
