var ats = [['base1', 'base2', 'base3', 'base4'],
           ['none', 'eyes1l', 'eyes1r', 'eyes2l', 'eyes2r', 'eyes3', 'eyes4'],
           ['none', 'mouth1', 'mouth2', 'mouth3', 'mouth4', 'mouth5', 'mouth6'],
           ['none', 'brows1l', 'brows1r', 'brows2l', 'brows2r'],
           ['none', 'sweat'],
           ['none', 'blush']
          ],
    ge = (id) => document.getElementById(id),
    rangeincr = 0,
    e_base = 0,
    e_eyes = [[1, 1, 2], [2, 5, 2]],
    e_mouth = [2, 2, 5],
    e_brows = [[0, 0, 0], [0, 0, 0]],
    e_sweat = [0, 3, 1],
    e_blush = [[0, 0, 4], [0, 6, 4]],
    /** @type {CanvasRenderingContext2D} */
    ctx = ge('canv').getContext('2d');
function render() {
    ctx.clearRect(0, 0, 128, 128);
    ctx.drawImage(ge(ats[0][e_base]), 0, 0);
    ctx.drawImage(ge(ats[4][e_sweat[0]]), (e_sweat[1])*(16/(7*rangeincr+1)), (e_sweat[2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[5][e_blush[0][0]]), (e_blush[0][1])*(16/(7*rangeincr+1)), (e_blush[0][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[5][e_blush[1][0]]), (e_blush[1][1])*(16/(7*rangeincr+1)), (e_blush[1][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[1][e_eyes[0][0]]), (e_eyes[0][1])*(16/(7*rangeincr+1)), (e_eyes[0][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[1][e_eyes[1][0]]), (e_eyes[1][1])*(16/(7*rangeincr+1)), (e_eyes[1][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[2][e_mouth[0]]), (e_mouth[1])*(16/(7*rangeincr+1)), (e_mouth[2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[3][e_brows[0][0]]), (e_brows[0][1])*(16/(7*rangeincr+1)), (e_brows[0][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[3][e_brows[1][0]]), (e_brows[1][1])*(16/(7*rangeincr+1)), (e_brows[1][2])*(16/(7*rangeincr+1)));
    ge('img').src = ge('canv').toDataURL('image/png');
};
function setBase(base2set) {
    e_base = base2set;
    render();
};
function setEyes(eye, side) {
    e_eyes = side ? [e_eyes[0], [eye, Number(ge('righteyex').value), Number(ge('righteyey').value)]] : [[eye, Number(ge('lefteyex').value), Number(ge('lefteyey').value)], e_eyes[1]];
    render();
};
function incrange(cb) {
    rangeincr = cb.checked?1:0;
    if(cb.checked) {
        ge('lefteyex').min = -127;
        ge('lefteyey').min = -127;
        ge('lefteyex').max = 127;
        ge('lefteyey').max = 127;
        ge('lefteyex').value = Math.min(Math.max(Number(ge('lefteyex').value)*8, -127), 127);
        ge('lefteyey').value = Math.min(Math.max(Number(ge('lefteyey').value)*8, -127), 127);
        e_eyes[0][1] = ge('lefteyex').value;
        e_eyes[0][2] = ge('lefteyey').value;
        ge('righteyex').min = -127;
        ge('righteyey').min = -127;
        ge('righteyex').max = 127;
        ge('righteyey').max = 127;
        ge('righteyex').value = Math.min(Math.max(Number(ge('righteyex').value)*8, -127), 127);
        ge('righteyey').value = Math.min(Math.max(Number(ge('righteyey').value)*8, -127), 127);
        e_eyes[1][1] = ge('righteyex').value;
        e_eyes[1][2] = ge('righteyey').value;
        ge('mouthx').min = -127;
        ge('mouthy').min = -127;
        ge('mouthx').max = 127;
        ge('mouthy').max = 127;
        ge('mouthx').value = Math.min(Math.max(Number(ge('mouthx').value)*8, -127), 127);
        ge('mouthy').value = Math.min(Math.max(Number(ge('mouthy').value)*8, -127), 127);
        e_mouth[1] = ge('mouthx').value;
        e_mouth[2] = ge('mouthy').value;
        ge('leftbrowx').min = -127;
        ge('leftbrowy').min = -127;
        ge('leftbrowx').max = 127;
        ge('leftbrowy').max = 127;
        ge('leftbrowx').value = Math.min(Math.max(Number(ge('leftbrowx').value)*8, -127), 127);
        ge('leftbrowy').value = Math.min(Math.max(Number(ge('leftbrowy').value)*8, -127), 127);
        e_brows[0][1] = ge('leftbrowx').value;
        e_brows[0][2] = ge('leftbrowy').value;
        ge('rightbrowx').min = -127;
        ge('rightbrowy').min = -127;
        ge('rightbrowx').max = 127;
        ge('rightbrowy').max = 127;
        ge('rightbrowx').value = Math.min(Math.max(Number(ge('rightbrowx').value)*8, -127), 127);
        ge('rightbrowy').value = Math.min(Math.max(Number(ge('rightbrowy').value)*8, -127), 127);
        e_brows[1][1] = ge('rightbrowx').value;
        e_brows[1][2] = ge('rightbrowy').value;
        ge('sweatx').min = -127;
        ge('sweaty').min = -127;
        ge('sweatx').max = 127;
        ge('sweaty').max = 127;
        ge('sweatx').value = Math.min(Math.max(Number(ge('sweatx').value)*8, -127), 127);
        ge('sweaty').value = Math.min(Math.max(Number(ge('sweaty').value)*8, -127), 127);
        e_sweat[1] = ge('sweatx').value;
        e_sweat[2] = ge('sweaty').value;
        ge('leftblushx').min = -127;
        ge('leftblushy').min = -127;
        ge('leftblushx').max = 127;
        ge('leftblushy').max = 127;
        ge('leftblushx').value = Math.min(Math.max(Number(ge('leftblushx').value)*8, -127), 127);
        ge('leftblushy').value = Math.min(Math.max(Number(ge('leftblushy').value)*8, -127), 127);
        e_blush[0][1] = ge('leftblushx').value;
        e_blush[0][2] = ge('leftblushy').value;
        ge('rightblushx').min = -127;
        ge('rightblushy').min = -127;
        ge('rightblushx').max = 127;
        ge('rightblushy').max = 127;
        ge('rightblushx').value = Math.min(Math.max(Number(ge('rightblushx').value)*8, -127), 127);
        ge('rightblushy').value = Math.min(Math.max(Number(ge('rightblushy').value)*8, -127), 127);
        e_blush[1][1] = ge('rightblushx').value;
        e_blush[1][2] = ge('rightblushy').value;
    } else {
        ge('lefteyex').min = -1;
        ge('lefteyey').min = -1;
        ge('lefteyex').max = 7;
        ge('lefteyey').max = 7;
        ge('lefteyex').value = Math.min(Math.max(Math.round(Number(ge('lefteyex').value)/8), -1), 7);
        ge('lefteyey').value = Math.min(Math.max(Math.round(Number(ge('lefteyey').value)/8), -1), 7);
        e_eyes[0][1] = ge('lefteyex').value;
        e_eyes[0][2] = ge('lefteyey').value;
        ge('righteyex').min = -1;
        ge('righteyey').min = -1;
        ge('righteyex').max = 7;
        ge('righteyey').max = 7;
        ge('righteyex').value = Math.min(Math.max(Math.round(Number(ge('righteyex').value)/8), -1), 7);
        ge('righteyey').value = Math.min(Math.max(Math.round(Number(ge('righteyey').value)/8), -1), 7);
        e_eyes[1][1] = ge('righteyex').value;
        e_eyes[1][2] = ge('righteyey').value;
        ge('mouthx').min = -1;
        ge('mouthy').min = -1;
        ge('mouthx').max = 7;
        ge('mouthy').max = 7;
        ge('mouthx').value = Math.min(Math.max(Math.round(Number(ge('mouthx').value)/8), -1), 7);
        ge('mouthy').value = Math.min(Math.max(Math.round(Number(ge('mouthy').value)/8), -1), 7);
        e_mouth[1] = ge('mouthx').value;
        e_mouth[2] = ge('mouthy').value;
        ge('leftbrowx').min = -1;
        ge('leftbrowy').min = -1;
        ge('leftbrowx').max = 7;
        ge('leftbrowy').max = 7;
        ge('leftbrowx').value = Math.min(Math.max(Math.round(Number(ge('leftbrowx').value)/8), -1), 7);
        ge('leftbrowy').value = Math.min(Math.max(Math.round(Number(ge('leftbrowy').value)/8), -1), 7);
        e_brows[0][1] = ge('leftbrowx').value;
        e_brows[0][2] = ge('leftbrowy').value;
        ge('rightbrowx').min = -1;
        ge('rightbrowy').min = -1;
        ge('rightbrowx').max = 7;
        ge('rightbrowy').max = 7;
        ge('rightbrowx').value = Math.min(Math.max(Math.round(Number(ge('rightbrowx').value)/8), -1), 7);
        ge('rightbrowy').value = Math.min(Math.max(Math.round(Number(ge('rightbrowy').value)/8), -1), 7);
        e_brows[1][1] = ge('rightbrowx').value;
        e_brows[1][2] = ge('rightbrowy').value;
        ge('sweatx').min = -1;
        ge('sweaty').min = -1;
        ge('sweatx').max = 7;
        ge('sweaty').max = 7;
        ge('sweatx').value = Math.min(Math.max(Math.round(Number(ge('sweatx').value)/8), -1), 7);
        ge('sweaty').value = Math.min(Math.max(Math.round(Number(ge('sweaty').value)/8), -1), 7);
        e_sweat[1] = ge('sweatx').value;
        e_sweat[2] = ge('sweaty').value;
        ge('leftblushx').min = -1;
        ge('leftblushy').min = -1;
        ge('leftblushx').max = 7;
        ge('leftblushy').max = 7;
        ge('leftblushx').value = Math.min(Math.max(Math.round(Number(ge('leftblushx').value)/8), -1), 7);
        ge('leftblushy').value = Math.min(Math.max(Math.round(Number(ge('leftblushy').value)/8), -1), 7);
        e_blush[0][1] = ge('leftblushx').value;
        e_blush[0][2] = ge('leftblushy').value;
        ge('rightblushx').min = -1;
        ge('rightblushy').min = -1;
        ge('rightblushx').max = 7;
        ge('rightblushy').max = 7;
        ge('rightblushx').value = Math.min(Math.max(Math.round(Number(ge('rightblushx').value)/8), -1), 7);
        ge('rightblushy').value = Math.min(Math.max(Math.round(Number(ge('rightblushy').value)/8), -1), 7);
        e_blush[1][1] = ge('rightblushx').value;
        e_blush[1][2] = ge('rightblushy').value;
    };
    render();
};
function setMouth(nm) {
    e_mouth = [nm, Number(ge('mouthx').value), Number(ge('mouthy').value)];
    render();
};
function setBrows(brow, side) {
    e_brows = side ? [e_brows[0], [brow, Number(ge('rightbrowx').value), Number(ge('rightbrowy').value)]] : [[brow, Number(ge('leftbrowx').value), Number(ge('leftbrowy').value)], e_brows[1]];
    render();
};
function setSweat(sw) {
    e_sweat = [sw, Number(ge('sweatx').value), Number(ge('sweaty').value)];
    render();
};
function setBlush(blush, side) {
    e_blush = side ? [e_blush[0], [blush, Number(ge('rightblushx').value), Number(ge('rightblushy').value)]] : [[blush, Number(ge('leftblushx').value), Number(ge('leftblushy').value)], e_blush[1]];
    render();
};