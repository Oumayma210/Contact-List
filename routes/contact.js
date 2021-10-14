//1require express
const express = require("express");
// 2express router
const router = express.Router();
//3require model contact: require schema
const Contact = require("../models/Contact");
/////////routes
/**
 * @desc : testing route
 * @path : http://localhost:5000/api/contacts/testt
 * @method : GET
 * @data : no data
 */
router.get("/testt", (req, res) => {
    res.send("Hello");
});
/**
 * @desc : add contact
 * @path : http://localhost:5000/api/contacts/
 * @method : POST
 * @data : no data
 */
router.post("/", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        //destru yfhmha mel schema mte3na eli Contact (: howa mnin chnjib newcontact)
        const newContact = new Contact({
            name,
            email,
            phone
        });
        await newContact.save();
        //y3abi ala ases model
        res.status(200).send({ msg: "Contact added sahiti ouma", newContact });
    } catch (error) {
        res.status(400).send({msg:"ghalet ouma ghalet", error})
    }
});
module.exports = router;
