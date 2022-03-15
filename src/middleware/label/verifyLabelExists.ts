import { Context, Next } from "koa"

import { labelservice } from "../../service/label"

import type { ILabel } from "./types"

const verifyLabelExists = async (ctx: Context, next: Next) => {
  const { labels } = ctx.request.body
  const labelArr: ILabel[] = []

  for (const value of labels) {
    const label: ILabel = { name: value }

    const res1: any = await labelservice.only(value)
    
    if (!res1.length) {
      // 添加标签
      const res2: any = await labelservice.create(value)
      label.id = res2.insertId
    } else {
      label.id = res1[0].id
    }

    labelArr.push(label)
  }

  ctx.labelArr = labelArr 
  await next()
}

export default verifyLabelExists
