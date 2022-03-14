import connection from '../../database'

class CommentService {
  // 发表评论
  async create(content: string, sayId: number, userId: number) {
    try {
      const statement = `INSERT INTO comment (content, sayId, userId) VALUES (?, ?, ?)`
      const [res] = await connection.execute(statement, [content, sayId, userId])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 回复评论
  async reply(content: string, sayId: number, commentId: number, userId: number) {
    try {
      const statement = `INSERT INTO comment (content, sayId, commentId, userId) VALUES (?, ?, ?, ?)`
      const [res] = await connection.execute(statement, [content, sayId, commentId, userId])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 修改评论
  async update(content: string, commentId: number) {
    try {
      const statement = `UPDATE comment SET content = ? WHERE id = ?`
      const [res] = await connection.execute(statement, [content, commentId])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new CommentService()