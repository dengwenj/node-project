import { sayservice } from "../../service/say"
import { labelservice } from "../../service/label"
import { BAD_REQUEST } from "../../constants/error-types"

import type { Context, Next } from "koa"
import type { IContentJWT } from "../../middleware/user/verify/types"

class SayController {
  // 发表动态 
  // TODO 在发表动态的时候把数据什么类型的标签写上，传过来的是标签 id 在结合 标签 id 和 动态 id 把这个数据添加到 动态和标签的关系表中
  async create(ctx: IContentJWT, next: Next) {
    // 获取数据
    const { content } = ctx.request.body
    const { id } = ctx.result

    // 把数据添加到数据库里面
    const res = await sayservice.create(id, content)

    ctx.body = res
  }

  // 获取某一条动态
  async detail(ctx: Context, next: Next) {
    const { sayId } = ctx.params

    // 去数据库中拿某一条动态
    const res: any = await sayservice.getSayById(sayId)
    ctx.body = res[0]
  }

  // 获取多条动态
  async list(ctx: Context, next: Next) {
    // 判断有没有 query 参数
    if (!Object.keys(ctx.query).length) {
      const error = new Error(BAD_REQUEST)
      ctx.app.emit('error', error, ctx)
      return
    }
    
    const { offset, limit } = ctx.query
    // 去数据库拿多条动态
    const res = await sayservice.getList(offset, limit)
    ctx.body = res
  }

  // 修改动态 
  async update(ctx: Context, next: Next) {
    const { sayId } = ctx.params
    const { content } = ctx.request.body
    
    // 修改数据库里面的动态
    const res = await sayservice.update(sayId, content)
    ctx.body = res
  }

  // 删除动态
  async remove(ctx: Context, next: Next) {
    const { sayId } = ctx.params 
    // 操作数据库删除动态
    const res = await sayservice.remove(sayId)
    ctx.body = res
  }
  
  // 给动态添加标签
  async labels(ctx: Context, next: Next) {
    const { labelArr } = ctx
    const { sayId } = ctx.params
    // 拿到了这些标签放入关系表中
    for (const value of labelArr) {
      const labelId = value.id

      // 当前一次插入过相同的标签过后下一次就不在插了
      const isExistsLabel = await labelservice.isExistsLabel(labelId, sayId)
      if (!isExistsLabel) {
        await labelservice.addLabel(labelId, sayId)
      }
    }
    
    ctx.body = '给动态添加标签'
  }
}

export default new SayController()
