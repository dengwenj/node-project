import connection from '../../database'

class fileservice {
  async avatarInfo(filename: string, size: unknown, mimetype: string, userId: any) {
    try {
      const statement = `INSERT INTO avatar (fileName, size, mimetype, userId) VALUES (?, ?, ?, ?)`
      const [res] = await connection.execute(statement, [filename, size, mimetype, userId])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new fileservice()
