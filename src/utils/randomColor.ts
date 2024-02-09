export function randomColor() {
  const randomNumber = Math.floor(Math.random() * 4);
  const colors = [
    "lightyellow",
    "redorange",
    "lilac",
    "greencyan",
    "cyanlight",
  ];
  return colors[randomNumber];
}
