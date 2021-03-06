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

  // 删除评论
  async remove(commentId: number) {
    try {
      const statement = `DELETE FROM comment WHERE id = ?`
      const [res] = await connection.execute(statement, [commentId])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 获取评论列表
  async list<T>(sayId: T, offset: T, limit: T) {
    try {
      const statement = `
        SELECT 
          comment.id, comment.content, comment.commentId, comment.createAt,
          JSON_OBJECT('id', users.id, 'username', users.username) user
        FROM comment
        LEFT JOIN users ON comment.userId = users.id
        WHERE sayId = ?
        LIMIT ?, ?;
      `
      const [res] = await connection.execute(statement, [sayId, offset, limit])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new CommentService()
