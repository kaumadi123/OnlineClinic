const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const MotherSchema = new Schema ({
    NIC:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    division:{
        type : String,
        required: true
    },
    contactNu:{
        type: Number
    },
    MidwifeId:{
        type: String,
        required: true
    },
    ClinicId:{
        type: String,
        required: true
    },
    address:{
        type: String
    }
})

const Mother = mongoose.model("Mother", MotherSchema);

module.export = MotherModel;