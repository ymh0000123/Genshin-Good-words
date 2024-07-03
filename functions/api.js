export async function onRequest(event) {
  const url = 'https://unpkg.com/genshin-good-words/Good-words.txt';
  const response = await fetch(url);
  const text = await response.text();

  // Split the text into lines
  const lines = text.split('\n').filter(line => line.trim() !== '');

  // Get a random line
  const randomLine = lines[Math.floor(Math.random() * lines.length)];

  // Prepare JSON response
  const jsonResponse = {
    quote: randomLine,
  };

  return new Response(JSON.stringify(jsonResponse), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
