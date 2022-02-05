const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

export const generateColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }
  return color;
};

export default () => {
  document.getElementById('color').textContent = generateColor();
  document.body.style.backgroundColor = document.getElementById('color').textContent;
};
