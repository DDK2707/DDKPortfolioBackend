const express = require('express')
const projectRoutes = require('./routes/projectRoutes')
const testimonialRoutes = require('./routes/testimonialRoutes')

const app = express()
app.use(express.json())



app.get('/', (req,res) => {
    res.send({msg: "Welcome to my Backend"})
})

app.use("/projects", projectRoutes)
app.use("/testimonials", testimonialRoutes)

app.listen(4000)