import { readdirSync } from "fs"

import type Application from "koa"
import type { IUserRouterObj } from "./types"

function useRoutes(this: Application) {
  // readdirSync 可以读取某个文件夹下面的文件
  const files = readdirSync(__dirname) // [ 'index.ts', 'user', 'types.ts' ]

  files.forEach(async (file) => {
    if (file === 'index.ts') {
      const { userRouter }: IUserRouterObj = await import(`./${file}`)
      this.use(userRouter.routes())
    }
  })
}

export default useRoutes
