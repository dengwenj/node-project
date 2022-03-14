import connection from '../../database'

class CommentService {
  async create(content: string, sayId: number, userId: number) {
    try {
      const statement = `INSERT INTO comment (content, sayId, userId) VALUES (?, ?, ?)`
      const [res] = await connection.execute(statement, [content, sayId, userId])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new CommentService()