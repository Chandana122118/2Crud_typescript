import express, { Application , Request, Response}  from 'express';
import mongoose  from 'mongoose';

import productRoute from './router/product.route';


const app: Application= express();
const port: number=3000;

app.use (express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/product',productRoute);
                     
app.get('/',(req:Request, res:Response)=>{
    res.send("Hello from Node API Updated");
});

mongoose.connect("mongodb+srv://chandanam:GQveIHiUv0YbbDlH@backenddb.uzvtwrt.mongodb.net/Crud_Ts?retryWrites=true&w=majority&appName=BackendDB")
.then (()=> {
    console.log('Connected to Database');
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
})
.catch (()=> {
    
    console.log("Connection Failed")
});


