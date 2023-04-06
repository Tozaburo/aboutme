setInterval(() => {
  mouse();
}, 100);

function mouse(){
  var sec = new Date().getSeconds();
  var item = (Math.floor(sec * 4))%14;
  var mouse = ['col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'se-resize', 'sw-resize', 'nw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize'];
  document.getElementById("change").style.cursor = mouse[item];
}

