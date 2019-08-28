
// Time interval
var interval;

window.onload = function () {

    /**
     * Audio Control
     */
    $('#sound').click(function () {
        if ($("#background-music")[0].paused) {
            $("#background-music")[0].play();
        } else {
            $("#background-music")[0].pause();
        }
        $("#sound").toggleClass("fa-pause-circle")
    });

    /**
     * TypeIt Functions
     */
    let startTypeIt = new TypeIt('#start', {
        speed: 35,
        breakLines: false,
        strings: [
            "Welcome to my website!",
            "Please note that this is an experience and will take just less than a minute.",
            "You will not be able to scroll around until it is complete.",
            "You can click the play button in the top left to toggle music.",
            "Now to begin.",
            "This page looks a little empty...",
            "Let's fix that.",
            "I think we should add a cool background.",
            ""
        ],
        afterComplete: (instance) => {
            stepOne();
        }
    });

    function stepOne() {
        $("body").append("<canvas id=\"renderCanvas\"></canvas>");
        initBabylon();
        $("#start").css("color", "white");


        new TypeIt('#start', {
            speed: 60,
            afterComplete: (instance) => {
                stepTwo();
            }
        }).type("This is looking pretty cool, but I think we can make it even better!")
            .pause(500)
            .delete("This is looking pretty cool, but I think we can make it even better!".length)
            .exec(async () => {
                addGround();
                $("#start").css("top", "20%");
            })
            .type("Sick! Now to identify myself.")
            .pause(200)
            .delete("Sick! Now to identify myself.".length)
            .exec(async () => {
                $("#start").addClass("profile_heading");
                $("#start").css("top", "50%");

            })
            .type("Kit Zellerbach")
            .pause(300)
            .go();
    }

    function stepTwo() {
        interval = window.setInterval(function () {
            $('html, body').animate({
                scrollTop: parseInt($("#code_intro").offset().top)
            }, 500);
        }, 500);

        $("body").append("<section id=\"code_intro_section\" class=\"code-format\">\n" +
            "    <div class=\"container\">\n" +
            "        <div class=\"row\">\n" +
            "            <div class=\"col-lg-12\">\n" +
            "                <h3 class=\"text-center\">Welcome</h3>\n" +
            "                <div id=\"code_intro_code\">\n" +
            "                    <br/>\n" +
            "                    /*<br>\n" +
            "                    <span id=\"code_intro\"></span>\n" +
            "                    <br>*/\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</section>");

        $('html, body').animate({
            scrollTop: parseInt($("#code_intro").offset().top)
        }, 2000);

        let code_intro = new TypeIt('#code_intro', {
            speed: 30,
            afterComplete: (instance) => {
                clearInterval(interval);

                $("#code_intro_section").animate({color: "black"});
                $("#code_intro_section").animate({backgroundColor: "white"});


                $("body").append("<section id=\"education\">\n" +
                    "        <div class=\"col-10 mx-auto\">\n" +
                    "            <h1 class=\"mb-5\"><span>Education</span></h1>\n" +
                    "            <div class=\"mb-5\"><h3>Worcester Polytechnic Institute</h3>\n" +
                    "                <p class=\"info\">B.S. Computer Science <span>&bull; </span><em class=\"date\">2020</em></p>\n" +
                    "                <p class=\"info\">Data Science Minor <span>&bull; </span>Astrophysics Minor</p>\n" +
                    "            </div>\n" +
                    "            <div class=\"mb-5\"><h3>Bangkok Patana School</h3>\n" +
                    "                <p class=\"info\">IB Diploma <span>&bull; </span><em class=\"date\">2016</em></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "</section>")

                $('html, body').animate({
                    scrollTop: parseInt($("#education").offset().top)
                }, 500);

                $("body").append("<section id=\"courses\" class=\"mx-5 code-format\">\n" +
                    "    <div class=\"container\">\n" +
                    "        <div class=\"row\">\n" +
                    "            <div class=\"col-lg-12\">\n" +
                    "                /*<br>\n" +
                    "                <div id=\"code_courses\"></div>\n" +
                    "                */\n" +
                    "                <br>\n" +
                    "                <br>\n" +
                    "                <div class=\"card-columns\" id=\"code_courses_list\"></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</section>");

                stepThree();

            }
        }).pause(100)
            .type("* Alright let's get to the good stuff...")
            .pause(100)
            .delete("* Alright let's get to the good stuff...".length - 1)
            .type(" I'm a passionate programmer. I truly love what I do. I am always amazed with how Computer Science can be applied to solve real world problems.")
            .break()
            .type("* ")
            .break()
            .type("* I know several languages, like Java, Javascript, HTML, CSS, C++, C, and Python. Wait check this out.")
            .break()
            .pause(300)
            .exec(async () => {
                $("#code_intro_section").animate({color: "white"});
                $("#code_intro_section").animate({backgroundColor: "black"});
            })
            .type("* ")
            .break()
            .type("* Pretty cool, huh?")
            .break()
            .type("* ")
            .break()
            .type("* I want to develop my ability to work in an industry environment, using agile development to help solve problems.")
            .break()
            .type("* ")
            .break()
            .type("* I neither identify as a front-end nor a back-end developer. I am currently one of those indecisive individuals who seek the full-stack title, or a similar broad label.")
            .break()
            .type("* ")
            .break()
            .type("* I'm just going to go ahead and create some more parts of the site.")
            .pause(500);

        code_intro.go();
    }

    function stepThree() {
        interval = window.setInterval(function () {
            $('html, body').animate({
                scrollTop: parseInt($("#code_courses").offset().top)
            }, 500);
        }, 500);

        let code_courses = new TypeIt('#code_courses', {
            speed: 30,
            lifeLike: false,
            autoStart: true,
            waitUntilVisible: true,
            afterComplete: (instance) => {
                clearInterval(interval);

                $("body").append("<section class=\"mx-5 code-format\">\n" +
                    "    <div class=\"container\">\n" +
                    "        <div class=\"row\">\n" +
                    "            <div class=\"col-lg-12\">\n" +
                    "                /*<br>\n" +
                    "                <span id=\"code_skills\"></span>\n" +
                    "                <div id=\"extra_stuff\"></div>\n" +
                    "                */\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</section>")
                // var elem = document.getElementById("code_skills");
                // elem.scrollIntoView();
                $('html, body').animate({
                    scrollTop: parseInt($("#code_skills").offset().top) - 100
                }, 2000);

                interval = window.setInterval(function () {
                    $('html, body').animate({
                        scrollTop: parseInt($("#code_skills").offset().top)
                    }, 500);
                }, 500);

                new TypeIt('#code_skills', {
                    speed: 40,
                    lifeLike: false,
                    afterComplete: (instance) => {
                        clearInterval(interval);

                        $("body").append("<!-- CODE -->\n" +
                            "<section class=\"mx-5 code-format\">\n" +
                            "    <div class=\"container\">\n" +
                            "        <div class=\"row\">\n" +
                            "            <div class=\"col-lg-12\">\n" +
                            "                /*<br>\n" +
                            "                <span id=\"finishing\"></span>\n" +
                            "                <br>\n" +
                            "                */\n" +
                            "            </div>\n" +
                            "        </div>\n" +
                            "    </div>\n" +
                            "</section>")

                        $('html, body').animate({
                            scrollTop: parseInt($("#finishing").offset().top)
                        }, 1000);


                        new TypeIt('#finishing', {
                            speed: 60
                        }).type("* Alright now for some finishing touches! Thanks for visiting!")
                            .exec(async () => {
                                $("body").append("<section id=\"experience\">\n" +
                                    "    <div class=\"col-10 mx-auto\">\n" +
                                    "        <h1 class=\"mb-5\"><span>Experience</span></h1>\n" +
                                    "        <div class=\"mb-5\"><h3>Microsoft</h3>\n" +
                                    "                <p class=\"info\">Software Engineering Intern<span> &bull;</span> <em class=\"date\">May - August 2019</em>\n" +
                                    "                </p>\n" +
                                    "                <p>Worked in the Cyber Defense Operations Center as a member of the Digital Security and Risk\n" +
                                    "                    Engineering team.</p>\n" +
                                    "            </div>\n" +
                                    "            <div class=\"mb-5\"><h3>WPI</h3>\n" +
                                    "                <p class=\"info\">Student Assistant<span> &bull;</span> <em class=\"date\">March 2018 - Present</em></p>\n" +
                                    "                <p>Working as a Student Assistant for various Computer Science courses, such as Software Engineering and\n" +
                                    "                    Database Systems.\n" +
                                    "                </p>\n" +
                                    "            </div>\n" +
                                    "            <div class=\"mb-5\"><h3>WPI</h3>\n" +
                                    "                <p class=\"info\">REU Student<span> &bull;</span> <em class=\"date\">February 2019 - Present</em></p>\n" +
                                    "                <p>Research on optimizing deep learning inference models for Android devices as part of an NSF\n" +
                                    "                    award.</p>\n" +
                                    "            </div>\n" +
                                    "            <div class=\"mb-5\"><h3>Raytheon</h3>\n" +
                                    "                <p class=\"info\">Software Engineering Intern<span> &bull;</span> <em class=\"date\">May - August 2018</em>\n" +
                                    "                </p>\n" +
                                    "                <p>Worked on the development of Air Traffic Control Automation Systems and Next Generation (NexGen)\n" +
                                    "                    Weather data processing systems</p>\n" +
                                    "            </div>\n" +
                                    "        </div>\n" +
                                    "</section>");

                                $('html, body').animate({
                                    scrollTop: parseInt($("#experience").offset().top)
                                }, 2000);

                                $("body").append("<footer>\n" +
                                    "    <div class=\"container\">\n" +
                                    "        <p class=\"float-right text-muted\">\n" +
                                    "            Kit Zellerbach\n" +
                                    "        </p>\n" +
                                    "        <div>\n" +
                                    "            <a class=\"btn\" href=\"www.github.com/kitzeller\">\n" +
                                    "                <i class=\"fa fa-2x fa-github\"></i></a>\n" +
                                    "            <a class=\"btn\" href=\"https://www.linkedin.com/in/kitzeller/\">\n" +
                                    "                <i class=\"fa fa-2x fa-linkedin\"></i></a>\n" +
                                    "        </div>\n" +
                                    "    </div>\n" +
                                    "</footer>")

                                $("body").append("<nav id=\"nav-wrap\">\n" +
                                    "        <ul id=\"nav\" class=\"nav\">\n" +
                                    "            <li><a class=\"smoothscroll\" href=\"#education\">Education</a></li>\n" +
                                    "            <li><a class=\"smoothscroll\" href=\"#courses\">Courses</a></li>\n" +
                                    "            <li><a class=\"smoothscroll\" href=\"#experience\">Experience</a></li>\n" +
                                    "        </ul>\n" +
                                    "    </nav>");

                                $('a.smoothscroll[href*="#"]:not([href="#"])').click(function (e) {
                                    e.preventDefault();

                                    var target = this.hash,
                                        $target = $(target);


                                    $("#nav-wrap a").parent().removeClass("current");
                                    $(this).parent().addClass("current");


                                    $('html, body').stop().animate({
                                        'scrollTop': $target.offset().top - 30
                                    }, 800, 'swing');
                                });

                                $(window).on('scroll', function () {

                                    var h = $('header').height();
                                    var y = $(window).scrollTop();
                                    var nav = $('#nav-wrap');

                                    if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768)) {
                                        nav.fadeOut('fast');
                                    }
                                    else {
                                        if (y < h * .20) {
                                            nav.removeClass('opaque').fadeIn('fast');
                                        }
                                        else {
                                            nav.addClass('opaque').fadeIn('fast');
                                        }
                                    }

                                });

                            }).go();

                    }
                }).pause(100)
                    .type("* Alright let's talk about skills.")
                    .break()
                    .type("* ")
                    .break()
                    .type("* Javascript is a big one. Here's my WebGL Portfolio!")
                    .break()
                    .type("* ")
                    .exec(async () => {
                        $("#extra_stuff").append('<iframe width="100%" height="500px" src="https://kitzeller.github.io/webgl-portfolio"></iframe>')
                    })
                    .pause(8000)
                    .exec(async () => {
                        $("#extra_stuff").empty();
                    })
                    .break()
                    .type("* Feel free to check it out later! But just so you know it's under some major development right now. The link is https://kitzeller.github.io/webgl-portfolio/")
                    .break()
                    .type("* ")
                    .break()
                    .type("* I also make websites for my friends, so I know a good amount of HTML and CSS.")
                    .break()
                    .type("* ")
                    .break()
                    .type("* But to be more specific let's compare them all. The left is no experience, and the right is a lot of experience.")
                    .break()
                    .exec(async () => {

                        // Skills bars

                        let skills = ["Javascript", "HTML", "CSS", "Java", "Ruby", "Testing"];
                        let colors = ["green", "red", "cyan", "orange", "purple", "magenta"];
                        let values = [520, 480, 350, 520, 0, 450];
                        for (let skill in skills) {
                            $("#extra_stuff").append("<div style=\"  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border:1px solid black;margin:10px;width:600px;font-size: 24px; text-align:center\">\n" +
                                "  <div id=\"" + skills[skill] + "js" + "\" style=\"background:linear-gradient(to right, dark" + colors[skill] + "," + colors[skill] + ");height:50px;width:1px;\">" + skills[skill] + "</div>\n" +
                                "</div>");

                            $("#" + skills[skill] + "js").animate({
                                width: values[skill] + "px"
                            }, {
                                duration: 1500,
                                easing: "linear"
                            });
                        }

                    })
                    .type("* ")
                    .pause(500)
                    .go();
            }
        }).pause(100)
            .type("* I also love to learn.")
            .break()
            .type("* ")
            .break()
            .type("* From all the courses I have taken, Software Engineering has been my favorite. I've also had the opportunity to be an SA three times!")
            .break()
            .type("* ")
            .break()
            .type("* I'm also a huge fan of Computer Graphics and continue to work with external libraries such as Three.js and Babylon.js to create web-based experiences.")
            .break()
            .type("* ")
            .break()
            .type("* Let's look at some of my courses!")
            .exec(async () => {
                let courses = ["Accelerated Introduction to Program Design", "Accelerated Object Oriented Design", "Systems Programming Concepts", "Machine Language and Assembly", "Algorithms", "Operating Systems", "Database Systems I", "Software Engineering", "Data and Knowledge Discovery in Databases", "Computer Graphics", "Ubiquitous and Mobile Computing", "Data Visualization", "Object Oriented Design Principles"];
                for (let course of courses) {
                    $("#code_courses_list").append("<div class=\"card bg-light\">\n" +
                        "            <div class=\"card-body text-center\">\n" +
                        "                <p class=\"card-text\">" + course + "</p>\n" +
                        "            </div>\n" +
                        "        </div>");
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            return resolve();
                        }, 500)
                    });
                }
            });

        code_courses.go();
    }

    startTypeIt.go();

};

/**
 * Babylon Steps
 */

var canvas, engine, scene, camera;

function initBabylon() {
    // Babylon.js
    canvas = document.getElementById("renderCanvas"); // Get the canvas element
    engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

    scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black();
    camera = new BABYLON.ArcRotateCamera("camera1", -Math.PI / 3, 5 * Math.PI / 12, 50, new BABYLON.Vector3(0, 5, 0), scene);
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    window.addEventListener("resize", function () {
        engine.resize();
    });

    scene.render();
}

function addGround() {
    var groundMaterial = new BABYLON.GridMaterial("groundMaterial", scene);
    groundMaterial.majorUnitFrequency = 5;
    groundMaterial.minorUnitVisibility = 0.45;
    groundMaterial.gridRatio = 2;
    groundMaterial.backFaceCulling = false;
    groundMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
    groundMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
    groundMaterial.opacity = 0.98;

    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "./files/heightMap.png", 100, 100, 100, 0, 10, scene, false);
    ground.material = groundMaterial;

    engine.runRenderLoop(function () {
        camera.alpha += 0.003;

        scene.render();
    });
}