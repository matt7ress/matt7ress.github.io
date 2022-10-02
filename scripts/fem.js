// @@@200@@@text/javascript@@@
var ats = [['base1', 'base2', 'base3', 'base4'],
           ['eyes1l', 'eyes1r'],
           ['mouth0', 'mouth1', 'mouth2']
          ],
    ge = (id) => document.getElementById(id),
    rangeincr = 0,
    e_base = 0,
    e_eyes = [[0, 1, 2], [1, 5, 2]],
    e_mouth = [2, 2, 5],
    e_brows = [],
    /** @type {CanvasRenderingContext2D} */
    ctx = ge('canv').getContext('2d');
function render() {
    ctx.clearRect(0, 0, 128, 128);
    ctx.drawImage(ge(ats[0][e_base]), 0, 0);
    ctx.drawImage(ge(ats[1][e_eyes[0][0]]), (e_eyes[0][1])*(16/(7*rangeincr+1)), (e_eyes[0][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[1][e_eyes[1][0]]), (e_eyes[1][1])*(16/(7*rangeincr+1)), (e_eyes[1][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[2][e_mouth[0]]), (e_mouth[1])*(16/(7*rangeincr+1)), (e_mouth[2])*(16/(7*rangeincr+1)));
};
function setBase(base2set) {
    e_base = base2set;
    render();
};
function setEyes(eye, side) {
    e_eyes = side ? [e_eyes[0], [eye, Number(ge('righteyex').value), Number(ge('righteyey').value)], rangeincr] : [[eye, Number(ge('lefteyex').value), Number(ge('lefteyey').value)], e_eyes[1], rangeincr];
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
    };
    render();
};
function setMouth(nm) {
    e_mouth = [nm, Number(ge('mouthx').value), Number(ge('mouthy').value)];
    render();
};