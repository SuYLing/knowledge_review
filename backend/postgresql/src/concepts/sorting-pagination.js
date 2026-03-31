import { query } from "../db/index.js"
// ASC | DESC
export const getSortedUsers = async (column, order = "ASC") => {
  const sql = `
    SELECT * FROM users
    ORDER BY ${column} ${order};
  `
  try {
    const result = await query(sql)
    console.log("query data successful!----", result.rows)
  } catch (error) {
    console.log(error)
  }
}

export const getPaginatedUsers = async () => {
  const sql = `
    SELECT * FROM users
    LIMIT 2 OFFSET 1
  `
  try {
    const result = await query(sql)
    console.log("query data successful!----", result.rows)
  } catch (error) {
    console.log(error)
  }
}