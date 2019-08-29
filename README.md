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

Naming and URL Scheme
---

You must use a consistent naming scheme for all projects in this course.
If we can't find it, we can't grade it.

By default Glitch often assigns your application a random name. To change it, click on the project dropdown menu in the upper left corner of Glitch. You will then see an additional text field displaying the project name in the resulting menu; click here to edit the name.

The name scheme should be `a1-yourGitHubUsername`.
The `a1` will need to be updated to `a2`, `a3`, and so on in future projects.

Resources
---

If you need a JavaScript/HTML/CSS refresher, see [Technology Fundamentals by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html#_html) and/or [JavaScript Codeacademy](https://www.codecademy.com/en/tracks/javascript).

If you need a Git/GitHub refreseher, see [GitHub Bootcamp](https://help.github.com/categories/bootcamp/), the [GitHub Guides](https://guides.github.com/) (especially the ones on Hello World, and Understanding the GitHub Flow, and Forking Projects), and [CodeSchool's Try Git Course](https://www.codeschool.com/courses/try-git).

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

Janette Fong
https://a1-jlfong.glitch.me/

This assignment shows information about myself, including my year and major.

There are sections detailing the courses I have taken and currently taken, and also my prior experiences with technologies and work.

## Technical Achievements

- **Bootstrap library implementation**: I successfully imported the Bootstrap library (https://getbootstrap.com/) and utilized various components (Containers, Columns, Cards, etc)
- **Created a customized scrollbar (Technical)**: I also created a customized scrollbar for this assignment, which required me research about Webkit CSS extensions (https://developer.mozilla.org/en-US/docs/Web/CSS/WebKit_Extensions).
I got inspiration as to how to create my own scrollbar from W3 Schools (https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp)
- **Loading images**: I determined how to load images for this assignment.  One way is to use the image's CDN after uploading to the assets folder in glitch.
I created a separate images/assets folder to store my images so I can use a file path instead of a CDN (learned how to do it from https://support.glitch.com/t/assets-folder-path/4638/7).
I also needed to modify the server.js file so that the server can properly read the image files.
- **Animated slideshow**: I wanted to include an animated slideshow of my summer travels at the end, so I researched how to do it and drew inspiration from here: https://codepen.io/fcalderan/pen/jqpzd

### Design Achievements
- **Overriding certain library features**: Although I used the Bootstrap library, I wanted my assignment to have a different background color and font than what the library used because I felt the library's backgrounds and fonts (which are sans serif fonts) did not reflect my personality and what I wanted to portray for my assignment.
I learned how to override default settings to set my background to pale pink and the font to the Georgia font from reviewing information from https://css-tricks.com/snippets/css/style-override-technique/
- **Created a customized scrollbar (Design)**: To go with what I said earlier about how I created the customized scrollbar under technical achievements, I also wanted the scrollbar to be a part of the overall theme of my page, which was why I decided to design the scrollbar to match the page.
- **Organization**: I decided to portray my courses in columned lists instead of how the assignment had them by default as one long list.
Using the Bootstrap library, I organized my courses into three columns (first column for 1000 and 2000 level CS courses, second column for 3000 level, and third column for 4000 level) so the user can view this information easier.


