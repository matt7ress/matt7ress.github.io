var ats = [['none', 'base1', 'base2', 'base3', 'base4', 'base5', 'base6', 'base7', 'base8', 'base9', 'base10', 'base11', 'base12', 'base13', 'base14', 'base15', 'base16', 'base17'],
           ['none', 'eyes1l', 'eyes1r', 'eyes2l', 'eyes2r', 'dot', 'eyes4', 'eyes5l', 'eyes5r', 'eyes6', 'shortline', 'eyes7', 'eyes8', 'eyes9l', 'eyes9r', 'eyes10', 'eyes11', 'eyes12', 'eyes13', 'eyes14'],
           ['none', 'mouth1', 'mouth2', 'mouth3', 'mouth4', 'mouth5', 'mouth6', 'mouth7', 'mouth8', 'shortline', 'mouth10', 'dot', 'mouth11', 'mouth12', 'mouth13', 'mouth14', 'mouth15', 'mouth16', 'mouth17', 'mouth18'],
           ['none', 'brows1l', 'brows1r', 'brows2l', 'brows2r', 'brows3l', 'brows3r', 'brows4', 'shortline', 'brows5l', 'brows5r'],
           ['none', 'sweat1', 'sweat2', 'sweat3', 'sweat4'],
           ['none', 'blush'],
           ['none', 'QM', 'sleep', 'cry', 'sunglass', 'think', 'upvote'],
           ['none', 'nose1']
          ],
    ge = (id) => document.getElementById(id),
    rangeincr = 0,
    code = '0;1;4:0:3;4:3:3;2:1:5;;;;1:4:1;;;;'.split(';'),
    e_base = 1,
    e_eyes = [[4, 0, 3], [4, 3, 3]],
    e_mouth = [2, 1, 5],
    e_brows = [[0, 0, 0], [0, 0, 0]],
    e_sweat = [1, 4, 1],
    e_blush = [[0, 0, 4], [0, 6, 4]],
    e_QM = [0, 4, 0],
    e_nose = [0, 3.5, 4.5],
    /** @type {CanvasRenderingContext2D} */
    ctx = ge('canv').getContext('2d');
function render() {
    ctx.clearRect(0, 0, 128, 128);
    ctx.drawImage(ge(ats[0][e_base]), 0, 0);
    ctx.drawImage(ge(ats[7][e_nose[0]]), (e_nose[1])*(16/(7*rangeincr+1)), (e_nose[2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[5][e_blush[0][0]]), (e_blush[0][1])*(16/(7*rangeincr+1)), (e_blush[0][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[5][e_blush[1][0]]), (e_blush[1][1])*(16/(7*rangeincr+1)), (e_blush[1][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[1][e_eyes[0][0]]), (e_eyes[0][1])*(16/(7*rangeincr+1)), (e_eyes[0][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[1][e_eyes[1][0]]), (e_eyes[1][1])*(16/(7*rangeincr+1)), (e_eyes[1][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[4][e_sweat[0]]), (e_sweat[1])*(16/(7*rangeincr+1)), (e_sweat[2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[2][e_mouth[0]]), (e_mouth[1])*(16/(7*rangeincr+1)), (e_mouth[2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[3][e_brows[0][0]]), (e_brows[0][1])*(16/(7*rangeincr+1)), (e_brows[0][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[3][e_brows[1][0]]), (e_brows[1][1])*(16/(7*rangeincr+1)), (e_brows[1][2])*(16/(7*rangeincr+1)));
    ctx.drawImage(ge(ats[6][e_QM[0]]), (e_QM[1])*(16/(7*rangeincr+1)), (e_QM[2])*(16/(7*rangeincr+1)));
    ge('img').src = ge('canv').toDataURL('image/png');
    save();
};
function setBase(base2set) {
    e_base = base2set;
    render();
};
function setEyes(eye, side) {
    e_eyes = side ? [e_eyes[0], [eye, parseFloat(ge('righteyex').value), parseFloat(ge('righteyey').value)]] : [[eye, parseFloat(ge('lefteyex').value), parseFloat(ge('lefteyey').value)], e_eyes[1]];
    render();
};
function incrange(cb) {
    rangeincr = cb.checked?1:0;
    if(cb.checked) {
        ge('lefteyex').min = -63;
        ge('lefteyey').min = -63;
        ge('lefteyex').max = 63;
        ge('lefteyey').max = 63;
        ge('lefteyex').value = Math.min(Math.max(parseFloat(ge('lefteyex').value)*8, -63), 63);
        ge('lefteyey').value = Math.min(Math.max(parseFloat(ge('lefteyey').value)*8, -63), 63);
        e_eyes[0][1] = ge('lefteyex').value;
        e_eyes[0][2] = ge('lefteyey').value;
        ge('righteyex').min = -63;
        ge('righteyey').min = -63;
        ge('righteyex').max = 63;
        ge('righteyey').max = 63;
        ge('righteyex').value = Math.min(Math.max(parseFloat(ge('righteyex').value)*8, -63), 63);
        ge('righteyey').value = Math.min(Math.max(parseFloat(ge('righteyey').value)*8, -63), 63);
        e_eyes[1][1] = ge('righteyex').value;
        e_eyes[1][2] = ge('righteyey').value;
        ge('mouthx').min = -63;
        ge('mouthy').min = -63;
        ge('mouthx').max = 63;
        ge('mouthy').max = 63;
        ge('mouthx').value = Math.min(Math.max(parseFloat(ge('mouthx').value)*8, -63), 63);
        ge('mouthy').value = Math.min(Math.max(parseFloat(ge('mouthy').value)*8, -63), 63);
        e_mouth[1] = ge('mouthx').value;
        e_mouth[2] = ge('mouthy').value;
        ge('leftbrowx').min = -63;
        ge('leftbrowy').min = -63;
        ge('leftbrowx').max = 63;
        ge('leftbrowy').max = 63;
        ge('leftbrowx').value = Math.min(Math.max(parseFloat(ge('leftbrowx').value)*8, -63), 63);
        ge('leftbrowy').value = Math.min(Math.max(parseFloat(ge('leftbrowy').value)*8, -63), 63);
        e_brows[0][1] = ge('leftbrowx').value;
        e_brows[0][2] = ge('leftbrowy').value;
        ge('rightbrowx').min = -63;
        ge('rightbrowy').min = -63;
        ge('rightbrowx').max = 63;
        ge('rightbrowy').max = 63;
        ge('rightbrowx').value = Math.min(Math.max(parseFloat(ge('rightbrowx').value)*8, -63), 63);
        ge('rightbrowy').value = Math.min(Math.max(parseFloat(ge('rightbrowy').value)*8, -63), 63);
        e_brows[1][1] = ge('rightbrowx').value;
        e_brows[1][2] = ge('rightbrowy').value;
        ge('sweatx').min = -63;
        ge('sweaty').min = -63;
        ge('sweatx').max = 63;
        ge('sweaty').max = 63;
        ge('sweatx').value = Math.min(Math.max(parseFloat(ge('sweatx').value)*8, -63), 63);
        ge('sweaty').value = Math.min(Math.max(parseFloat(ge('sweaty').value)*8, -63), 63);
        e_sweat[1] = ge('sweatx').value;
        e_sweat[2] = ge('sweaty').value;
        ge('leftblushx').min = -63;
        ge('leftblushy').min = -63;
        ge('leftblushx').max = 63;
        ge('leftblushy').max = 63;
        ge('leftblushx').value = Math.min(Math.max(parseFloat(ge('leftblushx').value)*8, -63), 63);
        ge('leftblushy').value = Math.min(Math.max(parseFloat(ge('leftblushy').value)*8, -63), 63);
        e_blush[0][1] = ge('leftblushx').value;
        e_blush[0][2] = ge('leftblushy').value;
        ge('rightblushx').min = -63;
        ge('rightblushy').min = -63;
        ge('rightblushx').max = 63;
        ge('rightblushy').max = 63;
        ge('rightblushx').value = Math.min(Math.max(parseFloat(ge('rightblushx').value)*8, -63), 63);
        ge('rightblushy').value = Math.min(Math.max(parseFloat(ge('rightblushy').value)*8, -63), 63);
        e_blush[1][1] = ge('rightblushx').value;
        e_blush[1][2] = ge('rightblushy').value;
        ge('QMx').min = -63;
        ge('QMy').min = -63;
        ge('QMx').max = 63;
        ge('QMy').max = 63;
        ge('QMx').value = Math.min(Math.max(Math.round(parseFloat(ge('QMx').value)*8), -7), 7);
        ge('QMy').value = Math.min(Math.max(Math.round(parseFloat(ge('QMy').value)*8), -7), 7);
        e_QM[1] = ge('QMx').value;
        e_QM[2] = ge('QMy').value;
        ge('nosex').min = -63;
        ge('nosey').min = -63;
        ge('nosex').max = 63;
        ge('nosey').max = 63;
        ge('nosex').value = Math.min(Math.max(Math.round(parseFloat(ge('nosex').value)*8), -7), 7);
        ge('nosey').value = Math.min(Math.max(Math.round(parseFloat(ge('nosey').value)*8), -7), 7);
        e_nose[1] = ge('nosex').value;
        e_nose[2] = ge('nosey').value;
    } else {
        ge('lefteyex').min = -7;
        ge('lefteyey').min = -7;
        ge('lefteyex').max = 7;
        ge('lefteyey').max = 7;
        ge('lefteyex').value = Math.min(Math.max(Math.round(parseFloat(ge('lefteyex').value)/8), -7), 7);
        ge('lefteyey').value = Math.min(Math.max(Math.round(parseFloat(ge('lefteyey').value)/8), -7), 7);
        e_eyes[0][1] = ge('lefteyex').value;
        e_eyes[0][2] = ge('lefteyey').value;
        ge('righteyex').min = -7;
        ge('righteyey').min = -7;
        ge('righteyex').max = 7;
        ge('righteyey').max = 7;
        ge('righteyex').value = Math.min(Math.max(Math.round(parseFloat(ge('righteyex').value)/8), -7), 7);
        ge('righteyey').value = Math.min(Math.max(Math.round(parseFloat(ge('righteyey').value)/8), -7), 7);
        e_eyes[1][1] = ge('righteyex').value;
        e_eyes[1][2] = ge('righteyey').value;
        ge('mouthx').min = -7;
        ge('mouthy').min = -7;
        ge('mouthx').max = 7;
        ge('mouthy').max = 7;
        ge('mouthx').value = Math.min(Math.max(Math.round(parseFloat(ge('mouthx').value)/8), -7), 7);
        ge('mouthy').value = Math.min(Math.max(Math.round(parseFloat(ge('mouthy').value)/8), -7), 7);
        e_mouth[1] = ge('mouthx').value;
        e_mouth[2] = ge('mouthy').value;
        ge('leftbrowx').min = -7;
        ge('leftbrowy').min = -7;
        ge('leftbrowx').max = 7;
        ge('leftbrowy').max = 7;
        ge('leftbrowx').value = Math.min(Math.max(Math.round(parseFloat(ge('leftbrowx').value)/8), -7), 7);
        ge('leftbrowy').value = Math.min(Math.max(Math.round(parseFloat(ge('leftbrowy').value)/8), -7), 7);
        e_brows[0][1] = ge('leftbrowx').value;
        e_brows[0][2] = ge('leftbrowy').value;
        ge('rightbrowx').min = -7;
        ge('rightbrowy').min = -7;
        ge('rightbrowx').max = 7;
        ge('rightbrowy').max = 7;
        ge('rightbrowx').value = Math.min(Math.max(Math.round(parseFloat(ge('rightbrowx').value)/8), -7), 7);
        ge('rightbrowy').value = Math.min(Math.max(Math.round(parseFloat(ge('rightbrowy').value)/8), -7), 7);
        e_brows[1][1] = ge('rightbrowx').value;
        e_brows[1][2] = ge('rightbrowy').value;
        ge('sweatx').min = -7;
        ge('sweaty').min = -7;
        ge('sweatx').max = 7;
        ge('sweaty').max = 7;
        ge('sweatx').value = Math.min(Math.max(Math.round(parseFloat(ge('sweatx').value)/8), -7), 7);
        ge('sweaty').value = Math.min(Math.max(Math.round(parseFloat(ge('sweaty').value)/8), -7), 7);
        e_sweat[1] = ge('sweatx').value;
        e_sweat[2] = ge('sweaty').value;
        ge('leftblushx').min = -7;
        ge('leftblushy').min = -7;
        ge('leftblushx').max = 7;
        ge('leftblushy').max = 7;
        ge('leftblushx').value = Math.min(Math.max(Math.round(parseFloat(ge('leftblushx').value)/8), -7), 7);
        ge('leftblushy').value = Math.min(Math.max(Math.round(parseFloat(ge('leftblushy').value)/8), -7), 7);
        e_blush[0][1] = ge('leftblushx').value;
        e_blush[0][2] = ge('leftblushy').value;
        ge('rightblushx').min = -7;
        ge('rightblushy').min = -7;
        ge('rightblushx').max = 7;
        ge('rightblushy').max = 7;
        ge('rightblushx').value = Math.min(Math.max(Math.round(parseFloat(ge('rightblushx').value)/8), -7), 7);
        ge('rightblushy').value = Math.min(Math.max(Math.round(parseFloat(ge('rightblushy').value)/8), -7), 7);
        e_blush[1][1] = ge('rightblushx').value;
        e_blush[1][2] = ge('rightblushy').value;
        ge('QMx').min = -7;
        ge('QMy').min = -7;
        ge('QMx').max = 7;
        ge('QMy').max = 7;
        ge('QMx').value = Math.min(Math.max(Math.round(parseFloat(ge('QMx').value)/8), -7), 7);
        ge('QMy').value = Math.min(Math.max(Math.round(parseFloat(ge('QMy').value)/8), -7), 7);
        e_QM[1] = ge('QMx').value;
        e_QM[2] = ge('QMy').value;
        ge('nosex').min = -7;
        ge('nosey').min = -7;
        ge('nosex').max = 7;
        ge('nosey').max = 7;
        ge('nosex').value = Math.min(Math.max(Math.round(parseFloat(ge('nosex').value)/8), -7), 7);
        ge('nosey').value = Math.min(Math.max(Math.round(parseFloat(ge('nosey').value)/8), -7), 7);
        e_nose[1] = ge('nosex').value;
        e_nose[2] = ge('nosey').value;
    };
    render();
};
function setMouth(nm) {
    e_mouth = [nm, parseFloat(ge('mouthx').value), parseFloat(ge('mouthy').value)];
    render();
};
function setBrows(brow, side) {
    e_brows = side ? [e_brows[0], [brow, parseFloat(ge('rightbrowx').value), parseFloat(ge('rightbrowy').value)]] : [[brow, parseFloat(ge('leftbrowx').value), parseFloat(ge('leftbrowy').value)], e_brows[1]];
    render();
};
function setSweat(sw) {
    e_sweat = [sw, parseFloat(ge('sweatx').value), parseFloat(ge('sweaty').value)];
    render();
};
function setBlush(blush, side) {
    e_blush = side ? [e_blush[0], [blush, parseFloat(ge('rightblushx').value), parseFloat(ge('rightblushy').value)]] : [[blush, parseFloat(ge('leftblushx').value), parseFloat(ge('leftblushy').value)], e_blush[1]];
    render();
};
function setQM(daqm) {
    e_QM = [daqm, parseFloat(ge('QMx').value), parseFloat(ge('QMy').value)];
    render();
};
function setNose(danose) {
    e_nose = [danose, parseFloat(ge('nosex').value), parseFloat(ge('nosey').value)];
    render();
};
function load() {
    code = ge('savecode').value.split(';');
    rangeincr = parseFloat(code[0]);
    ge('incRange').checked = Boolean(rangeincr);
    e_base = parseFloat(code[1]);
    var getprop = (n) => code[n] != '' ? [parseFloat(code[n].split(':')[0]), parseFloat(code[n].split(':')[1]), parseFloat(code[n].split(':')[2])] : [0, 0, 0];
    e_eyes = [getprop(2), getprop(3)];
    ge('lefteyesel').value = getprop(2)[0];
    getprop(2)[0]?ge('lefteyex').value = getprop(2)[1]:0;
    getprop(2)[0]?ge('lefteyey').value = getprop(2)[2]:0;
    ge('righteyesel').value = getprop(3)[0];
    getprop(3)[0]?ge('righteyex').value = getprop(3)[1]:0;
    getprop(3)[0]?ge('righteyey').value = getprop(3)[2]:0;
    e_mouth = getprop(4);
    ge('mouthsel').value = getprop(4)[0];
    getprop(4)[0]?ge('mouthx').value = getprop(4)[1]:0;
    getprop(4)[0]?ge('mouthy').value = getprop(4)[2]:0;
    e_nose = getprop(5);
    ge('nosesel').value = getprop(5)[0];
    getprop(5)[0]?ge('nosex').value = getprop(5)[1]:0;
    getprop(5)[0]?ge('nosey').value = getprop(5)[2]:0;
    e_brows = [getprop(6), getprop(7)];
    ge('leftbrowsel').value = getprop(6)[0];
    getprop(6)[0]?ge('leftbrowx').value = getprop(6)[1]:0;
    getprop(6)[0]?ge('leftbrowy').value = getprop(6)[2]:0;
    ge('rightbrowsel').value = getprop(7)[0];
    getprop(7)[0]?ge('rightbrowx').value = getprop(7)[1]:0;
    getprop(7)[0]?ge('rightbrowy').value = getprop(7)[2]:0;
    e_sweat = getprop(8);
    ge('sweatsel').value = getprop(8)[0];
    getprop(8)[0]?ge('sweatx').value = getprop(8)[1]:0;
    getprop(8)[0]?ge('sweaty').value = getprop(8)[2]:0;
    e_blush = [getprop(9), getprop(10)];
    ge('leftblushsel').value = getprop(9)[0];
    getprop(9)[0]?ge('leftblushx').value = getprop(9)[1]:0;
    getprop(9)[0]?ge('leftblushy').value = getprop(9)[2]:0;
    ge('rightblushsel').value = getprop(10)[0];
    getprop(10)[0]?ge('rightblushx').value = getprop(10)[1]:0;
    getprop(10)[0]?ge('rightblushy').value = getprop(10)[2]:0;
    e_QM = getprop(11);
    ge('extrassel').value = getprop(11)[0];
    getprop(11)[0]?ge('QMx').value = getprop(11)[1]:0;
    getprop(11)[0]?ge('QMy').value = getprop(11)[2]:0;
    render();
};
function save() {
    var j = (x) => x[0] == 0 ? [] : x.join(':');
    code = [rangeincr, e_base, j(e_eyes[0]), j(e_eyes[1]), j(e_mouth), j(e_nose), j(e_brows[0]), j(e_brows[1]), j(e_sweat), j(e_blush[0]), j(e_blush[1]), j(e_QM)].join(';');
    ge('savecode').value = code;
};
function randomVal(el) {
    if(!el) {
        var val = Math.floor(Math.random() * ats[0].length);
        ge('basesel').value = val;
        setBase(val);
        val = Math.floor(Math.random() * ats[1].length);
        ge('lefteyesel').value = val;
        setEyes(val, 0);
        val = Math.floor(Math.random() * ats[1].length);
        ge('righteyesel').value = val;
        setEyes(val, 1);
        val = Math.floor(Math.random() * ats[2].length);
        ge('mouthsel').value = val;
        setMouth(val);
        val = Math.floor(Math.random() * ats[7].length);
        ge('nosesel').value = val;
        setNose(val);
        val = Math.floor(Math.random() * ats[3].length);
        ge('leftbrowsel').value = val;
        setBrows(val, 0);
        val = Math.floor(Math.random() * ats[3].length);
        ge('rightbrowsel').value = val;
        setBrows(val, 1);
        val = Math.floor(Math.random() * ats[4].length);
        ge('sweatsel').value = val;
        setSweat(val);
        val = Math.floor(Math.random() * ats[5].length);
        ge('leftblushsel').value = val;
        setBlush(val, 0);
        val = Math.floor(Math.random() * ats[5].length);
        ge('rightblushsel').value = val;
        setBlush(val, 1);
        val = Math.floor(Math.random() * ats[6].length);
        ge('extrassel').value = val;
        setQM(val);
    } else {
        var val = Math.floor(Math.random() * ats[el[1]].length);
        ge(`${el[0]}sel`).value = val;
        el[2](val, el[3]);
    };
    render();
};
function randomPos(el) {
    var minpos = parseFloat(ge('minrandpos').value),
        maxpos = parseFloat(ge('maxrandpos').value)+1,
        grn = () => Math.floor(Math.random()*(maxpos-minpos)+minpos)
        val = grn();
    if(!el) {
        ge('lefteyex').value = val;
        val = grn();
        ge('lefteyey').value = val;
        setEyes(e_eyes[0][0], 0);
        val = grn();
        ge('righteyex').value = val;
        val = grn();
        ge('righteyey').value = val;
        setEyes(e_eyes[1][0], 1);
        val = grn();
        ge('mouthx').value = val;
        val = grn();
        ge('mouthy').value = val;
        setMouth(e_mouth[0]);
        val = grn();
        ge('nosex').value = val;
        val = grn();
        ge('nosey').value = val;
        setNose(e_nose[0]);
        val = grn();
        ge('leftbrowx').value = val;
        val = grn();
        ge('leftbrowy').value = val;
        setBrows(e_brows[0][0], 0);
        val = grn();
        ge('rightbrowx').value = val;
        val = grn();
        ge('rightbrowy').value = val;
        setBrows(e_brows[1][0], 1);
        val = grn();
        ge('sweatx').value = val;
        val = grn();
        ge('sweaty').value = val;
        setSweat(e_sweat[0]);
        val = grn();
        ge('leftblushx').value = val;
        val = grn();
        ge('leftblushy').value = val;
        setBlush(e_blush[0][0], 0);
        val = grn();
        ge('rightblushx').value = val;
        val = grn();
        ge('rightblushy').value = val;
        setBlush(e_blush[1][0], 1);
        val = grn();
        ge('QMx').value = val;
        val = grn();
        ge('QMy').value = val;
        setQM(e_QM[0]);
    } else {
        ge(`${el[0]}x`).value = val;
        val = grn();
        ge(`${el[0]}y`).value = val;
        el[1](el[2][0], el[3]);
    };
    render();
};
function reset() {
    ge('savecode').value = '0;1;4:0:3;4:3:3;2:1:5;;;;1:4:1;;;';
    load();
};