import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://chlsaivarma186:password%4082@cluster0.cb60p.mongodb.net/RESERVATIONS?retryWrites=true&w=majority", {
      dbName: "RESERVATIONS", // Ensure this matches your desired database name
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to the database: ${err}`);
    });
};
