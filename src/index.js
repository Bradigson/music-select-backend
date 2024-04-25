const express = require("express");
const routers = require("./routes/router");

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.use(express.json());

app.use("/api/v1",routers);

const port = app.get("PORT");

app.listen(port, ()=>{
    console.log(`Server Available at: http//:localhost:${port}/api/v1`)
})