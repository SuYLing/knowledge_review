import { query } from "../db/index.js"

export const getUsersWithPosts = async () => {
  const sql = `
    SELECT users.id, users.username, posts.title
    FROM users
    INNER JOIN posts ON users.id = posts.userId
  `
  try {
    const result = await query(sql)
    console.log("inner join: ", result.rows)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const getAllUsersWithTheirPosts = async () => {
  const sql = `
    SELECT users.id, users.username, posts.title
    FROM users
    LEFT JOIN posts ON users.id = posts.userId
  `
  try {
    const result = await query(sql)
    console.log("left join: ", result.rows)
    return result
  } catch (error) {
    console.log(error)
  }
}
