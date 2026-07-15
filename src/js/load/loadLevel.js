// loadLevel.js

function loadLevel(whichName)
{
    if (ge('levelScript'))
    {
        ge('levelScript').remove();
    }

    let script = ce('script');
    script.id = 'levelScript';
    script.onload = function()
    {
        console.log(world);

        ge('outputDiv').textContent = JSON.stringify(world);

        initWorld(world);
    };

    script.src = whichName;

    document.getElementsByTagName('head')[0].append(script);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

