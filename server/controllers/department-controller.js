const Department = require("../models/Department");

async function updateDepartment(req, res) {
    try {
        // Construct the update object with $set operator
        let id = req.params.id;
        const updateObject = { $set: req.body };
    
        // Use findOneAndUpdate to update the department document
        const updatedDepartment = await Department.findOneAndUpdate(
          { _id: id },
          updateObject,
          { new: true } // Return the updated document
        );

        if (!updatedDepartment) {
            return res.status(404).json({
                message: "department not found"
            });
        }
        
        res.status(200).json({
            department: updatedDepartment,
            message: "Updated department"
        })
      } catch (error) {
        res.status(500).json({message: error.message});
      }
}

// Function to get a department by their ID
async function getDepartment(req, res) {
    try {
      const departmment = await Department.findById(req.params.id);
      if (!departmment) {
          return res.status(404).json({
              message: "departmment not found"
          });
      }
      res.status(200).json({
          departmment
      });
    } catch (error) {
      res.status(500).json({
          message: error.message
      });
    }
  }
  
  // Function to get all departmments
  async function getAllDepartments(req, res) {
      try {
        const departments = await Department.find();
        res.status(200).json({
            departments: departments
        });
      } catch (error) {
        res.status(500).json({
            message: error.message
        });
      }
    }

const DepartmentController = {
    getDepartment,
    getAllDepartments,
    updateDepartment
}

module.exports = DepartmentController