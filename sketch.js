function setup() {
    createCanvas(700, 700);
    background("white");
  }
  
  function draw() {
    
    stroke("pink");
    fill("orange");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  