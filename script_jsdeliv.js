//原神好句api by没用的小废鼠
fetch('https://cdn.jsdelivr.net/gh/ymh0000123/Genshin-Good-words@master/Good-words.txt')
.then(response => response.text())
.then(data => {
  const lines = data.split('\n');
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  document.getElementById('ys').innerText = randomLine;
})
.catch(error => {
  console.error('Error fetching ys:', error);
});