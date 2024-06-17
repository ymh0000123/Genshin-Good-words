addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    // Fetch the contents of the file
    const response = await fetch('https://genshin-good-words.pages.dev/Good-words.txt')
    const text = await response.text()
  
    // Split the text into lines
    const lines = text.split('\n')
  
    // Get a random line
    const randomIndex = Math.floor(Math.random() * lines.length)
    const randomLine = lines[randomIndex]
  
    // Return the random line as a JSON object
    return new Response(JSON.stringify({ line: randomLine }), {
      headers: { 'content-type': 'application/json' },
    })
  }
  