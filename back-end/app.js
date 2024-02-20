const express = require("express");
const app = express();
const BasicRouter = require("./routes/Basic.routes")
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3002;

//enable post data...!
app.use(express.json());

//cors
app.use(cors());

//set router
app.use('/',BasicRouter);

//connect mongodb
mongoose.connect('mongodb+srv://admin:admin1234@cluster0.jplihhi.mongodb.net/Flipkart').
    then(() => {
        //listen server
        app.listen(port, () => {
            console.log('server is started on port no :', port);
        });
    }).catch(() => {
        process.exit(1);
    })

