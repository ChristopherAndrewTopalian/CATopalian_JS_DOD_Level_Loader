// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    loadLevel('src/js/3data/level_001.js');

    console.log(world);

    ge('outputDiv').textContent = JSON.stringify(world);

    initWorld(world);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

