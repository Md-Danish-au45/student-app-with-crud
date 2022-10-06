const { response } = require("express");
const studentDetails = require("../models/authorSchema");

class Student {
  createStudent = async (req, res) => {
    try {
      const { name, age, departmentName, mobile_number } = req.body;
      if (!name) {
        throw {
          message: "Please enter a name!",
        };
      }
      if (!age) {
        throw {
          message: "Please enter a age!",
        };
      }
      if (!departmentName) {
        throw {
          message: "Please enter a departmentName!",
        };
      }

      if (!mobile_number) {
        throw {
          message: "Please enter a mobile number!",
        };
      }
      const response = await studentDetails.create({ name, age, departmentName, mobile_number });
      res.send({
        status: true,
        response: response,
        message: "Successfully Created student profile",
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getStudents = async (req, res) => {
    const response = await studentDetails.find().populate();
    res.send(response);
  };

  getStudent = async (req, res) => {
    const _id = req.query._id;
    const response = await studentDetails.findOne({ _id: _id });
    res.send(response);
  };

  updateStudent = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const response = await studentDetails.updateMany(

      { _id: id },
      { name: name }
    );
    res.send(response);
  };

  deleteStudent = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name
    const response = await studentDetails.deleteMany(
      { _id: id },
      {name:name});
    res.send(response);
  };
}

module.exports = new Student();

