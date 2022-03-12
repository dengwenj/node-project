import Koa from 'koa'

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hh'
})

app.listen(1120, () => {
  console.log('服务器启动成功~')
})

interface HH {
  a: string
}

const a: HH = {
  a: ''
}
console.log(a)
