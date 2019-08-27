---

# Matt Adiletta
##### -   https://a1-mjadiletta.glitch.me

This project contains a design for an online resume with information about me. 

It has seven sections: 
  ### 1. Bio
  ### 2. Related Courses:
    - electrical engineering courses
    - computer science courses
  ### 3. Skills
    - computer engineering tools
    - programming languages
  ### 4. Experiences
    - summer 2019
    - summer 2018
    - summer 2017 
  ### 5. Projects
    - imu applications
    - piano player
    - bacteria wheel
  ### 6. Activities
    - track and field
    - club soccer
  ### 7. Awards
    - ncaa
    - electrical engineering
    - goldwater scholar
	 - eagle scout


## Technical Achievements
- **Redesigned server.js for auto-updates**: Initially, the source code provided by Professor Roberts did not include the ability to auto-update the html page. 
        This means that even while editing the html page, the webpage was never edited unless the server.js or package.json was edited. To fix this I added a function
        submitFileData which essentially just calls index.html. This forces glitch to autoupdate based on changes to index.html.
- **Implemented a bulma css styling sheet**: The bulma style sheet comes from bulma.min.css. This style sheet must be read into the server in a similar fassion to a .html file. 
        In server.js I added a case statement for the bulma.min.css style sheet. In the case statement I write a response with header 200, and write to the response with the loaded cssFile.
- **Created javascript to animate sections**: In index.html I wrote a script that gets called for html code with the class "expandable". This code is adapted from code found online at 
        W3 school. Essentially, if a user clicks on the main title area, it will toggle the nextElementSibling which in all my cases is called "content". The content is then shown or hidden 
        from view on the webpage. In the css I wrote to manipulate the toggling areas, a "+" sign will appear if the area can be expanded and "-" sign will appear if the are can be contracted.

### Design Achievements
- **Re-vamp for A1 Project**: The general requirements for this project were very undefined so I took it upon myself to transfer my entire resume to this webpage. First I added some really 
        cool style from bulma which is mostly just text style, color schemes, and containers. Then I added a few images from online to spice-up the resume. All the sections of the resume
        are contained in very simple, clear expandable text regions to make it easy for a user to see everything. I made sure that html lists are used when necessary. Also as mentioned
        previously, the script for expanding and contracting text regions is very useful for the overal visual of the resume, along with a well-chosen color pallet. I also included many
        embedded images and even an embedded youtube video. 
- **Created css for drowdown text**: In index.html I wrote a css style section for the dropdown text. In this section I define the different colors for when a user is hovering over 
        the dropdown, pressed the dropdown, what the expanded dropdown looks like, what percent of the dropdown is used, how the text is alligned, and much more. 

