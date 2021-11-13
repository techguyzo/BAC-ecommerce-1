require('dotenv').config();

const productsData = require('./data/products.js');
const connectDB = require('./config/db.js');
const Product = require('./models/Product.js');

connectDB();

const importData = async () => {
    try{
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data import SUCCESS!");
        process.exit();
    }catch(error){
        console.log("Data import ERROR!");
        process.exit(1);
    }
};

importData();