import type { Context } from "koa"
import type { IJwtUser } from "../../../service/user/types"

export interface IContentJWT extends Context {
  result: IJwtUser
}
