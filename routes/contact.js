//1require express
const express = require("express");
// 2express router
const router = express.Router();
//3require model contact: require schema
const Contact = require("../models/Contact");
/////////routes
/**
 * @desc : testing route
 * @path : http://localhost:5500/api/contacts/testt
 * @method : GET
 * @data : no data
 */
router.get("/testt", (req, res) => {
    res.send("Hello");
});
/**
 * @desc : add contact
 * @path : http://localhost:5500/api/contacts/
 * @method : POST
 * @data : req.body
 */
router.post("/", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        //destru yfhmha mel schema mte3na eli Contact (: howa mnin chnjib newcontact)
        //handling errors:name and email required
        if (!name || !email){
            res.status(400).send({msg:'Name & email are required', error})
            return
        }
        //handling errors : email is unique
        const contact= await Contact.find({email})
        if (contact) {
            res.status(400).send({msg:'contact already exist!!!', error})
            return
        }
        const newContact = new Contact({
            name,
            email,
            phone,
        });
        await newContact.save();
        //y3abi ala ases model
        res.status(200).send({ msg: "Contact added sahiti ouma", newContact });
    } catch (error) {
        res.status(400).send({ msg: "ghalet ouma ghalet", error });
    }
})
/**
 * @desc :  get all contacts
 * @path : http://localhost:5500/api/contacts/
 * @method : GET
 * @data : no data
 */
router.get('/', async (req, res) => {
    try {
        const listContacts =await Contact.find();
        res.status(200).send({msg:'this the list of all contacts', listContacts})
    } catch (error) {
        res.status(400).send({msg:'failed', error})
        
    }
})

/**
 * @desc :  get one
 * @path : http://localhost:5500/api/contacts/:id
 * @method : GET
 * @data : req.params.id
 */
router.get('/:id', async (req, res)=>{
    try {
        const contactToGet =await Contact.findOne({_id: req.params.id})
        res.status(200).send({msg:'get one',contactToGet})
    } catch (error) {
        res.status(400).send({msg:'failed', error})
        
    }
})
/**
 * @desc :  delete contact
 * @path : http://localhost:5500/api/contacts/:id
 * @method : DELETE
 * @data : req.params.id
 */
 router.delete("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        await Contact.findOneAndDelete({ _id });
        res.status(200).send({ msg: "contact deleted" });
    } catch (error) {
        res.status(400).send({
            msg: "cannot delete  this contact",
            error,
        });
    }
});
/**
 * @desc :edit contact
 *@path : http://localhost:5500/api/contacts/:_id
 *@method: PUT
 *@data : req.params.id &req.body
 */
 router.put("/:_id", async (req, res)=> {
    try{
        const{_id}=req.params;
        const result =await Contact.updateOne({_id}, {$set:{...req.body}})
        res.status(200).send({msg:"contact edited"})
    } catch(error){
        res.status(400).send({msg:"can not edit this contact", error})

    }
})

module.exports = router;
