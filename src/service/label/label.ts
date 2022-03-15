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

  // 把拿到的标签放入关系表中
  async addLabel<T>(labelId: T, sayId: T) {
    const statement = `INSERT INTO say_label (labelId, sayId) VALUES (?, ?)`
    const [res] = await connection.execute(statement, [labelId, sayId])
    return res
  }

  // 当前一次插入过相同的标签过后下一次这个动态里就不在插相同的了
  async isExistsLabel<T>(labelId: T, sayId: T) {
    const statement = `SELECT * FROM say_label WHERE sayId = ? && labelId = ?`
    const [res]: any = await connection.execute(statement, [sayId, labelId])
    return res.length ? true : false
  }

  // 获取标签
  async getLabels<T>(offset: T, limit: T) {
    try {
      const statement = `
        ${offset && limit ? `SELECT * FROM label LIMIT ?, ?` : `SELECT * FROM label`}
      `
      const [res] = await connection.execute(statement, offset && limit ? [offset, limit] : null)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new LabelService()
