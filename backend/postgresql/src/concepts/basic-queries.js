import { query } from "../db/index.js"

export async function createUsersTable() {
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )
  `
  try {
    await query(createTableQuery)
    console.log("create user table successful~")
  } catch (error) {
    console.log("ERROR:=====", error)
  }
}
export async function insertUser(username, email) {
  try {
    // 查询语句
    await query(`
      INSERT INTO users (username, email)
      VALUES ($1, $2)
      `, [username, email])
    console.log("insert user table successful~")
  } catch (error) {
    console.log("error ------", error)
  }
}

export async function deleteUser(username) {
  try {
    // 删除语句
    const result = await query(`
      DELETE FROM users WHERE username = $1 RETURNING id
      `, [username])
    console.log("delete user table successful~", result.rows[0])
  } catch (error) {
    console.log("error ------", error)
  }
}
export async function updateUser(id, username, email) {
  try {
    // 更新语句
    const res = await query(`
      UPDATE users
      SET username = $2, email = $3
      WHERE id = $1
      `, [id, username, email])
    console.log("update user table successful~", res, res.rows[0])
  } catch (error) {
    console.log("error ------", error)
  }
}
export async function queryUserById(id) {
  try {
    // 删除语句
    const res = await query(`
      SELECT username FROM users
      WHERE id = $1
      `, [id])
    console.log("get user table successful~", res.rows[0])
  } catch (error) {
    console.log("error ------", error)
  }
}