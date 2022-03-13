import connection from '../../database'

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
      SELECT 
        say.id id, say.content content, say.createAt createTime, say.updateAt updateTime,
        JSON_OBJECT('id', users.id, 'name', users.username) author
      FROM say
      LEFT JOIN users ON say.userId = users.id
      WHERE say.id = ?;
    `
    try {
      const [res] = await connection.execute(statement, [id])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new SayService()