const mongoose = require('mongoose');



//Employee Schema

const Employee = mongoose.model('Employee', {
  name: {
    type:String,
    require:true
  },
  email: {
    type:String,
    require:true
  },
  salary: {
    type:String,
    require:true
  }
});

module.exports = {Employee}