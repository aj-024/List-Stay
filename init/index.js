const mongoose = require("mongoose");
const initdata = require("./data.js");  // Correctly importing the data
const Listing = require("../models/listing.js");

const MongoUrl = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(()=> {
    console.log("conenected");
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MongoUrl);
}

const initDB = async () => {
    await Listing.deleteMany({}); 
    initdata.data = initdata.data.map((obj) => ({
        ...obj, owner: "6786038235c4bf6138250ba7",
    }));
    await Listing.insertMany(initdata.data);  // Corrected the data source
    console.log("Data was initialized");
}
initDB();
