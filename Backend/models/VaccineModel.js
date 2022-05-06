const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const VaccineSchema = new Schema ({

    VaccineId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    doseNo:{
        type : Number,
        required: true
    },
    Manufacturer:{
        type: String,
        required: true
    },
    ExpiryDate:{
        type: Date,
        required: true
    }
})

const Vaccine = mongoose.model("Vaccine", VaccineSchema);

module.export = VaccineModel;