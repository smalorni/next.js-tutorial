import mongoose from "mongoose";

//this tracks the connection status to database
let isConnected = false; 

//async function - It allows a program to run a function without freezing the entire program. This is done using the Async/Await keyword. Async/Await makes it easier to write promises. The keyword 'async' before a function makes the function return a promise, always.

export const connectToDatabase = async () => {
    //we use strictQuery to avoid console warnings
    mongoose.set('strictQuery, true');
    //if we are already connected, don't connect again
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    //if we are not connected, connect to database
    try {
        //connect to database
        await mongoose.connect(process.env.MONGODB_URI, {
            //these are the options to avoid console warnings
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,   
    })
    //set isConnected to true
    isConnected = true;
    //log that we are connected
    console.log("MongoDB is connected");
    //catch any errors
    } catch (error) {
        //log the error
        console.log(error);
    }
}