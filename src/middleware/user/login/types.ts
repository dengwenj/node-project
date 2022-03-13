import type { Context } from "koa"
import type { IUser } from "../../../service/user/types"

export interface IContext extends Context { 
  user: IUser
}
