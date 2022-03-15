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
        JSON_OBJECT('id', users.id, 'name', users.username, 'avatarUrl', users.avatarUrl) author,
        IF(COUNT(label.id),JSON_ARRAYAGG(JSON_OBJECT('id', label.id, 'name', label.name)),NULL) label
      FROM say
      LEFT JOIN users ON say.userId = users.id
      LEFT JOIN say_label ON say.id = say_label.sayId
      LEFT JOIN label ON say_label.labelId = label.id
      GROUP BY say.id
      HAVING say.id = ?;
    `
    // SELECT  动态和评论一次性获取过来
    //   say.id id, say.content content, say.createAt createTime, say.updateAt updateTime,
    //   JSON_OBJECT('id', users.id, 'name', users.username) author,
    //   JSON_ARRAYAGG(
    //     JSON_OBJECT(
    //       'id', comment.id, 'content', comment.content, 'commentId', comment.commentId, 'createTime', comment.createAt,
    //       'user', JSON_OBJECT('id', cu.id, 'username', cu.username)
    //     )
    //   ) commentList
    // FROM say
    // LEFT JOIN users ON say.userId = users.id
    // LEFT JOIN comment ON say.id = comment.sayId
    // LEFT JOIN users cu ON comment.userId = cu.id
    // WHERE say.id = 1
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
      SELECT 
        say.id id, say.content content, say.createAt createTime, say.updateAt updateTime,
        JSON_OBJECT('id', users.id, 'name', users.username, 'avatarUrl', users.avatarUrl) author,
        (SELECT COUNT(*) FROM comment WHERE comment.sayId = say.id) commentCount,
        (SELECT COUNT(*) FROM say_label WHERE say_label.sayId = say.id) labelCount
      FROM say
      LEFT JOIN users ON say.userId = users.id
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

  // 删除动态
  async remove(sayId: number) {
    try {
      const statement = `DELETE FROM say WHERE id = ?;`
      const [res] = await connection.execute(statement, [sayId])
      console.log(res, 'fffww');
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new SayService()
