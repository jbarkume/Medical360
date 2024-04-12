const DepartmentController = require("../controllers/department-controller")
const express = require("express")

const router = express.Router()

// get all departments
router.get('/', DepartmentController.getAllDepartments)

// update department by id
router.put('/:id', DepartmentController.updateDepartment)

// get department by id
router.get('/:id', DepartmentController.getDepartment)


module.exports = router