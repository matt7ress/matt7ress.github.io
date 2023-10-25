window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const inp = document.getElementById('inp');
  ctx.font = "20px 'PoppinsMedium'";
  inp.oninput = () => {
    ctx.reset();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#D7D7EB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#101010';
    var metrics = ctx.measureText(inp.value);
    var textWidth = metrics.width;
    var scalex = (canvas.width / textWidth) / 3;
    var scaley = (canvas.height / 10);
    var xpos = (canvas.width / scalex) / 3;
    var ypos = (canvas.height / (scaley * 1.35));
    ctx.scale(scalex, scaley);
    ctx.fillText(inp.value, xpos, ypos);
  };
};