const  express = require("express");
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();


app.use(express.json());
app.use(cookieParser());
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));



//config 

if(process.env.NODE_ENV !== "PRODUCTION")
{
    require("dotenv").config({
        path:"backend/config/.env"
    }) 
}


// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;