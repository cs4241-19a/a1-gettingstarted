// TODO: Add synth sound on load
// TODO: Replace with jQuery

window.onload = function () {

    // Type It
    let startTypeIt = new TypeIt('#start', {
        speed: 20,
        breakLines: false,
        strings: [
            "Welcome to my website!",
            "It looks a little empty....",
            "Let's fix that.",
            "I think we should add a cool background",
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
        }).type("This is looking pretty cool, but I think we can make it cooler")
            .delete("This is looking pretty cool, but I think we can make it cooler".length)
            .exec(async () => {
                addGround();
                $("#start").css("top", "20%");
            })
            .type("Sick! Now to identify myself.")
            .delete("Sick! Now to identify myself.".length)
            .exec(async () => {
                $("#start").addClass("profile_heading");
                $("#start").css("top", "50%");

            })
            .type("Kit Zellerbach")
            .go();
    }

    function stepTwo() {
        var interval = window.setInterval(function () {
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
            speed: 10,
            afterComplete: (instance) => {
                // ...
                clearInterval(interval);

                $("#code_intro_section").css("color", "black");
                $("#code_intro_section").css("background-color", "white")

                $("body").append("<section id=\"education\">\n" +
                    "    <div class=\"row\">\n" +
                    "        <div class=\"col-md-1 mx-auto\">\n" +
                    "            <h1><span>Education</span></h1>\n" +
                    "        </div>\n" +
                    "\n" +
                    "        <div class=\"col-md-8 mx-auto\">\n" +
                    "            <div class=\"mb-5\"><h3>Worcester Polytechnic Institute</h3>\n" +
                    "                <p class=\"info\">B.S. Computer Science <span>&bull; </span><em class=\"date\">2020</em></p>\n" +
                    "                <p class=\"info\">Data Science Minor <span>&bull; </span>Astrophysics Minor</p>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mb-5\"><h3>Bangkok Patana School</h3>\n" +
                    "                <p class=\"info\">IB Diploma <span>&bull; </span><em class=\"date\">2016</em></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
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
            .type(" I'm a passionate programmer. I truly love what I do. I am always amazed with how Computer Science can be applied to solve real world problems")
            .break()
            .type("* ")
            .break()
            .type("* I know several languages, like Java, Javascript, HTML, CSS, C++, C, and Python. Wait check this out.")
            .break()
            .exec(async () => {
                $("#code_intro_section").css("color", "white");
                $("#code_intro_section").css("background-color", "black");
            })
            .type("* ")
            .break()
            .type("* Pretty cool huh?")
            .break()
            .type("* ")
            .break()
            .type("* I want to develop my ability to work in an industry environment, using agile development to help solve problems.")
            .break()
            .type("* ")
            .break()
            .type("* I neither identify as a front-end or back-end developer. I am currently one of those indecisive individuals who seek the full stack-title, or a similar broad label.")
            .break()
            .type("* ")
            .break()
            .type("* I'm just going to go ahead and create some more parts of the site.")
            .pause(100);

        code_intro.go();
    }

    function stepThree(){
        var interval = window.setInterval(function () {
            $('html, body').animate({
                scrollTop: parseInt($("#code_courses").offset().top)
            }, 500);
        }, 500);

        let code_courses = new TypeIt('#code_courses', {
            speed: 1,
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
                new TypeIt('#code_skills', {
                    speed: 30,
                    lifeLike: false,
                    afterComplete: (instance) => {
                        // TODO
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
                        }, 2000);

                        new TypeIt('#finishing', {
                            speed: 60
                        }).type("* Alright now for some finishing touches! Thanks for visiting!")
                            .exec(async () => {
                                $("body").append("<section id=\"experience\">\n" +
                                    "    <div class=\"row\">\n" +
                                    "        <div class=\"col-md-1 mx-auto\">\n" +
                                    "            <h1><span>Experience</span></h1>\n" +
                                    "        </div>\n" +
                                    "        <div class=\"col-md-8 mx-auto\">\n" +
                                    "            <div class=\"mb-5\"><h3>Microsoft</h3>\n" +
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
                                    "    </div>\n" +
                                    "</section>")

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
                                    "            <li><a href=\"./old_index.html\">Remove Code</a></li>\n" +
                                    "        </ul>\n" +
                                    "    </nav>");

                                $('a.smoothscroll[href*="#"]:not([href="#"])').click(function (e) {
                                    e.preventDefault();

                                    var target = this.hash,
                                        $target = $(target);


                                    $("#nav-wrap a").parent().removeClass("current");
                                    $(this).parent().   addClass("current");


                                    $('html, body').stop().animate({
                                        'scrollTop': $target.offset().top - 30
                                    }, 800, 'swing');
                                });

                                $(window).on('scroll', function() {

                                    var h = $('header').height();
                                    var y = $(window).scrollTop();
                                    var nav = $('#nav-wrap');

                                    if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
                                        nav.fadeOut('fast');
                                    }
                                    else {
                                        if (y < h*.20) {
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
                    .exec(async () => {
                        $("#extra_stuff").append('<iframe width="100%" height="500px" src="https://kitzeller.github.io/webgl-portfolio"></iframe>')
                    })
                    .pause(8000)
                    .exec(async () => {
                        $("#extra_stuff").empty();
                    })
                    .break()
                    .type("* ")
                    .break()
                    .type("* Feel free to check it out later! ")
                    .break()
                    .type("* ")
                    .break()
                    .type("* I also make websites for my friends, so I know a good amount of HTML and CSS.")
                    .break()
                    .type("* ")
                    .break()
                    .type("* But to be more specific let's compare them all")
                    .break()
                    .exec(async () => {

                        let skills = ["Javascript", "HTML", "CSS", "Java", "Ruby", "Testing"];
                        let colors = ["green", "red", "blue", "yellow", "purple", "magenta"];
                        let values = [350, 300, 250, 350, 0, 300];
                        for (let skill in skills){
                            $("#extra_stuff").append("<div style=\"border:1px solid " +  colors[skill] +";margin:10px;width:400px;text-align:center\">\n" +
                                "  <div id=\""+ skills[skill] + "js" + "\" style=\"background:"+ colors[skill] +";height:50px;width:1px;border:1px solid "+ colors[skill] +";\">"+ skills[skill]+ "</div>\n" +
                                "</div>");

                            $("#"+skills[skill]+"js").animate({
                                width: values[skill] + "px"
                            }, {
                                duration: 1000,
                                easing: "linear"
                            });
                        }
                    })
                    .type("* ").go();
            }
        }).pause(100)
            .type("* I also love to learn.")
            .break()
            .type("* ")
            .break()
            .type("* From all the courses I have taken, Software Engineering has been my favorite. I've also had the opportunity to be a SA three times!")
            .break()
            .type("* ")
            .break()
            .type("* I'm also a huge fan of Computer Graphics and continue to work with external libraries such as Three.js and Babylon.js to created web-based experiences.")
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
 * BABYLON STEPS
 */

var canvas, engine, scene, camera;

function initBabylon() {
    // Babylon.js
    canvas = document.getElementById("renderCanvas"); // Get the canvas element
    engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

    // Create the scene space
    scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black();

    // Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("camera1", -Math.PI / 3, 5 * Math.PI / 12, 50, new BABYLON.Vector3(0, 5, 0), scene);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);


    // Watch for browser/canvas resize events
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


    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
        camera.alpha += 0.003;

        scene.render();
    });
}