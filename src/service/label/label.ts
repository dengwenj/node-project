import connection from '../../database'

class LabelService {
  async create<T>(name: T) {
    try {
      const statement = `INSERT INTO label (name) VALUES (?)`
      const [res] = await connection.execute(statement, [name])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new LabelService()
