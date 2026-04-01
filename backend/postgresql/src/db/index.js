import { Pool, types } from "pg"
types.setTypeParser(20, val => Number(val))

const pool = new Pool({
  connectionString: "postgre://postgres:123yuling@localhost:5432",
  password: "123yuling"
})
pool.on("error", (err) => console.log("something error: ", err))
pool.on("connect", (client) => {
  console.log("db connected successful")
})
export async function query(text, params) {
  const start = Date.now()
  try {
    const result = await pool.query(text, params)
    const duration = Date.now() - start
    console.log(`Executed query: ${JSON.stringify({ text, duration, rows: result.rowCount })}`)
    return result
  }
  catch (err) {
    console.error("something error: ", err)
  }
}