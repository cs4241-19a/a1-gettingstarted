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

Demi Karavoussianis

http://a1-dkaravoussianis.glitch.me

This project shows my first HTML/CSS/JS website! For assignment 1, 
I deployed a website using HTML and CSS with a server in Javascript to describe a little bit about myself, 
and my experience with different computer science topics. To view the information about me, hover over the circles, 
and watch them expand, and change color to reveal the information within.
## Technical Achievements
- **CSS organization and Classes** : I explored the use of classes for CSS. I discovered that an element could have more than one class so that the object can correspond to more than one CSS element. I used this fact to make each bubble part of the "circle" class, but also part of its own class. The purpose of this was so that I could organize the CSS to incorporate all similar attributes of the bubbles in .circle, but also create separate classes for each individual bubble to control characteristics like expanded size and color based on the content.
- **Expanding Bubbles**: As another technical achievement, I explored the use of transitions to create the expanding and contracting bubble effect. Having rarely used HTML or CSS, I struggled with creating smooth transitions of the size of the bubbles.  In addition, I moved the bubbles around so that they were not all centered on the page, and explored the use of margins to keep the bubbles from overlapping with each other.
- **Typewriter Heading**: As a technical achievement for the assignment, I used CSS in addition to the provided HTML. I made use of a typewriter graphic for the title/header. This technique was modified from https://css-tricks.com/snippets/css/typewriter-effect/ to incorporate my color and font scheme, as well as repeat infinitely. In addition I modified the speed and movement of the blinker to go slower.


### Design Achievements
- **Color Scheme** : For a design achievement, I decided to use the color wheel methodically. Each bubble is initially a primary color. When expanded, the color becomes its opposite complementary color, for the most attractive contrast.  This choice is layered on a white background for simplicity.

- **Expanding Bubbles** : Rather than simply displaying the information on the screen, I decided to make the webpage interactive, by having the user hover over bubbles to reveal the information. This choice keeps the user interacting with the page, rather than just reading, as well as makes the screen less cluttered.  The bubbles are ordered strategically from most important to least important information.

- **Typewriter** : The typewriting font at the top was chosen to keep the website from looking very static. The motion draws the users eyes to the top where they can read the instructions about how to access the information about me.  This is something I had personally really liked from other websites I had seen, and was very interested in trying it on my own.



