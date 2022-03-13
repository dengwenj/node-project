import type { Context, Next } from "koa";

class SayController {
  async create(ctx: Context, next: Next) {
    ctx.body = '发表动态成功~'
  }
}

export default new SayController()
