const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://blogo:oLFtxrqkbcboJfmG@cluster0.a71rbrz.mongodb.net/?retryWrites=true&w=majority")

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username, 
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    }catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if (passOk) {
        //user is logged in
    } else {
        //user is not logged in
      res.status(400).json({message: 'Wrong password'});  
    }
});
app.listen(4000, () => {
    console.log('Up on port 4000!');
});



// IcLEhaSDkh5Fuh0Y

// mongodb+srv://joshdfebbie:IcLEhaSDkh5Fuh0Y@cluster0.brwsmvu.mongodb.net/?retryWrites=true&w=majority

