function drawBall()
{
    var paper = new Raphael(document.getElementById('ball'), 800, 600);

    var background = paper.rect(0,0,800,600);
    background.attr({ fill: "black" });
    
    var ball = paper.circle(50,50,50);
    ball.attr({ fill: "310-red-yellow"});

    function bounce_drop1()
    {
    ball.animate({cy: 570 , cx: 400}, 700, 'ease-in', bounce_up1);
    }
    
    function bounce_up1()
    {
    ball.animate({cy: 50, cx: 750}, 700, 'ease-out', bounce_drop2);
    }

    function bounce_drop2()
    {
    ball.animate({cy: 570 , cx: 400}, 700, 'ease-in', bounce_up2);
    }
    
    function bounce_up2()
    {
    ball.animate({cy: 50, cx: 50}, 700, 'ease-out', bounce_drop1);
    }

    bounce_drop1();
}

function drawArrow()
{
    var paper = new Raphael(document.getElementById('arrow'), 500, 250);

    var line = paper.path("M 250,0 L 250,100");
    line.attr({"stroke": "whitesmoke", "stroke-width": 5, "arrow-end": "block-wide-long"});

    function arrow_down()
    {
        line.animate({path:'M 250,150 L 250,250'}, 750, "ease-in-out", arrow_up);
    }

    function arrow_up()
    {
        line.animate({path:'M 250,0 L 250,100'}, 750, "", arrow_down);
    }

    arrow_down();
}

function drawAnimations()
{
    // ANIMATION OF SUNRISE

    var paper = new Raphael(document.getElementById('animation'), 800, 600);
    var background = paper.rect(0,0,800,600);
    var sun = paper.circle(-25,750,50);
    var cloud1 = paper.circle(50,100,75);
    var cloud2 = paper.circle(125,75,75);
    var cloud3 = paper.circle(200,100,75);
    
    cloud1.attr({ fill: "white" });
    cloud2.attr({ fill: "white" });
    cloud3.attr({ fill: "white" });
    new Audio('./images/brighton.mp3').play()

    function sunrise()
    {
        background.attr({ fill: "skyblue"});
        sun.attr({ fill: "30-orange-yellow" })
        sun.animate({cy: 750 , cx: 0}, 1250, 'ease-in-out', sunrise_end);
        cloud1.animate({cy: 100 , cx: 125}, 1250, 'ease-in-out');
        cloud2.animate({cy: 75 , cx: 200}, 1250, 'ease-in-out');
        cloud3.animate({cy: 100 , cx: 275}, 1250, 'ease-in-out');
    }

    function sunrise_end()
    {
        sun.animate({cy: 400 , cx: 400}, 1250, 'ease-in-out', sunset);
    }
    
    function sunset()
    {
        sun.animate({cy: 750, cx: 800}, 1250, 'ease-in-out', reset);
        cloud1.animate({cy: 100 , cx: 50}, 1250, 'ease-in-out');
        cloud2.animate({cy: 75 , cx: 125}, 1250, 'ease-in-out');
        cloud3.animate({cy: 100 , cx: 200}, 1250, 'ease-in-out');
    }

    function reset()
    {
        background.attr({ fill: "black"});
        sun.attr({ fill: "30-silver-white" })
        sun.animate({cy: 750 , cx: 0}, 0, 'ease-in', moonrise);
    }

    function moonrise()
    {
        sun.animate({cy: 750 , cx: 0}, 1250, 'ease-in-out', moonrise_end);
    }
    
    function moonrise_end()
    {
        sun.animate({cy: 400, cx: 400}, 1250, 'ease-out', moonset);
    }

    function moonset()
    {
        sun.animate({cy: 750, cx: 800}, 1250, 'ease-in-out', sunrise);
    }

    sunrise();

    // ANIMATION OF PLAY ICON

    var paper = new Raphael(document.getElementById('shape'), 800, 600);
    paper.image("./images/spinning.png", 276, 350, 249, 223);

    var plus = paper.path("M 300 10 L 500 135 L 300 260 L 300 10 z"); // draws a 'play' button
    plus.attr( "fill", "90-#0f0-#ff5");

    plus.hover(
        function()
        {
            transform=this.transform();
            this.animate({ 
            }, 500, ">");
            paper.image("./images/spinning.gif", 276, 350, 249, 223);
            plus.attr({"stroke": "whitesmoke", "stroke-width": 5 });
        }, 

        function()
        {
            this.stop();
            this.transform(transform);
            paper.image("./images/spinning.png", 276, 350, 249, 223);
            plus.attr({"stroke": "black", "stroke-width": 1 });
        });
}