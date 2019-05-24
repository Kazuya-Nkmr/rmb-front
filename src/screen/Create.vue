<template>
  <div class="create-area">
    <div class="character-area">
      Name:<input class="rmb-input middle" type="text" name="characterName">
    </div>
    <div class="draw-area">
      <!-- <div id="canvas-area"> -->
      <div>
        <canvas id="canvas" width="640px" height="480px">残念ながらHTML5に対応していません</canvas>
      </div>
      <!-- </div> -->
      <div id="color-area content">
        <ul>
          <li style="background-color:#000000"></li>
          <li style="background-color:#1b1b1b"></li>
          <li style="background-color:#313131"></li>
          <li style="background-color:#434343"></li>
          <li style="background-color:#535353"></li>
          <li style="background-color:#626262"></li>
          <li style="background-color:#707070"></li>
          <li style="background-color:#898989"></li>
          <li style="background-color:#959595"></li>
          <li style="background-color:#a0a0a0"></li>
          <li style="background-color:#b5b5b5"></li>
          <li style="background-color:#c9c9c9"></li>
          <li style="background-color:#dcdcdc"></li>
          <li style="background-color:#ffffff"></li>
          <li style="background-color:#ff0000"></li>
          <li style="background-color:#ffff00"></li>
          <li style="background-color:#00ff00"></li>
          <li style="background-color:#00ffff"></li>
          <li style="background-color:#0000ff"></li>
          <li style="background-color:#ff00ff"></li>
          <li style="background-color:#e60012"></li>
          <li style="background-color:#fff100"></li>
          <li style="background-color:#009944"></li>
          <li style="background-color:#00a0e9"></li>
          <li style="background-color:#1d2088"></li>
          <li style="background-color:#e4007f"></li>
          <li style="background-color:#f29b76"></li>
          <li style="background-color:#f6b37f"></li>
          <li style="background-color:#facd89"></li>
          <li style="background-color:#fff799"></li>
          <li style="background-color:#cce198"></li>
          <li style="background-color:#acd598"></li>
          <li style="background-color:#89c997"></li>
          <li style="background-color:#84ccc9"></li>
          <li style="background-color:#7ecef4"></li>
          <li style="background-color:#88abda"></li>
          <li style="background-color:#8c97cb"></li>
          <li style="background-color:#8f82bc"></li>
          <li style="background-color:#aa89bd"></li>
          <li style="background-color:#c490bf"></li>
          <li style="background-color:#f19ec2"></li>
          <li style="background-color:#f29c9f"></li>
          <li style="background-color:#ec6941"></li>
          <li style="background-color:#f19149"></li>
          <li style="background-color:#f8b551"></li>
          <li style="background-color:#fff45c"></li>
          <li style="background-color:#b3d465"></li>
          <li style="background-color:#80c269"></li>
          <li style="background-color:#32b16c"></li>
          <li style="background-color:#13b5b1"></li>
          <li style="background-color:#00b7ee"></li>
          <li style="background-color:#448aca"></li>
          <li style="background-color:#556fb5"></li>
          <li style="background-color:#5f52a0"></li>
          <li style="background-color:#8957a1"></li>
          <li style="background-color:#ae5da1"></li>
          <li style="background-color:#ea68a2"></li>
          <li style="background-color:#eb6877"></li>
          <li style="background-color:#e60012"></li>
          <li style="background-color:#eb6100"></li>
          <li style="background-color:#fff100"></li>
          <li style="background-color:#8fc31f"></li>
          <li style="background-color:#22ac38"></li>
          <li style="background-color:#009944"></li>
          <li style="background-color:#009e96"></li>
          <li style="background-color:#00a0e9"></li>
          <li style="background-color:#0068b7"></li>
          <li style="background-color:#00479d"></li>
          <li style="background-color:#1d2088"></li>
          <li style="background-color:#601986"></li>
          <li style="background-color:#920783"></li>
          <li style="background-color:#e4007f"></li>
          <li style="background-color:#e5004f"></li>
          <li style="background-color:#a40000"></li>
          <li style="background-color:#a84200"></li>
          <li style="background-color:#ac6a00"></li>
          <li style="background-color:#b7aa00"></li>
          <li style="background-color:#638c0b"></li>
          <li style="background-color:#097c25"></li>
          <li style="background-color:#007130"></li>
          <li style="background-color:#00736d"></li>
          <li style="background-color:#0075a9"></li>
          <li style="background-color:#004986"></li>
          <li style="background-color:#002e73"></li>
          <li style="background-color:#100964"></li>
          <li style="background-color:#440062"></li>
          <li style="background-color:#6a005f"></li>
          <li style="background-color:#a4005b"></li>
          <li style="background-color:#a40035"></li>
          <li style="background-color:#7d0000"></li>
          <li style="background-color:#7f2d00"></li>
          <li style="background-color:#834e00"></li>
          <li style="background-color:#8a8000"></li>
          <li style="background-color:#486a00"></li>
          <li style="background-color:#005e15"></li>
          <li style="background-color:#00561f"></li>
          <li style="background-color:#005752"></li>
          <li style="background-color:#005982"></li>
          <li style="background-color:#003567"></li>
          <li style="background-color:#001c58"></li>
          <li style="background-color:#03004c"></li>
          <li style="background-color:#31004a"></li>
          <li style="background-color:#500047"></li>
          <li style="background-color:#7e0043"></li>
          <li style="background-color:#7d0022"></li>
          <li style="background-color:#d1c0a5"></li>
          <li style="background-color:#a6937c"></li>
          <li style="background-color:#7e6b5a"></li>
          <li style="background-color:#59493f"></li>
          <li style="background-color:#362e2b"></li>
          <li style="background-color:#cfa972"></li>
          <li style="background-color:#b28850"></li>
          <li style="background-color:#996c33"></li>
          <li style="background-color:#81511c"></li>
          <li style="background-color:#6a3906"></li>
          <li style="background-color:#fdead6"></li>
          <li style="background-color:#f9d9b8"></li>
        </ul>
      </div>
    </div>
    <div class='btn-area'>
      <a href='./top.html' class='rmb-btn orange middle'>OK</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  mounted () {
    var mouseX;
    var mouseY;

    var mouseX1;
    var mouseY1;

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var mouse = {
      x: 0,
      y: 0,
      x1: 0,
      y1: 0,
      color: "black"
    };
    var draw = false;
    canvas.addEventListener("mousemove", function(e) {
      var rect = e.target.getBoundingClientRect();
      // ctx.lineWidth = document.getElementById("lineWidth").value;
      // ctx.globalAlpha = document.getElementById("alpha").value / 100;
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      if (draw === true) {
        ctx.beginPath();
        ctx.moveTo(mouseX1, mouseY1);
        ctx.lineTo(mouseX, mouseY);
        ctx.lineCap = "round";
        ctx.stroke();
        mouseX1 = mouseX;
        mouseY1 = mouseY;
      }
    });
    canvas.addEventListener("mousedown", function(e) {
      draw = true;
      mouseX1 = mouseX;
      mouseY1 = mouseY;
      undoImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    });
    canvas.addEventListener("mouseup", function(e) {
      draw = false;
    });
  }
}
</script>
