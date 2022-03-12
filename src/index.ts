import app, { env } from './app'
import './database'

app.listen(env.APP_PORT, () => {
  console.log(`服务器启动 ${env.APP_PORT} 端口成功~`)
})
