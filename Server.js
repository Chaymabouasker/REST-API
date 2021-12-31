const express=require('express');
const connectDB=require('./db/connectDB');
const app = express();
const router=require('./routers/Router')
connectDB();
app.use(express.json());
app.use('/api',router);
const port=process.env.PORT || 5000;
app.listen(port,err =>err?console.log(err):console.log(`server is running at ${port}`));