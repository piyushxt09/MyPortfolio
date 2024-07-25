import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
const port = 3000;
app.use("*", bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Schema = mongoose.Schema;

// Defining a schema for the 'customers' collection in MongoDB.
const customersSchema = new Schema({
    // Field for storing the user's name as a string.
    name: {
        type: String,   // Data type is String.
        required: true  // The field is required and must have a value.
    },
    // Field for storing the user's password as a string.
    email: {
        type: String,   // Data type is String.
        required: true  // The field is required and must have a value.
    },
    // Field for storing the user's email address as a string.
    message: {
        type: String,   // Data type is String.
        required: true  // The field is required and must have a value.
    },
});

const CustomersModel = mongoose.model('clientdata', customersSchema);

const uri = 'mongodb://localhost:27017/PortfolioData'
mongoose.connect(uri)


app.post('/clientdata', async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let newClientdata = new CustomersModel({
        'name' : name,
        'email': email,
        'message' : message
      });
    console.log(req.body.name);
    if(name != '' && email != '' && message != '')
    {
       newClientdata.save();
    }
    else
    {
         console.log('empty data')
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});