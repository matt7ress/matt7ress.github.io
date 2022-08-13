let level = '0',
    firstAction = 1,
    time = 0;
const g = id => document.getElementById(id);
function play() {
    level = '0', firstAction = 1;
    g('text').innerHTML = '';
    g('buttons').innerHTML = '';
    g('img').src = 'img/0exploring.png';
    setTimeout(split, 3000);
};
function split() {
    if(firstAction) {
        g('img').src = 'img/0split.png';
        g('text').innerHTML = 'HALLWAY SPLITTED IN 2 ROOMS';
        g('buttons').innerHTML = '<button onclick="action(1, 1)">ROOM 1</button> <button onclick="action(1, 2)">ROOM 2</button> <button onclick="action(1, 3)">WAIT</button>';
    } else {
        if(level == '0') {
            g('img').src = 'img/0split.png';
            g('text').innerHTML = 'HALLWAY SPLITTED IN 2 ROOMS';
            g('buttons').innerHTML = '<button onclick="action(1, 1)">ROOM 1</button> <button onclick="action(1, 2)">ROOM 2</button> <button onclick="action(1, 3)">WAIT</button>';
        } else if(level == '1') {
            g('img').src = 'img/1split.png';
            g('text').innerHTML = 'HALLWAY SPLITTED IN 3 ROOMS';
            g('buttons').innerHTML = `<button onclick="action(1, 1)">ROOM 1</button> <button onclick="action(1, 2)">ROOM 2</button> <button onclick="action(1, 3)">ROOM 3</button> <button onclick="action(-1, 0)">DIE</button>`
        };
    };
};
function action(cat, id) {
    if(cat == 1) {
        if(firstAction) {
            if(id != 3) {
                g('text').innerHTML = '';
                g('buttons').innerHTML = '';
                g('img').src = 'img/0exploring.png';
                setTimeout(split, 3000);
            } else {
                g('text').innerHTML = '';
                g('buttons').innerHTML = '';
                setTimeout(split, 3000);
            };
            firstAction = 0;
        } else {
            if(level == '0') {
                if(id == 3) {
                    g('text').innerHTML = '';
                    g('buttons').innerHTML = '';
                    setTimeout([split, () => {g('text').innerHTML = 'KAFIF FOUND YOU';g('buttons').innerHTML = '<button onclick="play()">TRY AGAIN</button>';g('img').src = 'img/kafif.png'}, lights][Math.random() >= 0.98 ? 2 : (Math.random() >= 0.999 ? 1 : 0)], 3000);
                } else {
                    g('text').innerHTML = '';
                    g('buttons').innerHTML = '';
                    g('img').src = 'img/0exploring.png';
                    if(Math.random() >= 0.99) {
                        g('text').innerHTML = 'THE GAME IS UNFINISHED SO YOU BEAT IT';
                        g('buttons').innerHTML = '<button onclick="play()">NEW GAME</button>';
                        g('img').src = 'img/kafif.png';
                    } else if(Math.random() >= 0.95) {
                        setTimeout(esc('1'), 3000);
                    } else if(Math.random() >= 0.999) {
                        setTimeout(() => {g('text').innerHTML = 'YOU OR KAFIF FOUND YOU OR KAFIF';g('buttons').innerHTML = '<button onclick="play()">TRY AGAIN</button>';g('img').src = 'img/kafif.png'});
                    } else {
                        setTimeout(split, 3000);
                    };
                };
            } else if(level == '1') {
                g('text').innerHTML = '';
                g('buttons').innerHTML = '';
                g('img').src = 'img/1exploring.png';
                if(Math.random() >= 0.98) {
                    setTimeout(lights, 3000);
                } else if(Math.random() >= 0.999) {
                    setTimeout(() => {g('text').innerHTML = 'YOU OR KAFIF FOUND YOU OR KAFIF';g('buttons').innerHTML = '<button onclick="play()">TRY AGAIN</button>';g('img').src = 'img/kafif.png'});
                } else {
                    setTimeout(split, 3000);
                };
            };
        };
    } else if(cat == -1) {
        g('text').innerHTML = ['WHY', 'YOU NEED TO RUN AT LEAST IN 0.25 SECONDS'][id];
        g('buttons').innerHTML = '<button onclick="play()">TRY AGAIN</button>';
        g('img').src = 'img/kafif.png';
    } else if(cat == 2) {
        level = '1';
        g('text').innerHTML = '';
        g('buttons').innerHTML = '';
        g('img').src = 'img/1exploring.png';
        setTimeout(split, 3000);
    };
};
function lights() {
    g('text').innerHTML = 'LIGHTS IS OFF PREPARE TO RUN';
    g('buttons').innerHTML = '';
    g('img').src = 'img/1lights.png';
    setTimeout(() => {time = Date.now(); g('text').innerHTML = 'RUN'; g('buttons').innerHTML = '<button onclick="runnnnnnnnnnnnnn()">RUN</button>'; g('img').src = 'img/1kafif.png'}, Math.random() * 2000 + 1000);
};
function esc(newlvl) {
    if(level == '0' && newlvl == '1') {
        g('text').innerHTML = 'YOU FOUND ESCAPE TO LEVEL 1';
        g('buttons').innerHTML = '<button onclick="action(2, 1)">GO TO LEVEL 1</button> <button onclick="action(-1, 0)">GO TO KAFIF</button>';
        g('img').src = 'img/0escape.png';
    };
};
function runnnnnnnnnnnnnn() {
    if(Date.now() - time > 350) {
        action(-1, 1);
    } else {
        g('text').innerHTML = 'YOU RUN FROM KAFIF';
        g('buttons').innerHTML = '';
        g('img').src = 'img/1exploring.png';
        setTimeout(split, 3000);
    };
};