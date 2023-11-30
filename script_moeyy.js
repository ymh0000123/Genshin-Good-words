//原神好句api by没用的小废鼠
fetch('https://github.moeyy.xyz/https://raw.githubusercontent.com/ymh0000123/Genshin-Good-words/main/Good-words.txt')
.then(response => response.text())
.then(data => {
  const lines = data.split('\n');
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  document.getElementById('ys').innerText = randomLine;
})
.catch(error => {
  console.error('Error fetching ys:', error);
});