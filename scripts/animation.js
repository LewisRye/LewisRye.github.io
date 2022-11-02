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
        line.animate({path:'M 250,0 L 250,100'}, 750, "ease-in-out", arrow_down);
    }

    arrow_down();
}