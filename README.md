Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Glitch
===

*DUE: Thursday, August 29th by 11:59 AM (before the start of class!)*  

This assignment is a "warm-up" exercise. 
You will simply deploy the starting Web site that you will use this term to [Glitch](http://www.glitch.com/). 

Treat this assignment as a chance to get up to speed on Git, GitHub, and Glitch. 
If you already know these, great. 
However, if you're new to them, spend several hours practicing, experimenting, and reading documentation. 
In other words, don't just get your website up and done. You will need skills with these tools throughout the rest of the course.

Assignment details
---

Do the following to complete this assignment:

<!-- 1. Fork the starting project code in GitHub. This repo contains:
    * the server code, `server.js`
    * A starting `index.html` file that you will edit as described below
    * A package.json file that helps configure Glitch
    * This README -->
<!-- 2. Edit `index.html` to show the following information about you:
    * your name and class at WPI (e.g. class of 2020) Note: Do not put any contact or personal information that you do not potentially want other people outside of this class to see.
    * your major(s) and minor(s)
    * previous computer science courses that you have taken at WPI
    * your experience with the following technologies and methods (none, some, a lot)
        * HTML
        * CSS
        * Java
        * JavaScript
        * Ruby
        * Python
        * unit testing -->
3. Test your project to make sure that when someone goes to your main page, it displays correctly. You can do this locally by simply running `node server.js` from within the assignment directory.

4. Modify the README file according to the specification below.
5. Commit and push all your changes to GitHub. 
6. Deploy your project to Glitch. You can do this by [importing the repo from GitHub](https://medium.com/glitch/import-code-from-anywhere-83fb60ea4875)
7. Ensure that your project has the proper naming scheme (guide follows) so we can find it.
8. Create and submit a Pull Request to the original repo.

Naming and URL Scheme
---

You must use a consistent naming scheme for all projects in this course.
If we can't find it, we can't grade it.

By default Glitch often assigns your application a random name. To change it, click on the project dropdown menu in the upper left corner of Glitch. You will then see an additional text field displaying the project name in the resulting menu; click here to edit the name.

The name scheme should be `a1-yourGitHubUsername`.
The `a1` will need to be updated to `a2`, `a3`, and so on in future projects.


Jack Gerulskis
http://a1-jgerulskis.glitch.me

## Overview
This project is assignment 1 for CS4241. It creates a simple webpage with the following details about me
- **Education**
    Courses Taken
    Major
    Grade
    Skill Sets
    Clubs
- **Work History**
    A breif summary of the past few jobs I've had

## Technical Achievements
- **Converted standard Node JS server to Express JS server**: 
    Installed express using the node package manager, created dependency
- **Dynamically loaded html (for navbar)**
    Instead of copy and pasting hundreds of lines of html code to replicate nav bar on every page, I created a html file with the nav bar html and dynamically injected the code into any webpage.
- **Nodemon hot reloading**:
    Implemented an alternative script `start-dev` that allowed my server to automatically restart when changes occured to any JS file

### Design Achievements
- **Bootstrap CDN (content delivery network)**:
    Bootstrap allowed easy and quick site scaffolding and UI development. Allowed lots of features to easily
    be implemented. Using their content deliver network removed the need for any dependencies.


