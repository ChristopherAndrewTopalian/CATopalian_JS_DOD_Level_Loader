// makeInterface.js

function makeInterface()
{
    let titleOfApplication = ce("a");
    titleOfApplication.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JS_DOD_Level_Loader'
    titleOfApplication.target = '_blank';
    titleOfApplication.textContent = ' CATopalian JS DOD Level Loader';
    titleOfApplication.style.fontSize = '17px';
    titleOfApplication.style.fontWeight = 'bold';
    titleOfApplication.style.color = 'rgb(130, 130, 130)';
    titleOfApplication.style.textDecoration = 'none';
    ba(titleOfApplication);

    //-//

    let menuPanel = ce('div');
    menuPanel.style.position = 'absolute';
    menuPanel.style.right = '0px';
    menuPanel.style.top = '0px';
    menuPanel.style.width = '200px'
    menuPanel.style.height = '300px';
    menuPanel.style.overflowY = 'scroll';
    menuPanel.id = 'menuPanel';
    menuPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    menuPanel.style.padding = '2px 4px';
    menuPanel.style.border = 'solid 1px rgb(255, 255, 255)';
    menuPanel.style.zIndex = 2;
    ba(menuPanel);

    //-//

    let levelOneBtn = ce('button');
    levelOneBtn.textContent = 'Level 1';
    levelOneBtn.onmouseover = function()
    {
        hoverSound();
    };
    levelOneBtn.onclick = function()
    {
        clickSound();
        loadLevel('src/js/3data/level_001.js');
        ge('outputDiv').textContent = JSON.stringify(world);

        initWorld(world);
    };
    menuPanel.append(levelOneBtn);

    //-//

    let levelTwoBtn = ce('button');
    levelTwoBtn.textContent = 'Level 2';
    levelTwoBtn.onmouseover = function()
    {
        hoverSound();
    };
    levelTwoBtn.onclick = function()
    {
        clickSound();
        loadLevel('src/js/3data/level_002.js');
        console.log(world);
        ge('outputDiv').textContent = JSON.stringify(world);

        initWorld(world);
    };
    menuPanel.append(levelTwoBtn);

    //-//

    menuPanel.append(ce('hr'));

    //-/

    let outputDiv = ce('div');
    outputDiv.id = 'outputDiv';
    outputDiv.style.wordWrap = 'break-word';
    outputDiv.style.border = 'solid 1px white';
    outputDiv.style.padding = '2px 4px';
    menuPanel.append(outputDiv);

    //-//

    let gameBoardDiv = ce('div');
    gameBoardDiv.id = 'gameBoard';
    gameBoardDiv.style.width = '640px';
    gameBoardDiv.style.height = '400px';
    gameBoardDiv.style.position = 'relative';
    gameBoardDiv.style.border = 'solid 1px rgb(255, 255, 255)';
    ba(gameBoardDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

