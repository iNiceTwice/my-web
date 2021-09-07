import "@babel/polyfill"
import express from "express"
import React from "react"
import path from "path"
import ReactDOMServer from "react-dom/server"
import mongoose from "mongoose";
import { mongoUri } from "../../keys";
import {StaticRouter} from "react-router";
import App from "../app/components/App"
import routes from "../routes/routes"
import cors from "cors"

const app = express()

//Connecting to DB
mongoose.connect(mongoUri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
  .then(data => console.log("- Database Online -"))
  .catch(err => console.log(err));

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//static files
app.use(express.static("./src/public/"));

//api routes
app.use(routes)

//Server Side Render
app.get("*", (req,res)=>{
    const context = {}
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    );
    const html = `
    <html  lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css">
             <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />

            <title>SSR</title>
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
        <script src="https://kit.fontawesome.com/31ec100988.js" crossorigin="anonymous"></script>
        <script type="text/javascript" src="client_bundle.js"></script>
    </html>
    `;
    res.send(html)
})

//server settings
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("- Server Online on " + app.get("port") + " -");
});
