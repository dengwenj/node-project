export interface Ienv extends NodeJS.ProcessEnv {
  APP_PORT?: string | undefined
  MYSQL_HOST?: string
  MYSQL_PORT?: string
  MYSQL_DATABASE?: string
  MYSQL_USER?: string
  MYSQL_PASSWORD?: string
}
