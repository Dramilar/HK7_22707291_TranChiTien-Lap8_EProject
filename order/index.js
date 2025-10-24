require("dotenv").config();
const App = require("./src/app");

const app = new App();

// app/index.js mỗi service
app.get('/health', (req,res)=>res.status(200).json({status:'ok'}));


app.start();