// import axios from 'axios';

// require('dotenv').config();
// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const fileUpload = require('express-fileupload');

// const routes = require('./controllers');
// const helpers = require('./utils/helpers');
// const { Admin } = require('./models');

// const sequelize = require('./config/connection');
// const { truncate } = require('fs');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();

// const PORT = process.env.PORT || 8080;

// const sess = {
//     secret: process.env.SECRET,
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize,
//     }),
// };

// app.use(session(sess));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.use(fileupload());

// app.post('/upload', async (req, res) => {
//     let sampleFile;
//     let uploadPath;

//     console.log('req.files >>>', req.files);

//     const b64img = Buffer.from(req.files.sampleFile.data).toString('base64');
//     console.log(b64img);

//     // ADD Admin Class here, from DB
// })


