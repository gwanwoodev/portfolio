import express from "express"
import next from 'next'
import * as bodyParser from "body-parser";
import helmet from "helmet";

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(express.static("public"));

  server.use(helmet());

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
})
