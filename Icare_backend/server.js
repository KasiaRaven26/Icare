const app = require("./app");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });


const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

console.log(process.env.DATABASE)
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => console.log("Database connection successful"));

const port = process.env.PORT ||3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
