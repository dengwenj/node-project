import { readdirSync } from "fs"

import type Application from "koa"
import type Router from "koa-router"
import type { IRouterObj } from "./types"

function useRoutes(this: Application) {
  // readdirSync 可以读取某个文件夹下面的文件
  const files = readdirSync(__dirname) // [ 'index.ts', 'user', 'types.ts' ]

  files.forEach(async (file) => {
    if (file === 'index.ts' || file === 'index.js') {
      const res: IRouterObj = await import(`./${file}`)
      Object.keys(res).forEach((item) => {
        const value: Router = (res as any)[item]
        this.use(value.routes())
        this.use(value.allowedMethods())
      })
    }
  })
}

export default useRoutes
