import 'dotenv/config'
import app from "./src/app.js";
import connectDB from './src/backend/db.js';

const port = process.env.PORT

connectDB()
app.listen(port , ()=>{
    console.log(`server is running on port: ${port}`)
})