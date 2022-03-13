import type { Context } from "koa"
import { IUser } from "../../../service/user/types";


export interface IContext extends Context { 
  user: IUser
}
