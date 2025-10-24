require("dotenv").config();
const App = require("./src/app");

const app = new App();

// app/index.js mỗi service

app.start();
