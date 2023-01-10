const { mongoose } = require('mongoose');

require('dotenv').config();

const URL = process.env.MONGO_URL_RICK;

async function connectDb() {
  try {
    const data = await mongoose.connect(URL);

    console.log(`Mongodb connected : ${data.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = { connectDb };
