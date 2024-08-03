export async function onRequest(event) {
  const url = '/Good-words.txt';
  const response = await env.ASSETS.fetch(url)
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
      'Access-Control-Allow-Origin': '*', // 允许所有来源的跨域请求
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // 允许的HTTP方法
      'Access-Control-Allow-Headers': 'Content-Type, Authorization' // 允许的请求头
    },
  });
}
