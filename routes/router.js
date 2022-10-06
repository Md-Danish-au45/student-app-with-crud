const router  =  require('express').Router();
const Student = require("../controller/studentController");

//Author
router.post("/addStudent", Student.createStudent);
router.get("/student", Student.getStudents);
router.get("/single-student", Student.getStudent);
router.put("/update-student", Student.updateStudent);
router.delete("/delete-student", Student.deleteStudent);


module.exports = router;