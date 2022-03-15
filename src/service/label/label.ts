import connection from '../../database'

class LabelService {
  // 创建标签
  async create<T>(name: T) {
    try {
      const statement = `INSERT INTO label (name) VALUES (?)`
      const [res] = await connection.execute(statement, [name])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 标签是唯一的,不能重复
  async only<T>(name: T) {
    try {
      const statement = `SELECT * FROM label WHERE name = ?`
      const [res] = await connection.execute(statement, [name])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new LabelService()
