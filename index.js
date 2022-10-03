const express = require("express")
const app = express()

app.get("/", (request, response) => {
  response.send("It worked, and my name is Eric Henderson")
})

app.listen(3000)
