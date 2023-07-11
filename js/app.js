let positions = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  // Store the current mouse position in the array
  positions.push(createVector(mouseX, mouseY));
  
  // Limit the array size to the last ten positions
  if (positions.length > 10) {
    positions.shift();
  }
  
  // Draw circles at the stored mouse positions
  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];
    ellipse(pos.x, pos.y, 50);
  }
}