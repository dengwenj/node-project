import type Router from "koa-router";

export interface IRouterObj {
  userRouter: Router
  sayRouter: Router
  commentRouter: Router
  labelRouter: Router
}
