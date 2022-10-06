const mongoose = require('mongoose');

function DBConnection(){
    mongoose
      .connect("mongodb+srv://MdDanish:0786786@cluster0.qfylmqm.mongodb.net/studentTask")
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch(() => {
        console.log("Failed to connect to MongoDB");
      });
}

module.exports = DBConnection;