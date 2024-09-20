const express = require("express");
const router = require('./Routes')
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT;
const URL = process.env.FRONTEND_URL;
dotenv.config();
const app = express();
app.use(cors({
 origin: 'http://localhost:5173', // Your frontend origin
  credentials: true // 
}));

app.use(express.json());
app.use(router)

app.use(express.urlencoded({extended:true}));
const a = 4000;
app.listen(4000, () => {
  console.log(`server started succesfully ar PORT ${a}`);
});
