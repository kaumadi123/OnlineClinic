const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema ({
    NIC:{
        type: String,
        required: true
    },
    DoctorId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    division:{
        type : String,
        required: true
    },
    Specialization:{
        type: String,
        required: true
    },
    contactNu:{
        type: Number
    }
})

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.export = DoctorModel;