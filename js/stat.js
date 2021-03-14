'use strict';


window.renderStatistics = function(ctx, players, times) {

//рисуем овал
ctx.save();
ctx.scale(2, 1);
ctx.beginPath();
ctx.arc(175, 110, 100, 0, Math.PI*2, false);
ctx.restore();
ctx.fillStyle = '#8ED6FF';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

// console.log(players, times);

// for (var i=0; i< players.length; i++) {
//   ctx.fillText(players[i], 200, 60);
//   ctx.fillRect(200, 65, 280, 10);
// }




  //рисуем столбики статичные
  ctx.fillStyle='blue';
  ctx.fillText('Вы', 200, 60);
  ctx.fillRect(200, 65, 280, 10);

  ctx.fillStyle='black';
  ctx.fillText('Ирина', 200, 90);
  ctx.fillRect(200, 95, 280, 10);

  ctx.fillStyle='black';
  ctx.fillText('Варвара', 200, 120);
  ctx.fillRect(200, 125, 280, 10);

  ctx.fillStyle='black';
  ctx.fillText('Алёна', 200, 150);
  ctx.fillRect(200, 155, 280, 10);
};
