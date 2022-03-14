import connection from '../../database'

const baseStatement = `
  SELECT 
    say.id id, say.content content, say.createAt createTime, say.updateAt updateTime,
    JSON_OBJECT('id', users.id, 'name', users.username) author
  FROM say
  LEFT JOIN users ON say.userId = users.id
`

class SayService {
  // 发表动态
  async create(id: number, content: string) {
    // 插入数据到数据库
    const statement = `INSERT INTO say (userId, content) VALUES (?, ?);`
    try {
      const [res] = await connection.execute(statement, [id, content])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 获取某一条动态
  async getSayById(id: number) {
    const statement = `
      ${baseStatement}
      WHERE say.id = ?;
    `
    try {
      const [res] = await connection.execute(statement, [id])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 获取多条数据 
  async getList(offset: any, limit: any) {
    // offset 偏移量 limit 一次限制多少条
    const statement = `
      ${baseStatement}
      LIMIT ?, ?;
    `
    try {
      const [res] = await connection.execute(statement, [offset, limit])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 修改动态
  async update(sayId: number, content: string) {
    try {
      const statement = `UPDATE say SET content = ? WHERE id = ?`
      const [res] = await connection.execute(statement, [content, sayId])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new SayService()
