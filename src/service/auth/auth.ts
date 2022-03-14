import connection from '../../database'
 
class AuthService {
  async authPermission(userId: number, sayId: number) {
    const statement = `SELECT * FROM say WHERE id = ? && userId = ?`
    const [res]: any = await connection.execute(statement, [sayId, userId])
    return res.length
  }
}

export default new AuthService
