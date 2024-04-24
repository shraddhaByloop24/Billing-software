const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const Employee = require('./models/Employee');
const Food = require('./models/Food')

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employee");

// Define routes

// Registration endpoint
app.post('/register', async (req, res) => {
    try {
        const { name, password, email, mobile, address } = req.body;
  
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const employee = await Employee.create({
            name,
            email,
            password: hashedPassword,
            mobile,
            address
        });
        res.json(employee);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const employee = await Employee.findOne({ email });
        if (employee) {
            // Compare hashed password
            const passwordMatch = await bcrypt.compare(password, employee.password);
            if (passwordMatch) {
                
                res.json('Success');
            } else {
                
                res.status(400).json('The password is incorrect');
            }
        } else {
           
            res.status(404).json('No record exists');
        }
    } catch (error) {
        res.status(500).json(error);
    }
});



// Add Food
app.post('/food', async (req, res) => {
    const { name, price, foodtype, foodcategory, description, foodimg } = req.body; 
  
    try {
    
      const employee = new Food({
        name,
        price,
        foodtype,
        foodcategory,
        description,
        foodimg
      });
  
  
      await employee.save();
  
      
      res.status(201).json({ message: 'Food item created successfully' });
    } catch (error) {
  
      console.error('Error creating food item:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });



// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


