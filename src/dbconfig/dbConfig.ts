import mongoose from "mongoose";

export async function connect() {
    try {
        // by ! sign we make sure that the string value will always be provided.
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("Mongodb Connected successfully");
        })

        connection.on('error', (err) => {
            console.log("Mongodb connection error. Please make sure MongoDB is running ", err);
            // process.exit will method instructs node js to terminate the process synchronously
            process.exit()
        })
    } catch (error) {
        console.log('Something went wrong');
        console.log(error);
    }
}