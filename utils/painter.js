function scale_points(points, scale, offset) {
for (let i = 0; i < points.length; i++) {
    points[i].x = points[i].x * scale + offset.x
    points[i].y = points[i].y * scale + offset.y
  }
  return points
}

function draw_points(points, cvs, ctx) {
  ctx.clearRect(0, 0, cvs.width, cvs.height)
  ctx.fillStyle ='white'
  for (let i = 0; i < points.length; i++) {
    ctx.beginPath()
    ctx.arc(points[i].x, points[i].y, 20, Math.PI*2, 0, true)
    ctx.fill()
  }
}

module.exports = {
  scale_points: scale_points,
  draw_points: draw_points
}