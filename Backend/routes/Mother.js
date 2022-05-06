const router = require("express").Router();
let Mother = require("../models/MotherModel");

router.route("/add").post((req,res)=>{

    const NIC = req.body.NIC;
    const name = req.body.name;
    const division = req.body.division;
    const contactNu = req.body.contactNu;
    const MidwifeId = req.body.MidwifeId;
    const ClinicId = req.body.ClinicId;
    const address = req.body.address;

    const newMother = new Mother({
        NIC,
        name,
        division,
        contactNu,
        MidwifeId,
        ClinicId,
        address
    })
    newMother.save().then(() => {
        res.json("Mother Added!")
    }).catch (()=> {
        console.log(err);
    })
})