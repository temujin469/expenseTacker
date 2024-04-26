const mongoose = require('mongoose');

const url = "mongodb+srv://temujin469:pi04320416@expensetrackerdb.akyynsj.mongodb.net/?retryWrites=true&w=majority&appName=ExpenseTrackerDb"

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(url)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
        console.log(error)
    }
}

module.exports = {db}