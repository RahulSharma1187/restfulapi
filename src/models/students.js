const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        minlength: 3
    }, 
    email: {
        type: String,
        required : true,
        unique: [true, 'Email Id is already Present'],
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('This is not valid email')
            }
        }
    },
    phone: {
        type : Number,
        min: 10,
        required: true,
        unique : true
    },
    address: {
        type: String,
        required: true
    }
}); 

// we will create a new collection
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;


