import { createClient } from "redis"
const connectToRedis = async () => {
  try {
    const client = await createClient({
      url: "redis://localhost:6379"
    }).on("error", (err) => console.log("redis client error: ", err))
      .connect()

    await client.set("name", "test")
    console.log(await client.get("name"))
  } catch (error) {
    console.log(error)
  }
}
connectToRedis()
