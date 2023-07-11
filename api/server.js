const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');


const resumeTemplate = require('./template/resume');

const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// POST Route - PDF generation and fetching of the data

app.post('/create-pdf', (req, res) => {
    pdf.create(resumeTemplate(req.body), {}).toFile('Resume.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
        console.log('Success');
    });
});




// Get - Send generated pdf to the client
app.get('/fetch-pdf', (req,res) => {
    res.sendFile(path.resolve('./Resume.pdf'));
});




app.listen(port, () => console.log(`Listening on port ${port}`));
