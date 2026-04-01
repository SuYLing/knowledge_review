import { query } from "../db/index.js"

// 删除用户时，同时删除对应的posts
export const createPostTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content VARCHAR(255) NOT NULL,
      userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
      create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
  `
  try {
    const res = await query(sql)
    console.log("create posts table: ", res.rows)
  } catch (error) {
    console.log(error)
  }
}

// 插入数据
export const insertPost = async (userId, title, content) => {
  const sql = `
    INSERt INTO posts (userId, title, content)
    VALUES ($1, $2, $3)
  `
  try {
    const result = await query(sql, [userId, title, content])
    console.log(result.rows)
    return result.rows
  } catch (error) {
    console.log(error)
  }
}