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

This assignment requires that your website is both contained in a GitHub repository and hosted in Glitch. There are three ways to do this:

1. Clone this repo to your computer, make changes locally on your computer, push the repo onto GitHub, and then import your GitHub repo into Glitch.
2. Clone this repo directly to Glitch, use the Glitch editor to make changes, and then export your repo from Glich to GitHub.
3. Same as #1, bu instead of importing from Github to Glitch you just upload the files (or copy/paste) them directly to Glitch.

## Option 1 - Clone to computer, push to Github, import to Glitch (recommended)

1. Fork the starting project code in GitHub. This repo contains:
    * the server code, `server.js`
    * A starting `index.html` file that you will edit as described below
    * A package.json file that helps configure Glitch
    * This README
2. Edit `index.html` to show the following information about you:
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
        * unit testing
3. Test your project to make sure that when someone goes to your main page, it displays correctly. You can do this locally by simply running `node server.js` from within the assignment directory.

4. Modify the README file according to the specification below.
5. Commit and push all your changes to GitHub. 
6. Deploy your project to Glitch. You can do this by [importing the repo from GitHub](https://medium.com/glitch/import-code-from-anywhere-83fb60ea4875)
7. Ensure that your project has the proper naming scheme (guide follows) so we can find it.
8. Create and submit a Pull Request to the original repo.

## Option 2 - Clone to Glitch, edit on Glitch, and then export to GitHub
Most of these steps are the same as option 1, except that you being by creating a new project Glitch using this repo as a staring point (just choose New Project > Import from GitHub for this and then paste in the link to your repo). At the end, you can export your Glitch project to GitHub by [following these instructions](https://www.youtube.com/watch?time_continue=77&v=aWJFbtrgW4E&feature=emb_logo). *Note that the location of the projecct export feature in Glitch has moved from what they show in this video.* It's now located in Tools > Import and Export (tools is located in the bottom left of the Glitch editor).

## Option 3 - Clone to computer, edit locally, push to GitHub, upload to Glitch
This is the same as option 1, except that for step 6 (Deploy to Glitch) you simply upload each file to your Glitch repository (using New File > Upload a File).

Naming and URL Scheme
---

You must use a consistent naming scheme for all projects in this course.
If we can't find it, we can't grade it.

By default Glitch often assigns your application a random name. To change it, click on the project dropdown menu in the upper left corner of Glitch. You will then see an additional text field displaying the project name in the resulting menu; click here to edit the name.

The name scheme should be `a1-yourGitHubUsername`.
The `a1` will need to be updated to `a2`, `a3`, and so on in future projects.

Resources
---

If you need a JavaScript/HTML/CSS refresher, see [HTML & CSS](https://wpi.primo.exlibrisgroup.com/discovery/fulldisplay?docid=alma9936730811904746&context=L&vid=01WPI_INST:Default&lang=en&search_scope=MyInst_and_CI&adaptor=Local%20Search%20Engine&tab=Everything&query=any,contains,Jon%20Duckett&offset=0) and/or [JavaScript Codeacademy](https://www.codecademy.com/en/tracks/javascript).

If you need a Git/GitHub refreseher, see [GitHub Bootcamp](https://help.github.com/categories/bootcamp/), the [GitHub Guides](https://guides.github.com/) (especially the ones on Hello World, and Understanding the GitHub Flow, and Forking Projects), and [CodeSchool's Try Git Course](https://www.codeschool.com/courses/try-git).

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

Charlie Roberts
http://a1-charlieroberts.glitch.me

This project shows ...

## Technical Achievements
- **Proved P=NP**: Using a combination of...
- **Solved AI**: ...

### Design Achievements
- **Re-vamped Apple's Design Philosophy**: Shown in `style.css`, the code...


