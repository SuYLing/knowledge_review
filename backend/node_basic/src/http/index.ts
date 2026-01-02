import http from 'node:http'
const server = http.createServer((req, res) => {
	res.writeHead(201, {
		'content-type': 'text/plain;charset=utf8',
	})
	res.end('你好 node')
})

server.listen(3000, () => {
	console.log('listen on :3000')
})

