$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 110, 400, 20, "green");  // Ground platform
createPlatform(580, 240, 300, 20, "red"); // First elevation
createPlatform(210, 335, 200, 20, "brown"); // Left platform
createPlatform(850, 450, 250, 20, "blue");  // High platform
createPlatform(600, 550, 350, 20, "yellow"); // Upper level
createPlatform(0, 680, 1300, 20, "black");  // Death barrier
createPlatform(500,400,200,20,"Pink");


    // TODO 3 - Create Collectables
    createCollectable("diamond", 400, 250, 0, 0);
createCollectable("steve", 600, 50);
createCollectable("grace", 800, 350, 0.5, 0.8);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
createCannon("right", 225, 3000);
createCannon("right", 295, 3000)



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
