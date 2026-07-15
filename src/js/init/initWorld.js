// initWorld.js

function initWorld()
{
    let gameBoard = ge('gameBoard').innerHTML = '';

    for (let z in world)
    {
        let entity = ce('div');
        entity.textContent = world[z].name;
        entity.style.position = 'absolute';
        entity.style.left = world[z].x + 'px';
        entity.style.top = world[z].y + 'px';

        entity.style.width = world[z].width + 'px';
        entity.style.height = world[z].height + 'px';

        //entity.style.border = 'solid 1px white';

        //entity.style.backgroundColor = world[z].skinColor;

        entity.style.backgroundImage = 'url('+world[z].texture+')';

        entity.style.backgroundPosition = 'center';
        entity.style.backgroundRepeat = 'no-repeat';
        entity.style.backgroundSize = 'contain';
        ge('gameBoard').append(entity);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

