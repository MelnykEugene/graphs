import Graph from "./graph.js";
canv = document.getElementById("myCanvas");
canv.width = window.innerWidth;
canv.height = window.innerHeight;
var context = canv.getContext("2d");
var rect = canv.getBoundingClientRect();
var graph = new Graph();

//UI variables
var show_degree = false;
var show_id = false;

onDegree = () => {
  var checkbox = document.getElementById("degree");
  show_degree = checkbox.checked;
};

onNodeId = () => {
  var checkbox = document.getElementById("node_id");
  show_id = checkbox.checked;
};

modeChanger = () => {
  var selection = document.getElementById("shape").value;
  console.log(selection);
  var disabled_controls = ["solid_cube", "square"];
  if (disabled_controls.includes(selection))
    height_slider.disabled = "disabled";
  else height_slider.disabled = "";

  if (selection == "solid_cube") {
    width_slider.max = 15;
    width_slider.value = 10;
    n = 10;
  }
  if (selection == "square") {
    width_slider.max = 40;
    width_slider.value = 10;
    n = 10;
  }
  if (selection == "sheet") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 10;
    height_slider.value = 20;
    n = 10;
    m = 20;
  }
  if (selection == "cylinder") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 10;
    height_slider.value = 20;
    n = 10;
    m = 20;
  }
  if (selection == "torus") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 10;
    height_slider.value = 20;
    n = 10;
    m = 20;
  }
  if (selection == "klein") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 30;
    height_slider.value = 15;
    n = 30;
    m = 15;
  }
  if (selection == "mobius") {
    width_slider.max = 40;
    height_slider.max = 40;
    width_slider.value = 10;
    height_slider.value = 20;
    n = 10;
    m = 20;
  }
  mode = selection;
  generate();
};

generate = function () {
  console.log("a");
  if (mode == "solid_cube") graph.generateSolidCube(n);
  if (mode == "square") graph.generateSquare(n);
  if (mode == "sheet") graph.generateSheet(n, m);
  if (mode == "cylinder") graph.generateCyllinder(n, m);
  if (mode == "torus") graph.generateTorus(n, m);
  if (mode == "klein") graph.generateKlein(n, m);
  if (mode == "mobius") graph.generateMobius(n, m);
};

n = 10;
m = 20;
mode = "torus";
generate();

var width_slider = document.getElementById("width_slider");
var height_slider = document.getElementById("height_slider");
//height_slider.disabled = "disabled";

width_slider.oninput = function () {
  n = this.value;
  generate();
};

height_slider.oninput = function () {
  m = this.value;
  generate();
};

import {
  codeFromGraph,
  smallestLeaf,
  smallestNeighbor,
  reduce,
  graphFromEncoding,
} from "./codeFromGraph.js";

var drawNodes = function (graph, context) {
  graph.nodes.forEach(function (node) {
    context.beginPath();
    context.fillStyle = "black";
    context.arc(node.x, node.y, 5, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    context.font = "14px Arial";
    if (show_id) context.fillText(node.id, node.x + 5, node.y - 5);
    context.fillStyle = "red";
    context.font = "20px Arial";
    if (show_degree) context.fillText(node.degree, node.x - 20, node.y + 20);
  });
};

var drawEdges = function (graph, context) {
  graph.edges.forEach(function (edge) {
    context.beginPath();
    context.strokeStyle = "black";
    context.moveTo(edge.node1.x, edge.node1.y);
    context.lineTo(edge.node2.x, edge.node2.y);
    context.stroke();
  });
};

var update = () => {
  graph.edges.forEach(function (edge) {
    if (edge.node1 == undefined || edge.node2 == undefined) {
      console.log("undefined edge");
      return;
    }

    if (edge.node1.x == edge.node2.x && edge.node1.y == edge.node2.y) {
      console.log("invalid edge encountered");
      return;
    }

    let radiusx = edge.node2.x - edge.node1.x;
    let radiusy = edge.node2.y - edge.node1.y;

    let distance = Math.sqrt(radiusx * radiusx + radiusy * radiusy) + 1;

    if (distance == 0) {
      console.log("zero distance encountered");
    }

    let unitradiusx = radiusx / distance;
    let unitradiusy = radiusy / distance;

    let minusradiusx = -1 * unitradiusx;
    let minusradiusy = -1 * unitradiusy;

    var c1 = 0.1;
    var c2 = 1;

    edge.node1.nextX +=
      (unitradiusx * (c1 * Math.log(distance / c2) + 4 * distance) * 1) / 60;
    edge.node1.nextY +=
      (unitradiusy * (c1 * Math.log(distance / c2) + 4 * distance) * 1) / 60;

    edge.node2.nextX +=
      (minusradiusx * (c1 * Math.log(distance / c2) + 4 * distance) * 1) / 60;
    edge.node2.nextY +=
      (minusradiusy * (c1 * Math.log(distance / c2) + 4 * distance) * 1) / 60;
  });

  for (var i = 0; i < graph.nodes.length; i++) {
    for (var j = 0; j < graph.nodes.length; j++) {
      if (i == j) continue;

      let node = graph.nodes[i];
      let node2 = graph.nodes[j];

      if (node == undefined || node2 == undefined) {
        console.log("undefined edge");
        return;
      }

      let radiusx = node.x - node2.x;
      let radiusy = node.y - node2.y;

      let distance = Math.sqrt(radiusx * radiusx + radiusy * radiusy);

      let unitradiusx = radiusx / distance;
      let unitradiusy = radiusy / distance;

      let magnitude = 1000 / distance;

      node.nextX += (unitradiusx * magnitude * 1) / 60;
      node.nextY += (unitradiusy * magnitude * 1) / 60;
    }
  }

  for (var i = 0; i < graph.nodes.length; i++) {
    graph.nodes[i].x = graph.nodes[i].nextX;
    graph.nodes[i].y = graph.nodes[i].nextY;
  }
};

var draw = () => {
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canv.width, canv.height);
  context.restore();

  drawNodes(graph, context);
  drawEdges(graph, context);
};

var lastX = canv.width / 2,
  lastY = canv.height / 2;
var dragStart, dragged;

var lastX = canv.width / 2,
  lastY = canv.height / 2;
var dragStart, dragged;
canv.addEventListener(
  "mousedown",
  function (evt) {
    document.body.style.mozUserSelect =
      document.body.style.webkitUserSelect =
      document.body.style.userSelect =
        "none";
    lastX = evt.offsetX || evt.pageX - canv.offsetLeft;
    lastY = evt.offsetY || evt.pageY - canv.offsetTop;
    dragStart = context.transformedPoint(lastX, lastY);
    dragged = false;
  },
  false
);
canv.addEventListener(
  "mousemove",
  function (evt) {
    lastX = evt.offsetX || evt.pageX - canv.offsetLeft;
    lastY = evt.offsetY || evt.pageY - canv.offsetTop;
    dragged = true;
    if (dragStart) {
      var pt = context.transformedPoint(lastX, lastY);
      context.translate(pt.x - dragStart.x, pt.y - dragStart.y);
      draw();
    }
  },
  false
);
canv.addEventListener(
  "mouseup",
  function (evt) {
    dragStart = null;
    //if (!dragged) zoom(evt.shiftKey ? -1 : 1);
  },
  false
);

canv.addEventListener("dblclick", () => {
  context.setTransform(1, 0, 0, 1, 0, 0);
  var translateX = canv.width / 2;
  var translateY = canv.height / 2;
  context.translate(translateX, translateY);
});

var scaleFactor = 1.1;
var zoom = function (clicks) {
  var pt = context.transformedPoint(lastX, lastY);
  context.translate(pt.x, pt.y);
  var factor = Math.pow(scaleFactor, clicks);
  context.scale(factor, factor);
  context.translate(-pt.x, -pt.y);
  draw();
};

var handleScroll = function (evt) {
  var delta = evt.wheelDelta
    ? evt.wheelDelta / 40
    : evt.detail
    ? -evt.detail
    : 0;
  if (delta) {
    zoom(delta);
  }
  return evt.preventDefault() && false;
};
canv.addEventListener("DOMMouseScroll", handleScroll, false);
canv.addEventListener("mousewheel", handleScroll, false);

var updateNDraw = function () {
  update();
  draw();
  requestAnimationFrame(updateNDraw);
};

function trackTransforms(ctx) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var xform = svg.createSVGMatrix();
  ctx.getTransform = function () {
    return xform;
  };

  var savedTransforms = [];
  var save = ctx.save;
  ctx.save = function () {
    savedTransforms.push(xform.translate(0, 0));
    return save.call(ctx);
  };
  var restore = ctx.restore;
  ctx.restore = function () {
    xform = savedTransforms.pop();
    return restore.call(ctx);
  };

  var scale = ctx.scale;
  ctx.scale = function (sx, sy) {
    xform = xform.scaleNonUniform(sx, sy);
    return scale.call(ctx, sx, sy);
  };
  var rotate = ctx.rotate;
  ctx.rotate = function (radians) {
    xform = xform.rotate((radians * 180) / Math.PI);
    return rotate.call(ctx, radians);
  };
  var translate = ctx.translate;
  ctx.translate = function (dx, dy) {
    xform = xform.translate(dx, dy);
    return translate.call(ctx, dx, dy);
  };
  var transform = ctx.transform;
  ctx.transform = function (a, b, c, d, e, f) {
    var m2 = svg.createSVGMatrix();
    m2.a = a;
    m2.b = b;
    m2.c = c;
    m2.d = d;
    m2.e = e;
    m2.f = f;
    xform = xform.multiply(m2);
    return transform.call(ctx, a, b, c, d, e, f);
  };
  var setTransform = ctx.setTransform;
  ctx.setTransform = function (a, b, c, d, e, f) {
    xform.a = a;
    xform.b = b;
    xform.c = c;
    xform.d = d;
    xform.e = e;
    xform.f = f;
    return setTransform.call(ctx, a, b, c, d, e, f);
  };
  var pt = svg.createSVGPoint();
  ctx.transformedPoint = function (x, y) {
    pt.x = x;
    pt.y = y;
    return pt.matrixTransform(xform.inverse());
  };
}

trackTransforms(context);
var translateX = canv.width / 2;
var translateY = canv.height / 2;
context.translate(translateX, translateY);

updateNDraw();
