let level = '0',
    firstAction = 1,
    time = 0,
    clicks = 0;
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
        g('buttons').innerHTML = '<button onclick="action(1, 0)">ROOM 1</button> <button onclick="action(1, 0)">ROOM 2</button> <button onclick="action(1, 1)">WAIT</button>';
    } else {
        if(level == '0') {
            g('img').src = 'img/0split.png';
            g('text').innerHTML = 'HALLWAY SPLITTED IN 2 ROOMS';
            g('buttons').innerHTML = '<button onclick="action(1, 0)">ROOM 1</button> <button onclick="action(1, 0)">ROOM 2</button> <button onclick="action(1, 0)">WAIT</button>';
        } else if(level == '1') {
            g('img').src = 'img/1split.png';
            g('text').innerHTML = 'HALLWAY SPLITTED IN 3 ROOMS';
            g('buttons').innerHTML = '<button onclick="action(1, 0)">ROOM 1</button> <button onclick="action(1, 0)">ROOM 2</button> <button onclick="action(1, 0)">ROOM 3</button> <button onclick="action(-1, 0)">DIE</button>';
        } else if(level == 'Fun') {
            if(Math.random() >= 0.8) {
                g('img').src = 'img/funkafif.png';
                g('text').innerHTML = 'OH NO THIS IS PARTYFIF RUN!!';
                g('buttons').innerHTML = '<button onclick="runnnnnnnnnnnnnn()">RUN AWAY</button>';
            } else {
                g('img').src = 'img/funsplit.png';
                g('text').innerHTML = 'HALLWAY SPLITTED IN 2 ROOMS';
                g('buttons').innerHTML = '<button onclick="action(1, 0)">ROOM 1</button> <button onclick="action(1, 0)">ROOM 2</button>';
            };
        };
    };
};
function action(cat, id) {
    if(cat == 1) {
        if(firstAction) {
            if(id) {
                g('text').innerHTML = '';
                g('buttons').innerHTML = '';
                setTimeout(split, 3000);
            } else {
                g('text').innerHTML = '';
                g('buttons').innerHTML = '';
                g('img').src = 'img/0exploring.png';
                setTimeout(split, 3000);
            };
            firstAction = 0;
        } else {
            if(level == '0') {
                if(id) {
                    g('text').innerHTML = '';
                    g('buttons').innerHTML = '';
                    setTimeout([split, () => {g('text').innerHTML = 'KAFIF FOUND YOU';g('buttons').innerHTML = '<button onclick="play()">TRY AGAIN</button>';g('img').src = 'img/kafif.png'}][Math.random() >= 0.999 ? 1 : 0], 3000);
                } else {
                    g('text').innerHTML = '';
                    g('buttons').innerHTML = '';
                    g('img').src = 'img/0exploring.png';
                    if(Math.random() >= 0.95) {
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
                    setTimeout(esc('!'), 3000)
                } else if(Math.random() >= 0.90) {
                    setTimeout(lights, 3000);
                } else {
                    setTimeout(split, 3000);
                };
            };
        };
    } else if(cat == -1) {
        g('text').innerHTML = ['WHY', 'YOU NEED TO RUN AT LEAST IN 0.25 SECONDS', "KAFIF WAS WAITING FOR YOU, SORRY I DIDN'T SAY ABOUT IT :D", 'PRO TIP: DO 500 CLICKS IN 60 SECONDS', 'YOU WERE CLICKING 1234567 TIMES JUST TO DIE?', "YOU'RE PARTYFIF NOW"][id];
        g('buttons').innerHTML = '<button onclick="play()">TRY AGAIN</button>';
        g('img').src = 'img/kafif.png';
    } else if(cat == 2) {
        level = id;
        if(id == '1') {
            g('text').innerHTML = '';
            g('buttons').innerHTML = '';
            g('img').src = 'img/1exploring.png';
        } else if(id == '!') {
            time = Date.now();
            clicks = 0;
            g('text').innerHTML = 'RUN! 500 CLICK(S) LEFT';
            g('buttons').innerHTML = '<button onclick="runnnnnnnnnnnnnn()">RUN</button>';
            g('img').src = 'img/1escape.png';
        } else if(id == '2^63-1') {
            g('text').innerHTML = 'OKAY JUST GO UP. 1234567 STEP(S) LEFT';
            g('buttons').innerHTML = '<button onclick="goup()">NEXT STEP</button>';
            g('img').src = 'img/2^63-1step1.png';
        } else if(id == 'Fun') {
            g('text').innerHTML = '';
            g('buttons').innerHTML = '';
            g('img').src = 'img/funexploring.png';
            setTimeout(split, 3000);
        } else if(id == '3999') {
            g('text').innerHTML = 'GAME IS UNFINISHED SO YOU BEAT IT';
            g('buttons').innerHTML = '<button onclick="play()">NEW GAME</button>';
            g('img').src = 'img/3999.png';
        };
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
        g('buttons').innerHTML = '<button onclick="action(2, \'1\')">GO TO LEVEL 1</button> <button onclick="action(-1, 0)">GO TO KAFIF</button>';
        g('img').src = 'img/0escape.png';
    } else if(level == '1' && newlvl == '!') {
        g('text').innerHTML = 'YOU FOUND ESCAPE TO LEVEL 2 OR... WHY IS BLOOD HERE?';
        g('buttons').innerHTML = '<button onclick="action(2, \'!\')">GO TO LEVEL 2</button> <button onclick="action(-1, 2)">RUN</button>';
        g('img').src = 'img/1escape.png';
    } else if(level == '!' && (newlvl == '2^63-1' | newlvl == 'Fun')) {
        g('text').innerHTML = 'YOU ESCAPED! (did you use autoclicker?)';
        g('buttons').innerHTML = `<button onclick="action(2, \'${newlvl}\')">GO TO LEVEL ???</button> <button onclick="action(-1, 0)">LET KAFIF CATCH YOU</button>`;
        g('img').src = 'img/!escape.png';
    } else if(level == '2^63-1' && newlvl == '3999') {
        g('text').innerHTML = 'WAIT HOW';
        g('buttons').innerHTML = '<button onclick="action(2, \'3999\')">&%!$#@?</button> <button onclick="action(-1, 4)">JUMP DOWN</button>';
        g('img').src = 'img/2^63-1escape.png';
    } else if(level == 'Fun' && newlvl == '3999') {
        g('text').innerHTML = 'YOU ESCAPED FUN :D';
        g('buttons').innerHTML = '<button onclick="action(2, \'3999\')">GO TO LEVEL undefined</button> <button onclick="action(-1, 5)">LET PARTYFIF TOUCH YOU</button>';
        g('img').src = 'img/funescape.png';
    };
};
function runnnnnnnnnnnnnn() {
    if(level == '1') {
        if(Date.now() - time > 350) {
            action(-1, 1);
        } else {
            g('text').innerHTML = 'YOU RUN FROM KAFIF';
            g('buttons').innerHTML = '';
            g('img').src = 'img/1exploring.png';
            setTimeout(split, 3000);
        };
    } else if(level == 'Fun') {
        if(Date.now() - time > 350) {
            action(-1, 5);
        } else {
            g('text').innerHTML = 'YOU RUN FROM PARTYFIF';
            g('buttons').innerHTML = '';
            g('img').src = 'img/funexploring.png';
            setTimeout(split, 3000);
        };
    } else if(level == '!') {
        if(clicks == 499) {
            if(Date.now() - time <= 60000) {
                esc(['2^63-1', 'Fun'][Math.floor(Math.random() * 1.999)]);
            } else {
                action(-1, 3);
            };
        } else {
            clicks += 1
            g('text').innerHTML = `RUN! ${500 - clicks} CLICK(S) LEFT`;
            g('buttons').innerHTML = '<button onclick="runnnnnnnnnnnnnn()">RUN</button>';
            g('img').src = `img/!run${clicks%4+1}.png`;
        };
    };
};
function goup() {
    clicks += 1;
    if(clicks == 1234567) {
        esc('3999');
    } else {
        g('text').innerHTML = `OKAY JUST GO UP. ${1234567 - clicks} STEP(S) LEFT`;
        g('img').src = `img/2^63-1step${clicks%2+1}.png`;
    };
};