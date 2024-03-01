const express = require('express');
const router = express.Router();


const {Employee} = require('../models/employee');


// Get Single Employee
router.get('/api/employee/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching employee');
  }
});

//Get all employees
router.get('/api/employees', async (req, res) => {
  try {
      const employees = await Employee.find({});
      res.status(200).json(employees);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// Add New Employee
router.post('/api/employee/add', async (req, res) => {
  try {
      const emp = new Employee({
          name: req.body.name,
          email: req.body.email,
          salary: req.body.salary
      });
      const newEmployee = await emp.save();
      res.status(201).json(newEmployee);
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
  }
});






module.exports = router;