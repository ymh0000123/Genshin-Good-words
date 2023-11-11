// 使用fetch函数获取文本文件内容
fetch('https://github.moeyy.xyz/https://raw.githubusercontent.com/ymh0000123/Genshin-Impact-Good-words-and-sentences/main/Good-words.txt')
.then(response => response.text())
.then(data => {
  // 将文本内容按行分割成数组
  const lines = data.split('\n');
  // 随机选择一行并显示在页面上
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  document.getElementById('ys').innerText = randomLine;
})
.catch(error => {
  console.error('Error fetching ys:', error);
});