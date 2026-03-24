import cors from 'cors'

const allowedOrigins = [
  "http://localhost:3000"
]

export const corsConfigure = () => {
  return cors({
    // 允许的请求源
    origin(requestOrigin, callback) {
      if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
        callback(null, true) // 允许通过
      } else {
        callback(new Error("not allowed by cors"))
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
    exposedHeaders: ["Content-Range"],
    credentials: true, // 很重要：启用 cookies
    preflightContinue: false, // 将此跨域预检响应传递给下一个处理程序
    maxAge: 600, // 预检缓存存活时间 10mins
    optionsSuccessStatus: 204, // 通过预检的状态码

  })
}