const mongoose = require("mongoose");

const student = new mongoose.Schema({
  name: String,
  age: Number,
  departmentName:String,
  mobile_number:String
});

const studentDetails = new mongoose.model("student", student);

module.exports = studentDetails;
