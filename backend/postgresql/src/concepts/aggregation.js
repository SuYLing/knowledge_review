import { query } from "../db/index.js"

export const countPostsByUser = async () => {
  const sql = `
    SELECT users.id, COUNT(posts.id) as postCount
    FROM users
    LEFT JOIN posts ON posts.userID = users.id
    GROUP BY users.id
    ORDER BY users.id ASC
  `
  try {
    const result = await query(sql)
    console.log("groud clause: ", result.rows)
    return result.rows
  } catch (error) {
    console.log(error)
  }
}

export const getAveragePostNumber = async () => {
  const sql = `
    SELECT AVG(postCount)::NUMERIC(10,2) as postAvg
    FROM (
      SELECT COUNT(posts.id) as postCount
      FROM users
      LEFT JOIN posts ON posts.userID = users.id
      GROUP BY users.id
    )

  `
  try {
    const result = await query(sql)
    console.log("avg clause: ", result.rows)
    return result.rows
  } catch (error) {
    console.log(error)
  }
}