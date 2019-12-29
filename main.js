function animation() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth - 20;
    context.canvas.height = window.innerHeight - 70;
    var colors = ["#262626", "#171717", "#303030", "#808080", "#6B6B6B"];
    var text = "ZŁOTA LICZBA φ";
    var centerx = canvas.width / 2;
    var centery = canvas.height / 2;
    var frames = 50;
    var offset = 0;
    var start = null;
    context.lineWidth = 3;
    context.font = "8vh Arial";
    context.lineJoin = "miter";
    context.textBaseline = "middle";
    context.textAlign = "center";
    function animate(timestamp) {
        if (!start)
            start = timestamp;
        console.log(timestamp - start);

        if ((timestamp - start) >= frames) {
            start = timestamp - ((timestamp - start) - frames);
            offset++;
            context.clearRect(0, 0, canvas.width, canvas.height)
            colors.forEach(function fun(color, i) {
                context.lineDashOffset = 53 * i + offset;
                context.strokeStyle = color;
                context.strokeText(text, centerx, centery);
                context.setLineDash([50, 200]);
            });
        }
        window.requestAnimationFrame(animate);
    }
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animation);

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
// }

// function fibonacci() {
//     var canvas = document.getElementById("c");
//     var ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     var cx = canvas.width / 2;
//     var cy = canvas.height / 2;
//     ctx.beginPath();
//     ctx.rect(0, 0, canvas.width, canvas.height);
//     ctx.moveTo(canvas.width * 0.619, 0);
//     ctx.lineTo(canvas.width * 0.619, canvas.height);
//     ctx.moveTo(canvas.width * 0.619, canvas.height * 0.619);
//     ctx.lineTo(canvas.width, canvas.height * 0.619);
//     ctx.moveTo(canvas.width * 0.619, canvas.height);
//     ctx.arc(canvas.width * 0.619, canvas.height, canvas.width * 0.619, 1 * Math.PI, 1.5 * Math.PI);
//     ctx.moveTo(canvas.width * 0.619, canvas.height * 0.619);
//     ctx.arc(canvas.width * 0.619, canvas.height * 0.619, canvas.width * 0.381, 1.5 * Math.PI, 0);
//     ctx.moveTo(canvas.width - canvas.width * 0.619 * 0.381, canvas.height * 0.619);
//     ctx.lineTo(canvas.width - canvas.width * 0.619 * 0.381, canvas.height);
//     ctx.moveTo(canvas.width - canvas.width * 0.619 * 0.381, canvas.height * 0.619);
//     ctx.arc(canvas.width - canvas.width * 0.619 * 0.381, canvas.height * 0.619, canvas.width * 0.619 * 0.381, 0, 0.5 * Math.PI);
//     ctx.moveTo(canvas.width * 0.619, canvas.height - canvas.height * 0.619 * 0.381);
//     ctx.lineTo(canvas.width - canvas.width * 0.619 * 0.381, canvas.height - canvas.height * 0.619 * 0.381);
//     ctx.moveTo(canvas.width - canvas.width * 0.619 * 0.381, canvas.height - canvas.height * 0.619 * 0.381);
//     ctx.arc(canvas.width - canvas.width * 0.619 * 0.381, canvas.height - canvas.height * 0.619 * 0.381, canvas.width * 0.381 * 0.381, 0.5 * Math.PI, 1 * Math.PI);
//     ctx.moveTo(canvas.width * 0.705, canvas.height * 0.619);
//     ctx.lineTo(canvas.width * 0.705, canvas.height - canvas.height * 0.619 * 0.381);
//     ctx.moveTo(canvas.width * 0.705, canvas.height - canvas.height * 0.619 * 0.381);
//     ctx.arc(canvas.width * 0.705, canvas.height - canvas.height * 0.619 * 0.381, canvas.width * 0.381 * 0.381 * 0.6, 1 * Math.PI, 1.5 * Math.PI);
//     ctx.moveTo(canvas.width * 0.764, canvas.height * 0.7142);
//     ctx.lineTo(canvas.width * 0.705, canvas.height * 0.7142);
//     ctx.moveTo(canvas.width * 0.705, canvas.height * 0.7142);
//     ctx.arc(canvas.width * 0.705, canvas.height * 0.7142, canvas.width * 0.058, 1.5 * Math.PI, 0);
//     ctx.moveTo(canvas.width * 0.735, canvas.height * 0.7142);
//     ctx.lineTo(canvas.width * 0.735, canvas.height * 0.761);
//     ctx.moveTo(canvas.width * 0.735, canvas.height * 0.7142);
//     ctx.arc(canvas.width * 0.735, canvas.height * 0.7142, canvas.width * 0.029, 0, 1 * Math.PI);
//     ctx.stroke();
//     requestAnimationFrame(fibonacci);
// }


(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        },
            timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
}());


var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
ctx.lineCap = "round";

var t = 1;

var vertices = [];
vertices.push({
    x: 1,
    y: 1
});
vertices.push({
    x: canvas.width - 1,
    y: 1
});
vertices.push({
    x: canvas.width - 1,
    y: canvas.height - 1
});
vertices.push({
    x: 1,
    y: canvas.height - 1
});
vertices.push({
    x: 1,
    y: 1
});
vertices.push({
    x: canvas.width * 0.619 - 1,
    y: 1
});
vertices.push({
    x: canvas.width * 0.619 - 1,
    y: canvas.height - 1
});
vertices.push({
    x: canvas.width * 0.619 - 1,
    y: canvas.height * 0.619 - 1
});
vertices.push({
    x: canvas.width - 1,
    y: canvas.height * 0.619 - 1
});
vertices.push({
    x: canvas.width - canvas.width * 0.619 * 0.381 - 1,
    y: canvas.height * 0.619 - 1
});
vertices.push({
    x: canvas.width - canvas.width * 0.619 * 0.381 - 1,
    y: canvas.height - 1
});
vertices.push({
    x: canvas.width - canvas.width * 0.619 * 0.381 - 1,
    y: canvas.height - canvas.height * 0.619 * 0.381 - 1
});
vertices.push({
    x: canvas.width * 0.619 - 1,
    y: canvas.height - canvas.height * 0.619 * 0.381 - 1
});
vertices.push({
    x: canvas.width * 0.705 - 1,
    y: canvas.height - canvas.height * 0.619 * 0.381 - 1
});
vertices.push({
    x: canvas.width * 0.705 - 1,
    y: canvas.height * 0.619 - 1
});
vertices.push({
    x: canvas.width * 0.705 - 1,
    y: canvas.height * 0.7142 - 1
});
vertices.push({
    x: canvas.width * 0.764 - 1,
    y: canvas.height * 0.7142 - 1
});
vertices.push({
    x: canvas.width * 0.735 - 1,
    y: canvas.height * 0.7142 - 1
});
vertices.push({
    x: canvas.width * 0.735 - 1,
    y: canvas.height * 0.761 - 1
});

// draw the complete line
ctx.lineWidth = 1;
// tell canvas you are beginning a new path
ctx.beginPath();
ctx.stroke();
ctx.lineWidth = 5;
ctx.strokeStyle = "#5C5C5C";
var points = calcWaypoints(vertices);
animate(points);

function calcWaypoints(vertices) {
    var waypoints = [];
    for (var i = 1; i < vertices.length; i++) {
        var pt0 = vertices[i - 1];
        var pt1 = vertices[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < 100; j++) {
            var x = pt0.x + dx * j / 100;
            var y = pt0.y + dy * j / 100;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}


function animate() {
    if (t < points.length - 1) {
        requestAnimationFrame(animate);
    }
    // draw a line segment from the last waypoint
    // to the current waypoint
    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();
    // increment "t" to get the next waypoint
    t++;
}

function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("doc").style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("doc").style.marginLeft = "0";
}

function hide() {
    element = document.getElementById("hid");
    element.style.visibility = 'hidden';
}

function show() {
    element = document.getElementById("hid");
    element.style.visibility = 'visible';
}
