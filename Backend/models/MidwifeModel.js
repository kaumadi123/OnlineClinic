const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const MidwifeSchema = new Schema ({
    NIC:{
        type: String,
        required: true
    },
    MidwifeId:{
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
    ClinicId:{
        type: String,
        required: true
    },
    contactNu:{
        type: Number
    }
})

const Midwife = mongoose.model("Midwife", MidwifeSchema);

module.export = MidwifeModel;