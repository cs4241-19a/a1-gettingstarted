####Read Me

Andrew Nolan
http://a1-acnolan.glitch.me


It's hard to differentiate between the technical and design 
achievements because they are both heavily css based, but
This project shows ...

### Design Achievements
There is a header navigation menu, this allows for faster
travelling on the page using anchor tags. It's a short page
but if someone wants to quickly skip between sections without
scrolling they can use this navigation bar.

The page is also fully responsive. With just basic text and 
list elements, there is not much to make responsive. However, 
using media queries when viewed on mobile and tablet devices
(or just a resized browser window) the page changes. In
particular hidden messages show on desktop only vs mobile
only as well as the menu changes to a classic hamburger menu,
instead of a standard header bar. Making it easier to use
on mobile sized screens.

A final design achievement (or maybe technical achievement all
of these kind of overlap both sections) is that google claims
the page is well designed. Running the page through lighthouse,
google devtool's Audits tab, gives the page a 100% in all
categories: performance, accessibility, best practices, and
SEO. So the page is designed well in chrome's opinion.
https://developers.google.com/web/tools/lighthouse/#devtools

### Technical Achievements
Many of the technical achievements overlap the design 
achievements.

For example, I used media queries to allow the page to
be responsive on mobile. For the awesome ratings the 
page gets from google I had to optimize SEO for the site
through the use of meta tags. If this page were to be
published to the web I would have done all possible 
from a coding perspective to get the best SEO I can.

The main technical achievement I have is the hamburger
menu. Most of the time hamburger menus are handled 
through Javascript. However I am a firm believer that
if you can do something in pure html and css you 
should not bog down your site with unneeded Javascript.
So I managed to make my hamburger menu open and close
using pure css. This is done through the use of a hidden
checkbox, sibling selectors in css, and the checked
pseudo class.


