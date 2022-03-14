import connection from '../../database'
 
class AuthService {
  async checkTable(tableName: string, userId: number, id: number) {
    const statement = `SELECT * FROM ${tableName} WHERE id = ? && userId = ?`
    const [res]: any = await connection.execute(statement, [id, userId])
    return res.length
  }
}

export default new AuthService
