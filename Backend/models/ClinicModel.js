const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ClinicSchema = new Schema ({

    ClinicId:{
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
    MidwifeId:{
        type: String,
        required: true
    }
})

const Clinic = mongoose.model("Clinic", ClinicSchema);

module.export = ClinicModel;