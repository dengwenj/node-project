import connection from '../../database'

class SayService {
  async create(id: number, content: string) {
    // 插入数据
    const statement = `INSERT INTO say (userId, content) VALUES (?, ?);`
    try {
      const res = await connection.execute(statement, [id, content])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new SayService()