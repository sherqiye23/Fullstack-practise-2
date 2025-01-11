const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors = require("cors")

dotenv.config()
app.use(bodyParser.json())
app.use(cors())


// mongoose ile connect
mongoose.connect(process.env.Connect)
.then(() => {
    console.log("Connected!");
    app.listen(process.env.Port, () => console.log("listen in port 3030"))
})
.catch((err) => console.log("Failed: ", err ))

app.get("/", (req, res) => {
    res.send("HELLO FROM SHARGIYA")
})

// create schema
const consultingSchema = new mongoose.Schema({
    image: String,
    name: String,
    job: String
})
// create model
let consultingModel = mongoose.model("consulting", consultingSchema)

// gett all data
app.get("/consulting", async (req, res) => {
    let consultings = await consultingModel.find()
    res.send(consultings)
})
// get by id
app.get("/consulting/:id", async (req, res) => {
    let {id} = req.params
    let consulting = await consultingModel.findById(id)
    res.send(consulting)
})
// post 
app.post("/consulting", async (req, res) => {
    await consultingModel(req.body).save()
    res.send({
        message: "Success Post",
        data: req.body
    })
})
// delete by id
app.delete("/consulting/:id", async (req, res) => {
    let {id} = req.params
    await consultingModel.findByIdAndDelete(id)
    res.send({
        message:"Success Delete"
    })
})

