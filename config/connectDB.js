// 1 require mongoose
const mongoose = require ("mongoose");
//2 connect DB
const connectDB = async () => {
    try {
        //step1
        await mongoose.connect(process.env.MONGO_URI);
        //step2
        console.log('Database Connected..')
    } catch (error) {
        console.log('database is not connected...')
    }
}
module.exports = connectDB