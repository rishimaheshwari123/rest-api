const express = require("express");
const connectDB = require("./config/db")
// rest object  
const app = express();

connectDB();
// middelwares 
app.use(express.json());

// rest / routes 
app.use("/api/v1/user", require("./routes/userRoutes"))



const port = 5000;
app.listen(port, (err) => {
    console.log(`Server is running on port no ${port}`)
})