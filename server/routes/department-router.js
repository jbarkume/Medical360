
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Department = require('../models/Department');
const path = require('path');
const DepartmentController = require("../controllers/department-controller")



// Configure storage for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')  // Make sure the 'uploads' directory exists
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))  // Append the date to the original filename
    }
});

const upload = multer({ storage: storage });
// POST route to create a new department with image upload
router.post('/department', upload.single('Icon'), (req, res) => {
    console.log("here I am");
    const newDepartment = new Department({
       
        departmentName: req.body.Name,
        iconPath: req.file ? req.file.filename : null  
    });

    newDepartment.save()
        .then(department => res.status(201).json(department))
        .catch(error => res.status(400).json({ error: 'Error saving department: ' + error }));
});



 //get all departments
router.get('/alldepartments', (req, res) => {
    console.log("Here");
    Department.find()
        .then(departments => res.json(departments))
        .catch(error => res.status(500).json({ error: 'Error fetching departments: ' + error.message }));
});

// delete route to delete a department
router.delete('/:id', (req, res) => {
    Department.findOneAndDelete({ _id: req.params.id })
        .then(result => {
            if (result) {
                res.json({ message: 'Department deleted successfully!' });
            } else {
                res.status(404).json({ error: 'Department not found' });
            }
        })
        .catch(error => res.status(400).json({ error: 'Error deleting department: ' + error }));
});

// get all departments
router.post('/', DepartmentController.getAllDepartments)

// update department by id
router.put('/:id', DepartmentController.updateDepartment)

// get department by id
router.get('/:id', DepartmentController.getDepartment)

module.exports = router;

