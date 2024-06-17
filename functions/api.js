addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const lines = await fetchRandomLine();
  const randomLine = getRandomLine(lines);

  return new Response(randomLine, {
    headers: { 'content-type': 'text/plain' },
  });
}

async function fetchRandomLine() {
  const response = await fetch('https://genshin-good-words.pages.dev/Good-words.txt');
  const text = await response.text();
  return text.split('\n').filter(line => line.trim() !== '');
}

function getRandomLine(lines) {
  const randomIndex = Math.floor(Math.random() * lines.length);
  return lines[randomIndex];
}
