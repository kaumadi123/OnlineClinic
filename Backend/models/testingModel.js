const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const TestingSchema = new Schema ({
    testId:{
        type: String,
        required: true
    },
    MotherId: {
        type: String,
        required: true
    },
    testname: {
        type: String
    },
    testDate:{
        type : Date,
        required: true
    },
    testTime:{
        type: TimeRanges,
        required: true
    },
    MidwifeId:{
        type: String,
        required: true
    },
    ClinicId:{
        type: String,
        required: true
    },
    DoctorId:{
        type: String
    },
    result:{
        type: String,
        required: true
    }
})

const Test = mongoose.model("Test", TestingSchema);

module.export = testingModel;