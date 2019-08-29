// Imports 
const express = require('express'); // TODO: run npm i
const path = require('path');

// Instance fileds
const app = express()
const port = 3000;

// Content Paths
const indexPagePath = path.join(__dirname + "/src/index.html");
const selfImgPath = path.join(__dirname + "/resources/jack.jpg");
const stylesPath = path.join(__dirname + "/src/styles.css");
const navbarPath = path.join(__dirname + "/src/nav.html");
const logoPath = path.join(__dirname + "/resources/logo.png");
// Work
const kuebixPath = path.join(__dirname + "/src/work/kuebix.html");
const ymcaPath = path.join(__dirname + "/src/work/ymca.html");
const capitalAdvisorsPath = path.join(__dirname + "/src/work/capitalAdvisors.html");
const kuebixLogoPath = path.join(__dirname + "/resources/kuebix-logo.png");
const ymcaLogoPath = path.join(__dirname + "/resources/ymca-logo.jpg");
// Education
const algonquinPath = path.join(__dirname + "/src/education/algonquin.html");
const algonquinImg = path.join(__dirname + "/resources/algonquin.png");
const wpiPath = path.join(__dirname + "/src/education/wpi.html");
const wpiImg = path.join(__dirname + "/resources/wpi.jpg");

// Serve CSS / HTML files
app.get('/', (req, res) => res.sendFile(indexPagePath));
app.get('/styles.css', (req, res) => res.sendFile(stylesPath));
app.get('/nav.html', (req, res) => res.sendFile(navbarPath));
app.get('/kuebix.html', (req, res) => res.sendFile(kuebixPath));
app.get('/ymca.html', (req, res) => res.sendFile(ymcaPath));
app.get('/capitalAdvisors.html', (req, res) => res.sendFile(capitalAdvisorsPath));
app.get('/algonquin.html', (req, res) => res.sendFile(algonquinPath));
app.get('/wpi.html', (req, res) => res.sendFile(wpiPath));

//Serve Images
app.get('/resources/logo.png', (req, res) => res.sendFile(logoPath));
app.get('/resources/algonquin.png', (req, res) => res.sendFile(algonquinImg));
app.get('/resources/wpi.jpg', (req, res) => res.sendFile(wpiImg));
app.get('/resources/jack.jpg', (req, res) => res.sendFile(selfImgPath));
app.get('/resources/ymca-logo.jpg', (req, res) => res.sendFile(ymcaLogoPath));
app.get('/resources/kuebix-logo.png', (req, res) => res.sendFile(kuebixLogoPath));
app.listen(port, () => console.log(`Project 1 [Getting Started] is listening on port ${port}!`));
