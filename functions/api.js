addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 定义从 URL 获取内容的地址
  const url = 'https://genshin-good-words.pages.dev/Good-words.txt'

  // 发起请求获取内容
  const response = await fetch(url)
  const text = await response.text()

  // 将内容拆分为行
  const lines = text.split('\n').filter(line => line.trim() !== '')

  // 随机选择一行
  const randomIndex = Math.floor(Math.random() * lines.length)
  const randomLine = lines[randomIndex]

  // 构建 JSON 响应
  const jsonResponse = {
    goodWord: randomLine
  }

  // 返回 JSON 响应
  return new Response(JSON.stringify(jsonResponse), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
